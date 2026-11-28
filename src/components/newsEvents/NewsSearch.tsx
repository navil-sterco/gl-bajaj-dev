"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

interface Props {
  currentSearch: string;
  basePath: string;
}

export default function NewsSearch({ currentSearch, basePath }: Props) {
  const [search, setSearch] = useState(currentSearch);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQueryString = searchParams.toString();

  useEffect(() => {
    setSearch(currentSearch);
  }, [currentSearch]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(currentQueryString);
      const query = search.trim();

      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      params.delete("page");

      const queryString = params.toString();
      const currentSearch = new URLSearchParams(currentQueryString).get("search") ?? "";
      if (query === currentSearch) return;

      window.dispatchEvent(new Event("navigation-start"));
      router.push(queryString ? `${basePath}?${queryString}` : basePath);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [basePath, currentQueryString, router, search]);

  return (
    <div className="news_search" role="search">
      <input
        type="search"
        aria-label="Search News"
        placeholder="Search News"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Image
        src="/images/icons/search.png"
        alt=""
        aria-hidden="true"
        width={18}
        height={18}
      />
    </div>
  );
}
