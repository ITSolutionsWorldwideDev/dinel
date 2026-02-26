// apps/admin/app/api/jobs/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import slugify from "slugify";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const offset = (page - 1) * limit;

  const filters = {
    search: searchParams.get("search"),
    status: searchParams.get("status"),
    employment_type: searchParams.get("employment_type"),
    workplace_type: searchParams.get("workplace_type"),
    experience_level: searchParams.get("experience_level"),
    sort: searchParams.get("sort") || "recent",
  };

  try {
    const where: string[] = [];
    const values: any[] = [];

    const addFilter = (sql: string, value: any) => {
      values.push(value);
      where.push(`${sql} $${values.length}`);
    };

    if (filters.search) {
      values.push(`%${filters.search.toLowerCase()}%`);
      where.push(
        `(LOWER(title) LIKE $${values.length} OR LOWER(location) LIKE $${values.length})`,
      );
    }

    if (filters.status) addFilter("status =", filters.status);
    if (filters.employment_type)
      addFilter("employment_type =", filters.employment_type);
    if (filters.workplace_type)
      addFilter("workplace_type =", filters.workplace_type);
    if (filters.experience_level)
      addFilter("experience_level =", filters.experience_level);

    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    let orderBy = "created_at DESC";
    if (filters.sort === "title_asc") orderBy = "title ASC";
    if (filters.sort === "title_desc") orderBy = "title DESC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT
        id,
        job_id,
        title,
        location,
        employment_type,
        workplace_type,
        department,
        experience_level,        
        experience,
        education,
        visibility,
        status,
        published_at
      FROM jobs
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1}
      OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM jobs
      ${whereClause}
    `;

    const [dataRes, countRes] = await Promise.all([
      pool.query(dataQuery, values),
      pool.query(countQuery, values.slice(0, values.length - 2)),
    ]);

    return NextResponse.json({
      items: dataRes.rows,
      page,
      pageSize: limit,
      totalResults: countRes.rows[0].count,
      totalPages: Math.ceil(countRes.rows[0].count / limit),
    });
  } catch (err) {
    console.error("GET /api/jobs error:", err);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 },
    );
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      description,
      location,
      employment_type,
      workplace_type,
      department,
      experience_level,
      experience,
      education,
      visibility,
      status,
      sector_id,
      discipline_id,
      work_city,
      work_full_address,
      work_postal_code,
      work_street,
      country_node,
      vacancy_information,
      hours_per_week,
      deadline,
      closed_at,
    } = body;

    if (!title || !description || !employment_type || !workplace_type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const slug = slugify(title, { lower: true });

    const companyId = 1;
    const createdBy = 1;

    const result = await pool.query(
      `
      INSERT INTO jobs (
        title,
        slug,
        description,
        location,
        employment_type,
        workplace_type,
        department,
        experience_level,
        experience,
        education,
        visibility,
        status,
        sector_id,
        discipline_id,
        work_city,
        work_full_address,
        work_postal_code,
        work_street,
        country_node,
        vacancy_information,
        hours_per_week,
        deadline,
        closed_at,
        company_id,
        created_by
      )
      VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
        $11,$12,$13,$14,$15,$16,$17,$18,
        $19,$20,$21,$22,$23,$24,$25
      )
      RETURNING *
      `,
      [
        title,
        slug,
        description,
        location || null,
        employment_type,
        workplace_type,
        department || null,
        experience_level || null,
        experience || null,
        education || null,
        visibility,
        status,
        sector_id || null,
        discipline_id || null,
        work_city || null,
        work_full_address || null,
        work_postal_code || null,
        work_street || null,
        country_node || null,
        vacancy_information || null,
        hours_per_week || 0,
        deadline ? new Date(deadline) : null,
        closed_at ? new Date(closed_at) : null,
        companyId,
        createdBy,
      ],
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err) {
    console.error("POST /api/jobs error:", err);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 },
    );
  }
}

/* 


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
        ];

        const values: any[] = [
          title|| "Untitled Job",
          slug,
          description || "",
          location || "",
          "DRAFT",
          "PUBLIC",
          employment_type,
          workplace_type,
          companyId,
          createdBy,
        ];
        const closed_at = vac.endDate ? new Date(vac.endDate) : null;
        const deadlineTime = vac.deadline ? new Date(vac.deadline) : null;

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
        );*/
