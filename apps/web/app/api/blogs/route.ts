// apps/web/app/api/blogs/route.ts

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET(req: NextRequest, context: { params: {} }) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");
  const slug = searchParams.get("slug");

  const offset = (page - 1) * limit;

  try {

    /* -------- Single blog by slug -------- */
    if (slug) {
      const result = await pool.query(
        `
        SELECT
          b.blog_id,
          b.title,
          b.slug,
          b.excerpt,
          b.content,
          b.status,
          b.published_at,
          b.created_at,
          m.file_url AS featured_image_url,
          c.category,
          c.categoryslug
        FROM blogs b
        LEFT JOIN media m ON m.media_id = b.featured_image_id
        LEFT JOIN categories c ON c.category_id = b.category_id
        WHERE b.slug = $1
          AND b.status = 'published'
        LIMIT 1
        `,
        [slug]
      );

      if (!result.rows.length) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(result.rows[0]);
    }

    /* -------- List categories -------- */
    const where: string[] = [];
    const values: any[] = [];

    if (search) {
      values.push(`%${search.toLowerCase()}%`);
      where.push(`LOWER(b.title) LIKE $${values.length}`);
    }

    const category = searchParams.get("category");

    if (category) {
      values.push(category);
      where.push(`c.categoryslug = $${values.length}`);
    }

    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    let orderBy = "b.created_at DESC";
    if (sort === "nameAsc") orderBy = "b.title ASC";
    if (sort === "nameDesc") orderBy = "b.title DESC";
    if (sort === "dateAsc") orderBy = "b.created_at ASC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT
            b.blog_id,
            b.title,
            b.slug,
            b.excerpt,
            b.content,
            b.meta_title,
            b.meta_description,
            b.published_at,
            b.status,
            b.created_at,
            b.featured_image_id,
            m.file_url AS featured_image_url,
            c.category,
            c.categoryslug
      FROM blogs b
      LEFT JOIN media m ON m.media_id = b.featured_image_id
      LEFT JOIN categories c ON c.category_id = b.category_id
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1} OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(DISTINCT b.blog_id)::int AS count
      FROM blogs b
      LEFT JOIN categories c ON c.category_id = b.category_id
      ${whereClause}
    `;

    const [dataRes, countRes] = await Promise.all([
      pool.query(dataQuery, values),
      pool.query(countQuery, values.slice(0, where.length ? 1 : 0)),
    ]);

    return NextResponse.json({
      items: dataRes.rows,
      totalResults: countRes.rows[0].count,
      page,
      pageSize: limit,
      totalPages: Math.ceil(countRes.rows[0].count / limit),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

    /* -------- Single blog -------- */
/*     if (id) {
      const result = await pool.query(
        `SELECT
            b.blog_id,
            b.title,
            b.slug,
            b.excerpt,
            b.content,
            b.meta_title,
            b.meta_description,
            b.published_at,
            b.status,
            b.created_at,
            b.featured_image_id,
            m.file_url AS featured_image_url,
            c.category,
            c.categoryslug
          FROM blogs b
          LEFT JOIN media m ON m.media_id = b.featured_image_id
          LEFT JOIN categories c ON c.category_id = b.category_id
          WHERE blog_id = $1
          ORDER BY b.created_at DESC`,
        [id]
      );

      if (!result.rows.length) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(result.rows[0]);
    } */