// /apps/web/app/thank-you/page.tsx

import Link from "next/link";
import { CheckCircle2, ArrowRight, FileCheck, Briefcase } from "lucide-react";

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { vacancyId?: string; firstName?: string };
}) {
  const firstName = searchParams.firstName || "there";

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
      {/* Success Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
        <CheckCircle2 className="h-12 w-12 text-orange-600 hover:text-orange-600 dark:text-orange-400" /> 
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Application Sent!
      </h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        Thanks, {firstName}! Your resume has been successfully uploaded to our system and linked to the vacancy.
      </p>

      {/* Progress/Confirmation Checklist */}
      <div className="mb-10 w-full max-w-sm overflow-hidden rounded-xl border bg-card text-left shadow-sm">
        <div className="p-4 border-b bg-muted/30">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Submission Status
          </span>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <FileCheck className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Resume parsed & stored</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Carerix Match created</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/vacancies"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View more jobs
        </Link>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Back to Home
        </Link>
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        Our recruitment team will review your application and reach out via email shortly.
      </p>
    </main>
  );
}