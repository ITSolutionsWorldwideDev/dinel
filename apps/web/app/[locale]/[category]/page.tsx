import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

import CategoryHero from '../../../components/category/CategoryHero';
import CategoryCoverage from '../../../components/category/CategoryCoverage';
import CategoryRoles from '../../../components/category/CategoryRoles';
import CategoryModel from '../../../components/category/CategoryModel';
import CategoryFaq from '../../../components/category/CategoryFaq';
import CategoryFinalCta from '../../../components/category/CategoryFinalCta';
import HowItWorks from '../../../components/category/CategoryHowItWorks';
import ContactFormMapSection from '@/components/shared/ContactFormMapSection';
import { allCategories } from '@/components/forms/categories';

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
};

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

  const rolesCategory =
    commonData.rolesWePlace?.categories?.find((c: any) => c.href.includes(category)) || { roles: [] };

  return (
    <main className="w-full">
      <CategoryHero data={pageHero} />

      <div className="px-4 sm:px-6 lg:px-12 py-12">
        <CategoryCoverage title={pageSections?.coverageTitle} body={pageSections?.coverageBody} />
        <CategoryRoles title={pageSections?.rolesTitle} roles={rolesCategory.roles} />

        {pageSections?.modelTitle && (
          <CategoryModel title={pageSections?.modelTitle} body={pageSections?.modelBody} />
        )}

        <HowItWorks />
      </div>

      <ContactFormMapSection
        categories={allCategories}
        defaultCategory={category}
        lockCategory={true}
        title="Hire Talent for This Role"
        description="Tell us what you need and our team will get back to you shortly."
      />

      <div className="px-4 sm:px-6 lg:px-12 py-12">
        <CategoryFaq title={pageSections?.faqTitle} faqs={pageSections?.faqs || []} />
        <CategoryFinalCta data={pageSections?.finalCta} />
      </div>
    </main>
  );
}