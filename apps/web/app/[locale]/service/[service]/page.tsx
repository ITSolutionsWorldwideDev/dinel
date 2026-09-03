import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

import HeroSection from '@/components/service/HeroSection';
import CoreConceptSection from '@/components/service/CoreConceptSection';
import ProcessSection from '@/components/service/ProcessSection';
import DivisionOfLaborSection from '@/components/service/DivisionOfLaborSection';
import DecisionGuideSection from '@/components/service/DecisionGuideSection';
import FaqSection from '@/components/service/FaqSection';
import FinalCtaSection from '@/components/service/FinalCtaSection';
import ContactFormMapSection from '@/components/shared/ContactFormMapSection';
import { allCategories } from '@/components/forms/categories';

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

export default async function SubServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const { locale, service } = resolvedParams;

  const commonPath = path.join(process.cwd(), 'i18n', 'locales', locale, 'common.json');

  if (!fs.existsSync(commonPath)) {
    notFound();
  }

  const commonData = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
  const serviceKey = serviceKeyMap[service];

  if (!serviceKey || !commonData[serviceKey]) {
    notFound();
  }

  const data = commonData[serviceKey];
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

      <ContactFormMapSection
        categories={allCategories}
        title="Ready to Get Started?"
        description="Tell us about your hiring needs — pick the category that fits and we'll take it from there."
      />

      <div className="px-4 sm:px-6 lg:px-16 pb-16 max-w-[1400px] mx-auto space-y-24">
        <FaqSection sec={sec} />
        <FinalCtaSection sec={sec} />
      </div>
    </main>
  );
}