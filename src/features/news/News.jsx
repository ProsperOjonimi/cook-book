/* eslint-disable react/prop-types */
import { randomNoGenerator } from "../../utils/randomNumberGenerator";

export function News({ news }) {
  const newsNo = randomNoGenerator(0, news.results.length - 1);

  const newsProper = news.results[newsNo];

  const newsBanner = newsProper.image_url;
  const newsDescription = newsProper.description;
  const newsLink = newsProper.link;
  const newsTitle = newsProper.title;
  const isLongEnough = newsDescription.split(" ").length > 50;
  return (
    <div className="bg-orange-50">
      <h2 className="py-3 text-center text-2xl font-bold">
        Check our Latest News!
      </h2>
      <div className="flex justify-center px-5 pb-3">
        <img
          src={newsBanner}
          alt={newsDescription}
          className="mx-auto h-auto w-full max-w-[500px] rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-center font-bold">{newsTitle}</h2>
        <p className="mb-4 max-w-[600px] px-2 text-center">
          {isLongEnough
            ? `${newsDescription.split(" ").slice(0, 48).join(" ")}...`
            : newsDescription}
        </p>
        <a
          href={newsLink}
          className="mb-10 mt-3 w-56 cursor-pointer border border-yellow-400 py-1 text-center transition-colors duration-300 hover:bg-yellow-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default News;
