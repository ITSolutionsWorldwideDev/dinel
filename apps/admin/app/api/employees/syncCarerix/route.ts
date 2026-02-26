// apps/admin/app/api/employees/syncCarerix/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import { carerixGraphQL } from "@/lib/carerix/carerix-client";


type CarerixEmployee = {
  _id: string;
  employeeID?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  emailAddress?: string;
  phoneNumber?: string;
  mobileNumber?: string;
  birthDate?: string;
  startDate?: string;
  statusDisplay?: string;
  ownerDisplay?: string;
  city?: string;
  homeCountryNode?: { name?: string };
};

type CarerixEmployeePage = {
  crEmployeePage: {
    items: CarerixEmployee[];
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
      const data = await carerixGraphQL<CarerixEmployeePage>(
        `
        query (
          $norestrict: Boolean
          $pageable: Pageable
        ) {
          crEmployeePage(
            norestrict: $norestrict
            pageable: $pageable
          ) {
            items {
              _id
              employeeID
              firstName
              lastName
              name
              emailAddress
              phoneNumber
              mobileNumber
              birthDate
              startDate
              statusDisplay
              ownerDisplay
              city
              homeCountryNode {
                name
              }
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

      totalPages = data.crEmployeePage.totalPages;
      const employees = data.crEmployeePage.items;

      for (const emp of employees) {
        const result = await pool.query(
          `
          INSERT INTO carerix_employee
            (carerix_id, employee_id, first_name, last_name, full_name,
             email, phone, mobile,
             birth_date, start_date,
             status_display, owner_display,
             city, country)
          VALUES
            ($1,$2,$3,$4,$5,
             $6,$7,$8,
             $9,$10,
             $11,$12,
             $13,$14)
          ON CONFLICT (carerix_id) DO UPDATE SET
            employee_id = EXCLUDED.employee_id,
            first_name = EXCLUDED.first_name,
            last_name = EXCLUDED.last_name,
            full_name = EXCLUDED.full_name,
            email = EXCLUDED.email,
            phone = EXCLUDED.phone,
            mobile = EXCLUDED.mobile,
            birth_date = EXCLUDED.birth_date,
            start_date = EXCLUDED.start_date,
            status_display = EXCLUDED.status_display,
            owner_display = EXCLUDED.owner_display,
            city = EXCLUDED.city,
            country = EXCLUDED.country,
            updated_at = NOW()
          RETURNING (xmax = 0) AS inserted
          `,
          [
            emp._id,
            emp.employeeID || null,
            emp.firstName || null,
            emp.lastName || null,
            emp.name || null,
            emp.emailAddress || null,
            emp.phoneNumber || null,
            emp.mobileNumber || null,
            emp.birthDate ? new Date(emp.birthDate) : null,
            emp.startDate ? new Date(emp.startDate) : null,
            emp.statusDisplay || null,
            emp.ownerDisplay || null,
            emp.city || null,
            emp.homeCountryNode?.name || null,
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
      message: "All Carerix employees synced",
      created,
      updated,
    });

  } catch (err) {
    console.error("Employee sync error:", err);
    return NextResponse.json(
      { error: "Failed to sync employees" },
      { status: 500 }
    );
  }
}
