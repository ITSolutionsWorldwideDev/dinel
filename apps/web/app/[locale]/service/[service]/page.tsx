import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

import HeroSection from '@/components/service/HeroSection';
import CoreConceptSection from '@/components/service/CoreConceptSection';
import ProcessSection from '@/components/service/ProcessSection';
import DivisionOfLaborSection from '@/components/service/DivisionOfLaborSection';
import DecisionGuideSection from '@/components/service/DecisionGuideSection';
import FaqSection from '@/components/service/FaqSection';
import FinalCtaSection from '@/components/service/FinalCtaSection';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { allCategories } from '@/components/forms/categories';
import { getCanonicalUrl } from '@/lib/seo';

interface PageProps {
  params: Promise<{
    locale: string;
    service: string;
  }>;
}

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

function getServiceData(locale: string, service: string) {
  const commonPath = path.join(process.cwd(), 'i18n', 'locales', locale, 'common.json');
  if (!fs.existsSync(commonPath)) return null;

  const commonData = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
  const serviceKey = serviceKeyMap[service];
  if (!serviceKey || !commonData[serviceKey]) return null;

  return { serviceKey, data: commonData[serviceKey] };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, service } = await params;
  const result = getServiceData(locale, service);

  if (!result) {
    return {
      title: "Staff Outsourcing",
      description: "Recruit and outsource staff in the Netherlands.",
      alternates: {
        canonical: getCanonicalUrl(locale, ["service", service]),
      },
    };
  }

  const meta = result.data.meta;

  return {
    title: meta?.title ?? "Staff Outsourcing",
    description: meta?.description ?? "Recruit and outsource staff in the Netherlands.",
    alternates: {
      canonical: getCanonicalUrl(locale, ["service", service]),
    },
  };
}

export default async function SubServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const { locale, service } = resolvedParams;

  const result = getServiceData(locale, service);

  if (!result) {
    notFound();
  }

  const { serviceKey, data } = result;
  const hero = data.hero;
  const sec = data.sections;

  return (
    <main className="w-full bg-white text-[#0d2b33] font-sans">
      <HeroSection hero={hero} />

      <div className="px-4 sm:px-6 lg:px-16 py-16 max-w-[1400px] mx-auto space-y-24">
        <CoreConceptSection sec={sec} />
        <ProcessSection sec={sec} />
        <DivisionOfLaborSection sec={sec} />
        <DecisionGuideSection sec={sec} />
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

        <FaqSection sec={sec} />
        <FinalCtaSection sec={sec} />
      </div>
    </main>
  );
}