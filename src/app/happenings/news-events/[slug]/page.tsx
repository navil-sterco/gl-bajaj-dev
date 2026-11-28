import { NewsDetail } from "@/src/components/newsEvents/NewsDetail";
import RelatedStories from "@/src/components/newsEvents/RelatedStories";
import { BASE_URL } from "@/src/config/config";
import { apiFetch } from "@/src/lib/api";
import { buildNewsArticleSchema } from "@/src/lib/schema/newsDetailSchema";
import { getPageSEO } from "@/src/lib/seo";
import { buildPageGlobalSchema } from "@/src/lib/schema/globalSchema";
import { notFound, permanentRedirect } from "next/navigation";
import NewsEventsListing from "@/src/components/newsEvents/NewsEventsListing";

const isNumeric = (s: string) => /^\d+$/.test(s);

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    if (isNumeric(slug)) return getPageSEO(`happenings/news-events/${slug}`);
    return getPageSEO(`happenings/news-events/${slug}`);
}

export default async function NewsDetailPage({params, searchParams}:{params:Promise<{slug:string}>; searchParams:Promise<{department?:string; search?:string}>}){
    const {slug} = await params;

    if (isNumeric(slug)) {
        const { department, search } = await searchParams;
        const page = Number(slug);
        if (page < 1) notFound();
        if (page === 1) {
          const params = new URLSearchParams();
          if (department) params.set("department", department);
          if (search) params.set("search", search);
          const query = params.toString();
          permanentRedirect(
            query ? `/happenings/news-events?${query}` : "/happenings/news-events"
          );
        }
        return (
          <NewsEventsListing
            page={page}
            department={department || ""}
            search={search || ""}
          />
        );
    }

    const currentSlug = 'news-events';
    const [{ data, error }, seoData] = await Promise.all([
        apiFetch(`news-and-events/${slug}`),
        getPageSEO(`happenings/news-events/${slug}`),
    ])
    if (error) notFound();

    const newsData = data?.news_and_events_details;
    const relatedData = data?.related_news_and_events;
    const globalSchema = buildPageGlobalSchema(
        seoData,
        `happenings/news-events/${slug}`,
        newsData?.data?.heading || seoData.title,
    );

    const NewsDetailSchemaArgs = {
        articleUrl:`${BASE_URL}happenings/news-events/${slug}` || '',
        headline:newsData?.data?.heading || '',
        articleSummary:newsData?.data?.description || '',
        datePublishedIso:newsData?.data?.date || '',
        dateModifiedIso:newsData?.data?.date || '',
        images:newsData?.data?.image ? [newsData?.data?.image] : [],
        category:'',
        keywords:seoData?.keywords ? String(seoData.keywords).split(',').map(k=>k.trim()).filter(Boolean) : [],
        primaryRelatedEntityId:'',
        secondaryRelatedEntityIds:[],
    }

    const newsDetailSchema = buildNewsArticleSchema(NewsDetailSchemaArgs);

    return(
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
            {newsDetailSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(newsDetailSchema) }}
                />
            )}
            <NewsDetail data={newsData} />
            {relatedData?.length > 0 && (
                <RelatedStories data={relatedData} currentSlug={currentSlug} parentSlug={'happenings'} pageName={seoData.title} />
            )}
        </>
    )
}