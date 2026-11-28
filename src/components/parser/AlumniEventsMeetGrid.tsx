"use client"
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/src/config/config";
import { usePathname } from "next/navigation";
import AOS from "aos";

type AlumniEvent = {
  id: number;
  title: string;
  image?: string | null;
  alt?: string;
  slug: string;
};

type AlumniEventsYear = {
  year: number;
  events: AlumniEvent[];
};

type AlumniEventsResponse = {
  alumni_events?: AlumniEventsYear[];
  undated_events?: AlumniEvent[];
};

export default function AlumniEventsMeetGrid({ pageName, data }: { pageName: string; data: AlumniEventsResponse }) {
  const pathname = usePathname();
  const slug = pathname.split('/').filter(Boolean);
  const parentSlug = slug[0]
  const childSlug = slug[1];

  const alumniEvents = useMemo(
    () => [...(data?.alumni_events ?? [])].sort((a, b) => b.year - a.year),
    [data?.alumni_events]
  );
  const undatedEvents = data?.undated_events ?? [];
  const years = alumniEvents.map(({ year }) => String(year));
  const [selectedYear, setSelectedYear] = useState(years[0] ?? "");
  const activeYear = alumniEvents.find(
    ({ year }) => String(year) === selectedYear
  );

  useEffect(() => {
    AOS.refreshHard();
  }, [selectedYear]);

  const renderEvents = (events: AlumniEvent[]) => (
    <div className="award-list">
      {events.map((item) => (
        <div className="award-box" key={item.id}>
          <figure className="flash-effect-2">
            <Image
              src={item.image || "/images/default/gallery-main.webp"}
              className="img-fluid w-100"
              width={600}
              height={443}
              loading="lazy"
              alt={item.alt || pageName}
            />
          </figure>
          {item.title && <p>{item.title}</p>}
          <Link
            href={`${BASE_URL}${parentSlug}/${childSlug}/${item.slug}`}
            className="strech_link"
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      {activeYear && (
        <section className="alumni-events-year" key={selectedYear}>
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
            <h4 className="font24">{activeYear.year}</h4>
            <select
              className="placement_select"
              value={selectedYear}
              onChange={(event) => setSelectedYear(event.target.value)}
              aria-label="Select event year"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {renderEvents(activeYear.events)}
        </section>
      )}
      {undatedEvents.length > 0 && (
        <section className="alumni-events-undated">
          <h4 className="font24">Other Events</h4>
          {renderEvents(undatedEvents)}
        </section>
      )}
    </>
  );
}