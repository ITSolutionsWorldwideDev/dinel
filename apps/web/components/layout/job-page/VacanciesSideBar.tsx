// apps/web/components/layout/job-page/VacanciesSideBar.tsx

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

interface Props {
  sectors: any[];
  disciplines: any[];
  locations: any[];
  currentFilters?: any;
}

export default function VacanciesSideBar({
  sectors,
  disciplines,
  locations,
  currentFilters,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedSectors = searchParams.getAll("sector");
  const selectedDisciplines = searchParams.getAll("discipline");
  const selectedLocations = searchParams.getAll("location");

  const [selectedSector, setSelectedSector] = useState<string[]>(
    selectedSectors || [],
  );

  const [selectedDiscipline, setSelectedDiscipline] = useState<string[]>(
    selectedDisciplines || [],
  );

  const [selectedLocation, setSelectedLocation] = useState<string[]>(
    selectedLocations || [],
  );

  const [search, setSearch] = useState(currentFilters?.search || "");

  const [openSectors, setopenSectors] = useState(false);

  //   const [selectedSector, setSelectedSector] = useState(
  //     currentFilters?.sector || "",
  //   );

  const toggleSelectedSector = (item: string) => {
    setSelectedSector((prev: any) =>
      prev.includes(item)
        ? prev.filter((i: any) => i !== item)
        : [...prev, item],
    );
  };

  const [openDiscipline, setopenDiscipline] = useState(false);

  //   const [selectedDiscipline, setSelectedDiscipline] = useState(
  //     currentFilters?.discipline || "",
  //   );

  const toggleSelectedDiscipline = (item: string) => {
    setSelectedDiscipline((prev: any) =>
      prev.includes(item)
        ? prev.filter((i: any) => i !== item)
        : [...prev, item],
    );
  };

  const [openLoc, setopenLoc] = useState(false);

  //   const [selectedLocation, setSelectedLocation] = useState(
  //     currentFilters?.location || "",
  //   );

  const toggleSelectedLocation = (item: string) => {
    setSelectedLocation((prev: any) =>
      prev.includes(item)
        ? prev.filter((i: any) => i !== item)
        : [...prev, item],
    );
  };

  const toggleItem = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  useEffect(() => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);

    selectedSector.forEach((s) => params.append("sector", s));

    selectedDiscipline.forEach((d) => params.append("discipline", d));

    selectedLocation.forEach((l) => params.append("location", l));

    router.push(`?${params.toString()}`, { scroll: false });
  }, [search, selectedSector, selectedDiscipline, selectedLocation]);

  return (
    <main className=" bg-gray-50 flex p-4">
      <div className=" space-y-4">
        <div className="flex items-center border bg-white px-4 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="flex-1  text-sm outline-none focus:outline-none focus:ring-0"
          />
          <Search size={18} className="text-gray-500" />
        </div>

        {/* <div className="w-full max-w-md  overflow-hidden bg-white">
          <button
            onClick={() => setopenSectors(!openSectors)}
            className="w-full flex items-center justify-between px-4 py-4 shadow-sm cursor-pointer"
          >
            <span className="font-medium">Sectors</span>
            {openSectors ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {openSectors && (
            <div className="border-t px-4 py-3 space-y-2">
              {sectors.map((item) => (
                <label
                  key={item.sector_id}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedSector.includes(String(item.sector_id))}
                    onChange={() =>
                      toggleItem(String(item.sector_id), setSelectedSector)
                    }
                    className="accent-red-600"
                  />
                  <span className="text-sm">{item.sector}</span>
                </label>
              ))}
            </div>
          )}
        </div> */}

        <div className="w-full max-w-md  overflow-hidden bg-white">
          <button
            onClick={() => setopenDiscipline(!openDiscipline)}
            className="w-full flex items-center justify-between px-4 py-4 shadow-sm cursor-pointer"
          >
            <span className="font-medium">Disciplines</span>
            {openDiscipline ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {openDiscipline && (
            <div className="border-t px-4 py-3 space-y-2">
              {disciplines.map((item) => (
                <label
                  key={item.discipline_id}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedDiscipline.includes(
                      String(item.discipline_id),
                    )}
                    onChange={() =>
                      toggleItem(
                        String(item.discipline_id),
                        setSelectedDiscipline,
                      )
                    }
                    className="accent-red-600"
                  />
                  <span className="text-sm">{item.discipline}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="w-full max-w-md  overflow-hidden bg-white">
          <button
            onClick={() => setopenLoc(!openLoc)}
            className="w-full flex items-center justify-between px-4 py-4 shadow-sm cursor-pointer"
          >
            <span className="font-medium">Locations</span>
            {openLoc ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {openLoc && (
            <div className="border-t px-4 py-3 space-y-2">
              {locations.map((item: string) => (
                <label
                  key={item}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedLocation.includes(item)}
                    onChange={() => toggleItem(item, setSelectedLocation)}
                  />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* <button
          onClick={applyFilters}
          className="w-full bg-[#FF6B35] text-white py-3"
        >
          Apply Filters
        </button> */}

        <div className="bg-white p-5 space-y-4 shadow-sm">
          <h3 className="font-semibold text-lg">Job alert</h3>

          <p className="text-sm text-gray-600">
            Stay up to date on the jobs you're interested in.
          </p>

          <input
            type="email"
            placeholder="E-MAIL ADDRESS"
            className="w-full border border-gray-800 px-4 py-3 text-sm outline-none"
          />

          <label className="flex items-start gap-2 text-xs text-gray-700">
            <input type="checkbox" className="mt-1" />
            <span>I AGREE TO THE TERMS AND CONDITIONS</span>
          </label>

          <button className="w-full bg-[#FF6B35] text-white py-4 font-medium hover:bg-orange-600 transition cursor-pointer">
            SET UP ALERT
          </button>
        </div>
      </div>
    </main>
  );
}

//   disciplines = [
//     "Design",
//     "Development",
//     "Marketing",
//     "Finance",
//     "Human Resources",
//   ];

//   locations = ["London", "Pakistan", "Itww", "Halovine", "balgium"];

