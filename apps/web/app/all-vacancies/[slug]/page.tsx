// apps/web/app/all-vacancies/[slug]/page.tsx

import AllVacanciesJobDetail from '@/components/layout/allvacancies/AllVacanciesJobDetail'

interface Props {
  params: { sectorSlug: string; jobId: string };
}


export default function vacancyDetailPage({ params }: Props) {
  return (
    <AllVacanciesJobDetail params={params}/>
  )
}