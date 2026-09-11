import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

import CategoryHero from '../../../components/category/CategoryHero';
import CategoryCoverage from '../../../components/category/CategoryCoverage';
import CategoryRoles from '../../../components/category/CategoryRoles';
import CategoryModel from '../../../components/category/CategoryModel';
import CategoryFaq from '../../../components/category/CategoryFaq';
import CategoryFinalCta from '../../../components/category/CategoryFinalCta';
import HowItWorks from '../../../components/category/CategoryHowItWorks';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { allCategories } from '@/components/forms/categories';
import { getCanonicalUrl } from '@/lib/seo';

interface PageProps {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

const categoryKeyMap: Record<string, string> = {
  'it-development': 'itDevelopment',
  'design-services': 'designServices',
  'marketing-analytics': 'marketingAnalytics',
  'admin-business-support': 'adminBusinessSupport',
  'finance-accounting': 'financeAccounting',
  'travel-reservations': 'travelReservations',
  'supply-chain': 'supplyChain',
};

function getCategoryData(locale: string, category: string) {
  const commonPath = path.join(process.cwd(), 'i18n', 'locales', locale, 'common.json');
  if (!fs.existsSync(commonPath)) return null;

  const commonData = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
  const categoryKey = categoryKeyMap[category];
  if (!categoryKey || !commonData[categoryKey]) return null;

  return commonData[categoryKey];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryData = getCategoryData(locale, category);

  if (!categoryData) {
    return {
      title: "Staff Outsourcing",
      description: "Recruit and outsource staff in the Netherlands.",
      alternates: {
        canonical: getCanonicalUrl(locale, [category]),
      },
    };
  }

  const seo = categoryData.seo;

  return {
    title: seo?.metaTitle ?? "Staff Outsourcing",
    description: seo?.metaDescription ?? "Recruit and outsource staff in the Netherlands.",
    alternates: {
      canonical: getCanonicalUrl(locale, [category]),
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { locale, category } = resolvedParams;

  const commonPath = path.join(process.cwd(), 'i18n', 'locales', locale, 'common.json');

  if (!fs.existsSync(commonPath)) {
    notFound();
  }

  const commonData = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
  const categoryKey = categoryKeyMap[category];

  if (!categoryKey || !commonData[categoryKey]) {
    notFound();
  }

  const categoryData = commonData[categoryKey];
  const pageHero = categoryData.hero;
  const pageSections = categoryData.sections;

  // Fallback to check roles directly from page sections first, then look into rolesWePlace if needed
  const rolesList =
    pageSections?.roles ||
    commonData.rolesWePlace?.categories?.find((c: any) => c.href.includes(category))?.roles ||
    [];

  return (
    <main className="w-full">
      <CategoryHero data={pageHero} />

      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto py-12 space-y-16">
        <CategoryCoverage title={pageSections?.coverageTitle} body={pageSections?.coverageBody} />
        <CategoryRoles title={pageSections?.rolesTitle} roles={rolesList} />

        {pageSections?.modelTitle && (
          <CategoryModel title={pageSections?.modelTitle} body={pageSections?.modelBody} />
        )}

        <HowItWorks />

        <section className="w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#0d2b33] sm:text-4xl">
              Ready to hire for {category.replace(/-/g, ' ')}?
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Fill out the form below and our hiring team will get back to you shortly.
            </p>
          </div>

          <EnquiryForm
            categories={allCategories}
            defaultMode="hiring"
            lockMode={true}
            defaultCategory={categoryKey}
          />
        </section>

        <CategoryFaq title={pageSections?.faqTitle} faqs={pageSections?.faqs || []} />
        <CategoryFinalCta data={pageSections?.finalCta} />
      </div>
    </main>
  );
}