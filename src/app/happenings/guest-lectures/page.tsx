import { apiFetch } from "@/src/lib/api";
import ReactParserDynamic from "@/src/components/common/reactParser/ReactParserDynamic";
import { getPageSEO } from "@/src/lib/seo";
import { notFound } from "next/navigation";
import PageHeader from "@/src/components/layout/header/PageHeader";
import ComingSoon from "@/src/components/common/comingSoon/ComingSoon";
import { BASE_URL } from "@/src/config/config";
import { buildGlobalSchema } from "@/src/lib/schema/globalSchema";
import GuestLectureGrid from "./GuestLectureGrid";
import "@/src/styles/inner.css";
import "@/src/styles/responsive1.css";
import "@/src/styles/responsive.css";
import "@/src/styles/program.css";
import "@/src/styles/parser.css";

export async function generateMetadata() {
  return await getPageSEO("happenings/guest-lectures");
}

export default async function GuestLecturePage() {
  const [{ data, error }, seoData] = await Promise.all([
    apiFetch(`modular/guest-lectures`),
    getPageSEO("happenings/guest-lectures"),
  ]);

  if (error || !data?.status || !data?.data) {
    notFound();
  }

  const pageData = data?.data;

  const currentSlug = `happenings/guest-lectures`;
  const expectedPath = pageData?.full_url.replace(/^\/+|\/+$/g, "");
  if (expectedPath !== currentSlug) {
    notFound();
  }

  const combinedHtml = Object.values(data?.data?.sections ?? {}).join("");

  const globalSchemaArgs = {
    canonicalUrl: seoData?.alternates?.canonical || BASE_URL || "",
    pageTitle: seoData?.title || "",
    metaDescription: seoData?.description || "",
    primaryImageUrl: "",
    datePublishedIso: pageData?.created_at || "",
    dateModifiedIso: pageData?.updated_at || "",
    languageTag: "en-IN",
    currentPageSlug: `${BASE_URL}happenings/guest-lectures`,
    currentPageName: pageData?.page_title || "",
  };

  const globalSchema = buildGlobalSchema(globalSchemaArgs);

  const newsData = data?.data?.modular?.["news-events"];

  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
        />
      )}
      {globalSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      )}
      <div className="happenings_page">
        <PageHeader
          pathname={`/guest-lectures`}
          data={data?.data}
          slug={"guest-lectures"}
        />
        <div className="activites_sec">
          <div className="container-fluid">
            {data?.data?.cms?.length == 0 &&
              data?.data?.modular?.length == 0 && <ComingSoon />}
            {newsData.length > 0 && <GuestLectureGrid data={newsData} />}
          </div>
        </div>
      </div>

      {/* <ReactParserDynamic html={combinedHtml}  pageName={seoData.title}/> */}
    </>
  );
}
