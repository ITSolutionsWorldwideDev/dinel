// apps/admin/components/system-settings/AppCard.tsx

export default function AppCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="relative">
        <div className="d-flex align-items-center justify-content-between mb-2 p-4">
          <div className="d-flex align-items-center">
            <span className="system-app-icon">
              <img alt="Img" src="assets/img/icons/linkedin-icon.svg" />
            </span>
          </div>
        </div>
        <span
          className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-green-100 text-green-700`}
        >
          Available
        </span>
      </div>

      <div className="p-4 pt-0">
        <h3 className="font-semibold text-sm line-clamp-2 mb-2">
          Dinel LinkedIn Extension
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          Import for LinkedIn profiles into Dinel recruitment platform.
        </p>

        <div className="flex flex-col gap-2 text-xs">
          <a href="/extension/dinel-linkedin-import-extension.zip" download className="text-blue-600">
            Download Chrome Extension
          </a>

          <a
            href="/extension/connect"
            target="_blank"
            className="text-green-600"
          >
            Connect Extension
          </a>
        </div>
      </div>
    </div>
  );
}
