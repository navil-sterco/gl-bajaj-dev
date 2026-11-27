import { BASE_URL } from "@/src/config/config";
import { generateDate } from "@/src/lib/generateDate";
import Image from "next/image";
import Link from "next/link";

interface IGuest {
  heading: string;
  image: string;
  alt: string;
  title: string;
  slug: string;
  date:string | null;
}

export default function GuestLectureGrid({ data }: { data: IGuest[] }) {
  return (
    <div className="guest_grid">
      {data?.map((item, idx) => (
        <div className="activies_col">
          <figure className="flash-effect-2">
            <Image
              src={item.image}
              width={380}
              height={275}
              alt={item.alt}
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </figure>
          <div className="activities_caption">
            {item?.date && (
              <p className="date">{generateDate(item.date)}</p>
            )}
            <p data-aos="fade-up" data-aos-delay="400">
              {item.heading || item.title}
            </p>
          </div>
          {item?.slug && (
            <Link
              className="strech_link"
              href={`${BASE_URL}happenings/news-events/${item.slug}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
