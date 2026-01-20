// apps/admin/components/system-settings/SystemSettings.tsx
"use client";
import AppCard from "./AppCard";

export default function SystemSettingsComponent() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header flex justify-between items-center mb-4">
            <div>
              <h4 className="text-lg font-semibold">Settings</h4>
              <h6 className="text-gray-500">Manage your settings on portal</h6>
            </div>
          </div>
          <div className="card">
            <div className="card-header flex justify-between items-center">
                <h4 className="fs-18 fw-bold">System Settings</h4>
            </div>
            <div className="card-body p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AppCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
