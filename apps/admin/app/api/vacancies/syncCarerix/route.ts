// apps/admin/app/api/vacancies/syncCarerix/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import { carerixGraphQL } from "@/lib/carerix/carerix-client";

// ✅ Types
type CarerixVacancy = {
  _id: string;
  vacancyID?: string;
  vacancyNo?: string;
  jobTitle?: string;
  jobTitleOrFunction?: string;
  companyName?: string;
  ownerDisplay?: string;
  statusDisplay?: string;
  startDate?: string;
  endDate?: string;
  deadline?: string;
  workCity?: string;
  countryNode?: { name?: string };
  hoursPerWeek?: number;
  fte?: number;
  minSalary?: number;
  maxSalary?: number;
  creationDate?: string;
  modificationDate?: string;
};

type CarerixVacancyPage = {
  crVacancyPage: {
    items: CarerixVacancy[];
    totalPages: number;
  };
};

export async function POST() {
  try {
    let page = 0;
    const size = 50;

    let totalPages = 1;
    let created = 0;
    let updated = 0;

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
              ownerDisplay
              statusDisplay
              startDate
              endDate
              deadline
              workCity
              countryNode
              hoursPerWeek
              fte
              minSalary
              maxSalary
              creationDate
              modificationDate
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
        }
      );

      totalPages = data.crVacancyPage.totalPages;
      const vacancies = data.crVacancyPage.items;

      for (const vac of vacancies) {
        const result = await pool.query(
          `
          INSERT INTO carerix_vacancies
            (carerix_id, vacancy_id, vacancy_no,
             job_title, job_title_or_function,
             company_name, owner_display,
             status_display,
             start_date, end_date, deadline,
             city, country,
             hours_per_week, fte,
             min_salary, max_salary,
             creation_date, modification_date)
          VALUES
            ($1,$2,$3,
             $4,$5,
             $6,$7,
             $8,
             $9,$10,$11,
             $12,$13,
             $14,$15,
             $16,$17,
             $18,$19)
          ON CONFLICT (carerix_id) DO UPDATE SET
            vacancy_id = EXCLUDED.vacancy_id,
            vacancy_no = EXCLUDED.vacancy_no,
            job_title = EXCLUDED.job_title,
            job_title_or_function = EXCLUDED.job_title_or_function,
            company_name = EXCLUDED.company_name,
            owner_display = EXCLUDED.owner_display,
            status_display = EXCLUDED.status_display,
            start_date = EXCLUDED.start_date,
            end_date = EXCLUDED.end_date,
            deadline = EXCLUDED.deadline,
            city = EXCLUDED.city,
            country = EXCLUDED.country,
            hours_per_week = EXCLUDED.hours_per_week,
            fte = EXCLUDED.fte,
            min_salary = EXCLUDED.min_salary,
            max_salary = EXCLUDED.max_salary,
            modification_date = EXCLUDED.modification_date,
            updated_at = NOW()
          RETURNING (xmax = 0) AS inserted
          `,
          [
            vac._id,
            vac.vacancyID || null,
            vac.vacancyNo || null,
            vac.jobTitle || null,
            vac.jobTitleOrFunction || null,
            vac.companyName || null,
            vac.ownerDisplay || null,
            vac.statusDisplay || null,
            vac.startDate ? new Date(vac.startDate) : null,
            vac.endDate ? new Date(vac.endDate) : null,
            vac.deadline ? new Date(vac.deadline) : null,
            vac.workCity || null,
            vac.countryNode?.name || null,
            vac.hoursPerWeek || null,
            vac.fte || null,
            vac.minSalary || null,
            vac.maxSalary || null,
            vac.creationDate ? new Date(vac.creationDate) : null,
            vac.modificationDate ? new Date(vac.modificationDate) : null,
          ]
        );

        if (result.rows[0].inserted) {
          created++;
        } else {
          updated++;
        }
      }

      page++;
    }

    return NextResponse.json({
      message: "All Carerix vacancies synced",
      created,
      updated,
    });

  } catch (err) {
    console.error("Vacancy sync error:", err);
    return NextResponse.json(
      { error: "Failed to sync vacancies" },
      { status: 500 }
    );
  }
}
