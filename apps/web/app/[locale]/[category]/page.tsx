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

import ServiceHeroSection from '@/components/service/HeroSection';
import ServiceCoreConceptSection from '@/components/service/CoreConceptSection';
import ServiceProcessSection from '@/components/service/ProcessSection';
import ServiceDivisionOfLaborSection from '@/components/service/DivisionOfLaborSection';
import ServiceDecisionGuideSection from '@/components/service/DecisionGuideSection';
import ServiceFaqSection from '@/components/service/FaqSection';
import ServiceFinalCtaSection from '@/components/service/FinalCtaSection';

import EnquiryForm from '@/components/forms/EnquiryForm';
import { allCategories } from '@/components/forms/categories';
import { getCanonicalUrl, getHreflangAlternates } from '@/lib/seo';
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

const serviceKeyMap: Record<string, string> = {
  'recruitment-outsourcing': 'recruitmentOutsourcing',
  'recruitment-process-outsourcing': 'recruitmentProcessOutsourcing',
  'temporary-staffing-services': 'temporaryStaffingServices',
  'payrolling-for-dutch-companies': 'payrollingForDutchCompanies',
  'temporary-staffing': 'temporaryStaffingServices',
  'payrolling': 'payrollingServices',
  'recruitment-placement': 'recruitmentOutsourcing',
  'recruitment-process': 'recruitmentProcessOutsourcing',
};

function readCommonData(locale: string) {
  const commonPath = path.join(process.cwd(), 'i18n', 'locales', locale, 'common.json');
  if (!fs.existsSync(commonPath)) return null;
  return JSON.parse(fs.readFileSync(commonPath, 'utf8'));
}

function getCategoryData(locale: string, category: string) {
  const commonData = readCommonData(locale);
  if (!commonData) return null;

  const categoryKey = categoryKeyMap[category];
  if (!categoryKey || !commonData[categoryKey]) return null;

  return { commonData, categoryKey, data: commonData[categoryKey] };
}

function getServiceData(locale: string, service: string) {
  const commonData = readCommonData(locale);
  if (!commonData) return null;

  const serviceKey = serviceKeyMap[service];
  if (!serviceKey || !commonData[serviceKey]) return null;

  return { serviceKey, data: commonData[serviceKey] };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, category } = await params;

  const categoryResult = getCategoryData(locale, category);
  if (categoryResult) {
    const seo = categoryResult.data.seo;
    return {
      title: seo?.metaTitle ?? "Staff Outsourcing",
      description: seo?.metaDescription ?? "Recruit and outsource staff in the Netherlands.",
      alternates: {
        canonical: getCanonicalUrl(locale, [category]),
        languages: getHreflangAlternates([category]),
      },
    };
  }

  const serviceResult = getServiceData(locale, category);
  if (serviceResult) {
    const meta = serviceResult.data.meta;
    return {
      title: meta?.title ?? "Staff Outsourcing",
      description: meta?.description ?? "Recruit and outsource staff in the Netherlands.",
      alternates: {
        canonical: getCanonicalUrl(locale, [category]),
        languages: getHreflangAlternates([category]),
      },
    };
  }

  return {
    title: "Staff Outsourcing",
    description: "Recruit and outsource staff in the Netherlands.",
    alternates: {
      canonical: getCanonicalUrl(locale, [category]),
      languages: getHreflangAlternates([category]),
    },
  };
}
export default async function CategoryOrServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const { locale, category } = resolvedParams;

  // 1. Try category first
  const categoryResult = getCategoryData(locale, category);
  if (categoryResult) {
    const { commonData, data: categoryData } = categoryResult;
    const pageHero = categoryData.hero;
    const pageSections = categoryData.sections;

    const rolesList =
      pageSections?.roles ||
      commonData.rolesWePlace?.categories?.find((c: any) => c.href.includes(category))?.roles ||
      [];

    return (
      <main className="w-full">
        <CategoryHero data={pageHero} />

        <div className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto py-12 space-y-16">
          <CategoryCoverage title={pageSections?.coverageTitle} body={pageSections?.coverageBody} />

          <CategoryRoles
            title={pageSections?.rolesTitle}
            roles={rolesList}
            categories={allCategories}
          />

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
              defaultCategory={category}
            />
          </section>

          <CategoryFaq title={pageSections?.faqTitle} faqs={pageSections?.faqs || []} />
          <CategoryFinalCta data={pageSections?.finalCta} />
        </div>
      </main>
    );
  }

  // 2. Fall back to service
  const serviceResult = getServiceData(locale, category);
  if (serviceResult) {
    const { serviceKey, data } = serviceResult;
    const hero = data.hero;
    const sec = data.sections;

    return (
      <main className="w-full bg-white text-[#0d2b33] font-sans">
        <ServiceHeroSection hero={hero} />

        <div className="px-4 sm:px-6 lg:px-16 py-16 max-w-[1400px] mx-auto space-y-24">
          <ServiceCoreConceptSection sec={sec} />
          <ServiceProcessSection sec={sec} />
          <ServiceDivisionOfLaborSection sec={sec} />
          <ServiceDecisionGuideSection sec={sec} />
        </div>

        <div className="px-4 sm:px-6 lg:px-16 pb-16 max-w-[1400px] mx-auto space-y-24">
          <section className="w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-[#0d2b33] sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Fill out the form below and our hiring team will get back to you shortly.
              </p>
            </div>

            <EnquiryForm
              categories={allCategories}
              defaultMode="hiring"
              lockMode={true}
              defaultCategory={serviceKey}
            />
          </section>

          <ServiceFaqSection sec={sec} />
          <ServiceFinalCtaSection sec={sec} />
        </div>
      </main>
    );
  }

  // 3. Neither matched
  notFound();
}