// components/accounts/Tabs.tsx
"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

// import { Tabs } from "react-bootstrap";
import CandidateProfilePage from "./profile_details";

type TabBtn = {
  id: number;
  label: string;
};

const tabBtnData: TabBtn[] = [
  { id: 1, label: "Account Details" },
  { id: 2, label: "Applications" },
  { id: 3, label: "Logout" },
];

export default function TabsComponent({
  candidateID,
}: {
  candidateID: string;
}) {
  const [active, setActive] = useState<number>(1);
  const router = useRouter();

  const handleTabClick = async (tab: TabBtn) => {
    if (tab.label === "Logout") {
      await signOut({
        redirect: true,
        callbackUrl: "/login",
      });
      return;
    }

    setActive(tab.id);
  };

  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start mb-6 sm:mb-8 overflow-x-auto">
      <div className="flex flex-row sm:flex-col sm:min-w-50 items-start border">
        {tabBtnData.map((tab) => (
          <span
            key={tab.id}
            className={cn([
              active === tab.id
                ? "border-b-2 font-medium bg-[#106FBC]  text-white"
                : "border-b font-normal",
              "p-5 sm:p-6 rounded-none flex-1 w-full text-left cursor-pointer",
            ])}
            onClick={() => handleTabClick(tab)}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className="mt-2 mb-2 w-full">
        {active === 1 && <CandidateProfilePage candidateID={candidateID} />}
        {/* {active === 2 && <AccountsDetails />} */}
      </div>
    </div>
  );
};

