import CareerHero from "../../../components/careers/CareerHero";
import CareerIntro from "../../../components/careers/CareerIntro";
import JobList from "../../../components/careers/JobList";

export default function CareersPage() {
 

  return (
    <main className="min-h-screen bg-white">
      <CareerHero />
      <CareerIntro />
      <JobList />
      <div className="max-w-7xl mx-auto px-6 py-12">
      </div>
    </main>
  );
}