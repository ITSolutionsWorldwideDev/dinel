// apps/admin/app/api/jobs/syncCarerix/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import slugify from "slugify";
import { carerixGraphQL } from "@/lib/carerix/carerix-client";

// ✅ TypeScript types for Carerix response
/* type CarerixJob = {
  _id: string;
  jobID: string;
  name: string;
  jobInformation?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  employmentType?: string;
  workplaceType?: string;
};

type CarerixJobPage = {
  crJobPage: {
    first: boolean;
    items: CarerixJob[];
    last: boolean;
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}; */

type CarerixVacancy = {
  _id: string;
  vacancyID?: string;
  vacancyNo?: string;
  jobTitle?: string;
  jobTitleOrFunction?: string;
  companyName?: string;
  contactInformation?: string;
  ownerDisplay?: string;
  statusDisplay?: string;
  startDate?: string;
  statusChangedDate?: string;
  endDate?: string;
  deadline?: string;
  offerInformation?: string;
  skillNotes?: string;
  sourceInfo?: string;
  workCity?: string;
  workFullAddress?: string;
  workLocation?: string;
  workPostalCode?: string;
  workStreet?: string;
  workVacancyAddress?: string;
  // countryNode?: { name?: string };
  countryNode?: number;
  vacancyInformation?: string;
  hoursPerWeek?: number;
  fte?: number;
  minSalary?: number;
  maxSalary?: number;
  creationDate?: string;
  modificationDate?: string;
  deleted?: number;
};

type CarerixVacancyPage = {
  crVacancyPage: {
    items: CarerixVacancy[];
    totalPages: number;
  };
};

async function generateUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let counter = 2;

  while (true) {
    const { rows } = await pool.query(
      `SELECT 1 FROM jobs WHERE slug = $1 LIMIT 1`,
      [slug],
    );

    if (rows.length === 0) {
      return slug; // ✅ slug is unique
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

export async function POST() {
  try {
    let page = 0;
    const size = 50;

    let totalPages = 1;
    let created = 0;
    let updated = 0;

    const companyId = Number(process.env.DEFAULT_COMPANY_ID) || 1;
    const createdBy = Number(process.env.DEFAULT_USER_ID) || 1;

    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const lastMonthISO = lastMonth.toISOString();

    while (page < totalPages) {
      const data = await carerixGraphQL<CarerixVacancyPage>(
        `
              query (
                $norestrict: Boolean
                $pageable: Pageable
              ) {
                crVacancyPage(
                  norestrict: $norestrict
                  pageable: $pageable
                ) {
                  items {
                      _id
                      vacancyID
                      vacancyNo
                      jobTitle
                      jobTitleOrFunction
                      companyName
                      contactInformation
                      ownerDisplay
                      statusDisplay
                      startDate
                      statusChangedDate
                      endDate
                      deadline
                      offerInformation
                      skillNotes
                      sourceInfo
                      workCity

                      workFullAddress
                      workLocation
                      workPostalCode
                      workStreet
                      workVacancyAddress

                      countryNode
                      vacancyInformation
                      hoursPerWeek
                      fte
                      minSalary
                      maxSalary
                      creationDate
                      modificationDate
                      deleted
                  }
                  totalPages
                }
              }
              `,
        {
          norestrict: true,
          pageable: {
            page,
            size,
            sort: [
              {
                property: "modificationDate",
                // property: "startDate",
                direction: "DESC",
              },
            ],
          },
          filter: {
            modificationDate: {
              ge: lastMonthISO, // greater or equal
            },
          },
        },
      );

      totalPages = data.crVacancyPage.totalPages;
      const vacancies = data.crVacancyPage.items;

      for (const vac of vacancies) {
        const deadlineDate = vac.deadline ? new Date(vac?.deadline) : "";

        if (
          !vac.modificationDate ||
          Number(vac?.deleted) > 0 ||
          (vac?.statusDisplay == "Vervallen")  ||
          (deadlineDate && deadlineDate < lastMonth)
        ) {
          continue;
        }

        const modificationDate = new Date(vac?.modificationDate);

 
        if (modificationDate < lastMonth) {
          page = totalPages;
          break;
        }

        const baseSlug = slugify(vac.jobTitle || "job", {
          lower: true,
          strict: true,
        });
        const slug = await generateUniqueSlug(baseSlug);

        const employmentType = "FULL_TIME";
        const workplaceType = "ONSITE";

        const columns = [
          "title",
          "slug",
          "description",
          "location",
          "status",
          "visibility",
          "employment_type",
          "workplace_type",
          "company_id",
          "created_by",
          "carerix_id",
          "vacancy_id",
          "vacancy_no",
        ];

        const values: any[] = [
          vac.jobTitle || "Untitled Job",
          slug,
          vac.offerInformation || "",
          vac.workLocation || "",
          "DRAFT",
          "PUBLIC",
          employmentType,
          workplaceType,
          companyId,
          createdBy,
          vac._id,
          vac.vacancyID || "",
          vac.vacancyNo || "",
        ];
        const closed_at = vac.endDate ? new Date(vac.endDate) : null;
        const deadlineTime = vac.deadline ? new Date(vac.deadline) : null;

        // console.log("optionalFields statusDisplay ==== ", vac.statusDisplay);
        // console.log(
        //   "optionalFields statusChangedDate ==== ",
        //   vac.statusChangedDate,
        // );
        // console.log("optionalFields creationDate ==== ", vac.creationDate);
        // console.log("optionalFields endDate ==== ", vac.endDate);
        // console.log("optionalFields deleted ==== ", vac.deleted);
        // console.log("optionalFields modificationDate ==== ", modificationDate);

        const optionalFields: { col: string; val: any }[] = [
          { col: "closed_at", val: closed_at },
          { col: "contact_information", val: vac.contactInformation || null },
          { col: "status_display", val: vac.statusDisplay || null },
          { col: "offer_information", val: vac.offerInformation || null },
          { col: "work_city", val: vac.workCity || null },
          { col: "work_full_address", val: vac.workFullAddress || null },
          { col: "work_postal_code", val: vac.workPostalCode || null },
          { col: "work_street", val: vac.workStreet || null },
          { col: "country_node", val: vac.countryNode || null },
          { col: "vacancy_information", val: vac.vacancyInformation || null },
          {
            col: "hours_per_week",
            val: typeof vac.hoursPerWeek === "number" ? vac.hoursPerWeek : null,
          },
          { col: "deadline", val: deadlineTime },
        ];

        for (const field of optionalFields) {
          if (field.val !== null && field.val !== undefined) {
            columns.push(field.col);
            values.push(field.val);
          }
        }

        const placeholders = values.map((_, i) => `$${i + 1}`).join(",");

        const result = await pool.query(
          `
          INSERT INTO jobs (${columns.join(",")})
          VALUES (${placeholders})
          ON CONFLICT (carerix_id) DO UPDATE SET

              title = EXCLUDED.title,
              slug = EXCLUDED.slug,
              description = EXCLUDED.description,
              location = EXCLUDED.location,
              status = EXCLUDED.status,
              visibility = EXCLUDED.visibility,
              employment_type = EXCLUDED.employment_type,
              workplace_type = EXCLUDED.workplace_type,
              company_name = EXCLUDED.company_name,
              vacancy_id = EXCLUDED.vacancy_id,
              vacancy_no = EXCLUDED.vacancy_no,
              contact_information = EXCLUDED.contact_information,
              status_display = EXCLUDED.status_display,
              offer_information = EXCLUDED.offer_information,
              "work_city" = EXCLUDED."work_city",
              "work_full_address" = EXCLUDED."work_full_address",
              "work_postal_code" = EXCLUDED."work_postal_code",
              "work_street" = EXCLUDED."work_street",
              "country_node" = EXCLUDED."country_node",
              "vacancy_information" = EXCLUDED."vacancy_information",
              "hours_per_week" = EXCLUDED."hours_per_week",
              deadline = EXCLUDED.deadline,
              closed_at = EXCLUDED.closed_at,
              updated_at = NOW()

          RETURNING (xmax = 0) AS inserted
          `,
          values,
        );

        if (result.rows[0].inserted) created++;
        else updated++;
      }

      page++;
    }

    return NextResponse.json({
      message: "All Carerix jobs synced",
      created,
      updated,
    });
  } catch (err) {
    console.error("Sync error:", err);
    return NextResponse.json({ error: "Failed to sync jobs" }, { status: 500 });
  }
}

/* 
      
      

        // const closed_at = vac.endDate
        //   ? new Date(vac.endDate).toTimeString().split(" ")[0] // "HH:MM:SS"
        //   : null;

        // const deadlineTime = vac.deadline
        //   ? new Date(vac.deadline).toTimeString().split(" ")[0] // "HH:MM:SS"
        //   : null;

      for (const vac of vacancies) {
        const baseSlug = slugify(vac.jobTitle || "job", {
          lower: true,
          strict: true,
        });

        const slug = await generateUniqueSlug(baseSlug);

        const employmentType = "FULL_TIME"; //job.employmentType ||
        const workplaceType = "ONSITE"; // job.workplaceType ||

        const result = await pool.query(
          `
            INSERT INTO jobs
              (title, slug, description, location, status, visibility, employment_type,
              workplace_type, company_id, created_by, created_at, closed_at, carerix_id, 
              company_name, vacancy_id, vacancy_no, "contactInformation", "statusDisplay", 
              "offerInformation", "workCity","workFullAddress", "workPostalCode", "workStreet", 
              "countryNode", "vacancyInformation", "hoursPerWeek", deadline)
            VALUES
              ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27)
            ON CONFLICT (carerix_id) DO UPDATE SET
              title = EXCLUDED.title,
              slug = EXCLUDED.slug,
              description = EXCLUDED.description,
              location = EXCLUDED.location,
              status = EXCLUDED.status,
              visibility = EXCLUDED.visibility,
              employment_type = EXCLUDED.employment_type,
              workplace_type = EXCLUDED.workplace_type,
              company_name = EXCLUDED.company_name,
              vacancy_id = EXCLUDED.vacancy_id,
              vacancy_no = EXCLUDED.vacancy_no,
              "contactInformation" = EXCLUDED."contactInformation",
              "statusDisplay" = EXCLUDED."statusDisplay",
              "offerInformation" = EXCLUDED."offerInformation",
              "workCity" = EXCLUDED."workCity",
              "workFullAddress" = EXCLUDED."workFullAddress",
              "workPostalCode" = EXCLUDED."workPostalCode",
              "workStreet" = EXCLUDED."workStreet",
              "countryNode" = EXCLUDED."countryNode",
              "vacancyInformation" = EXCLUDED."vacancyInformation",
              "hoursPerWeek" = EXCLUDED."hoursPerWeek",
              deadline = EXCLUDED.deadline,
              closed_at = EXCLUDED.closed_at,
              updated_at = NOW()

            RETURNING (xmax = 0) AS inserted
            `,
          [
            vac.jobTitle || "Untitled Job",
            slug,
            vac.offerInformation || "",
            vac.workLocation || "",
            "DRAFT",
            "PUBLIC", // visibility
            employmentType,
            workplaceType, 
            companyId,
            createdBy,
            vac.startDate ? new Date(vac.startDate) : null,
            vac.endDate ? new Date(vac.endDate) : null,
            vac._id,
            vac.companyName || "",
            vac.vacancyID || "",
            vac.vacancyNo || "",
            vac.contactInformation || "",
            vac.statusDisplay || "",
            vac.offerInformation || "",
            vac.workCity || "",
            vac.workFullAddress || "",
            vac.workPostalCode || "",
            vac.workStreet || "",
            vac.countryNode,
            vac.vacancyInformation || "",
            vac.hoursPerWeek,
            vac.deadline,
          ],
        );

        if (result.rows[0].inserted) {
          created++;
        } else {
          updated++;
        }
      } */

/* const data = await carerixGraphQL<CarerixJobPage>(
        `
        query (
          $norestrict: Boolean
          $pageable: Pageable
        ) {
          crJobPage(
            norestrict: $norestrict
            pageable: $pageable
          ) {
            items {
              _id
              jobID
              name
              jobInformation
              status
              startDate
              endDate
            }
            totalPages
          }
        }
        `,
        {
          norestrict: true,
          pageable: {
            page,
            size,
            sort: [
              {
                property: "startDate",
                direction: "DESC",
              },
            ],
          },
        },
      ); 
      totalPages = data.crJobPage.totalPages;
      const carerixJobs = data.crJobPage.items;
      
      const result = await pool.query(
          `
        INSERT INTO jobs
          (title, slug, description, status, visibility,
           employment_type, workplace_type,
           company_id, created_by, published_at, closed_at, carerix_id)
        VALUES
          ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
        ON CONFLICT (carerix_id) DO UPDATE SET
          title = EXCLUDED.title,
          slug = EXCLUDED.slug,
          description = EXCLUDED.description,
          status = EXCLUDED.status,
          employment_type = EXCLUDED.employment_type,
          workplace_type = EXCLUDED.workplace_type,
          updated_at = NOW()
        RETURNING (xmax = 0) AS inserted
        `,
          [
            job.name || "Untitled Job",
            slug,
            job.jobInformation || "",
            job.status || "DRAFT",
            "PUBLIC", // visibility
            employmentType, // fallback default
            workplaceType, // fallback default
            companyId,
            createdBy,
            job.startDate ? new Date(job.startDate) : null,
            job.endDate ? new Date(job.endDate) : null,
            job._id,
          ],
        ); */
