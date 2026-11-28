"use client";

import { useEffect, useMemo, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import AOS from "aos";

interface MediaItem {
    id?: number;
    image?: string | null;
    date?: string | null;
    title?: string | null;
    alt?: string;
    slug?: string;
}

interface MediaYearGroup {
    year: number;
    items: MediaItem[];
}

export default function MediaGrid({ items, pageName }: { items: MediaYearGroup[]; pageName:string; }) {
    const sortedGroups = useMemo(
        () => [...items].sort((a, b) => b.year - a.year),
        [items]
    );
    const years = sortedGroups.map(({ year }) => String(year));
    const [selectedYear, setSelectedYear] = useState(years[0] ?? "");
    const activeGroup = sortedGroups.find(
        ({ year }) => String(year) === selectedYear
    );

    useEffect(() => {
        AOS.refreshHard();
    }, [selectedYear]);

    const renderItems = (yearItems: MediaItem[]) => {
        const openGallery = (index: number) => {
            if (typeof Fancybox === "undefined") return;

            const gallery = yearItems
                .filter((item) => item.image)
                .map((item) => ({
                    src: item.image as string,
                    type: "image" as const,
                }));

            // Re-map index in case some items had no image and were filtered out
            const withImages = yearItems.filter((item) => item.image);
            const clickedItem = yearItems[index];
            const adjustedIndex = withImages.indexOf(clickedItem);

            Fancybox.show(gallery, {
                startIndex: adjustedIndex === -1 ? 0 : adjustedIndex,
            });
        };

        return (
            <div className="media_grid">
                {yearItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="media_grid_Bx"
                        data-src={item.image || ""}
                        data-aos="fade-up"
                        data-aos-delay="600"
                        onClick={() => openGallery(idx)}
                        style={{ cursor: "pointer" }}
                    >
                        <figure>
                            <Image src={item.image || "/images/default/placeholder.webp"} width={400} height={328} loading="lazy" className="img-fluid" alt={item.alt || pageName} />
                        </figure>
                        <div className="media_txt">
                            {item?.date && (
                                <h5>
                                    {new Date(item.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </h5>
                            )}
                            {item?.title && (
                                <p dangerouslySetInnerHTML={{ __html: item.title }} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    if (!sortedGroups.length) return null;

    return (
        <section className="media_coverage_year" key={selectedYear}>
            <div className="media_coverage_year_head">
                <h4 className="title24">{activeGroup?.year}</h4>
                <select
                    className="placement_select"
                    value={selectedYear}
                    onChange={(event) => setSelectedYear(event.target.value)}
                    aria-label="Select media coverage year"
                >
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            {activeGroup && renderItems(activeGroup.items)}
        </section>
    );
}