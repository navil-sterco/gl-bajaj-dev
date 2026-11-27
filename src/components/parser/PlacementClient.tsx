"use client";

import { useEffect, useMemo, useState } from "react";
import AOS from "aos";

export default function PlacementClient({
  batchGroups,
  pageName,
}: {
  batchGroups: any[];
  pageName: string;
}) {
  // Sort years descending so the latest is first
  const sortedGroups = useMemo(
    () =>
      [...batchGroups].sort((a, b) => Number(b?.batch) - Number(a?.batch)),
    [batchGroups]
  );

  const years = sortedGroups.map((g) => String(g.batch));
  const [selectedYear, setSelectedYear] = useState<string>(years[0] ?? "");

  const activeGroup = sortedGroups.find(
    (g) => String(g.batch) === selectedYear
  );

  // Re-initialise AOS animations for the newly rendered items
  useEffect(() => {
    AOS.refreshHard();
  }, [selectedYear]);

  if (!sortedGroups.length) return null;

  return (
    <div className="placement_wrapper">
      <div className="placement_batch_section">
        <div
          className="placement_head"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <h3 className="font36" data-aos="fade-up" data-aos-delay="200">
            Batch {activeGroup?.batch}
          </h3>

          <select
            className="placement_select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            aria-label="Select batch year"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="placement_grid" key={selectedYear}>
          {activeGroup?.placements?.map((item: any, idx: number) => (
            <div
              key={item?.id ?? idx}
              className="place_box relative"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="place_imgbox">
                <figure className="flash-effect-2">
                  <img
                    src={item.image ?? ""}
                    alt={item?.alt || pageName}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                </figure>
                {item?.logo_image && (
                  <div className="place_complog">
                    <figure>
                      <img
                        src={item?.logo_image ?? ""}
                        alt={item?.logo_alt || "company logo"}
                      />
                    </figure>
                  </div>
                )}
              </div>

              <div className="place_infobox">
                <h3 data-aos="fade-up" data-aos-delay="400">
                  {item.name}
                </h3>
                <p data-aos="fade-up" data-aos-delay="600">
                  {item?.course && (
                    <>
                      <strong>{item?.course}</strong> |
                    </>
                  )}{" "}
                  {item?.batch && (
                    <>
                      Batch <strong>{item.batch}</strong>
                    </>
                  )}{" "}
                </p>

                {item?.package && (
                  <div className="place_pkg">
                    <h3 className="font36" data-aos="fade-up" data-aos-delay="800">
                      Package ₹<strong>{item.package}</strong>
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}