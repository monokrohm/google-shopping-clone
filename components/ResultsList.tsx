import { PageResults } from "@/typings";
import Link from "next/link";

type Props = {
  results: PageResults[];
  term: string;
};

function ResultsList({ results, term }: Props) {
  return (
    <div className="flex md:px-5">
      {/* SIDE BAR */}
      <div className="w-36 md:w-64">
        {/* For each page returned */}
        {results.map((pageResults) => (
          <div key={pageResults.job_id} className="space-y-2">
            {pageResults.content.results.filters?.map((filter, i) => (
              <div key={i} className="p-5 border rounded-r-lg md:rouded-lg">
                <p className="font-bold">{filter.name}</p>
                <div className="flex flex-col ">
                  {filter.values.map((value, i) => (
                    <Link
                      key={i}
                      prefetch={false}
                      href={`https://www.google.com${value.url}`}
                    >
                      {value.value}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* MAIN BODY */}
      <div className="flex-1 px-5 md:p-10 lg:pt-0 space-y-5">
        {results.map((pageResults, i) => (
          <div
            key={pageResults.job_id}
            className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4"
          >
            {i !== 0 && <hr className="w-full col-span-full" />}

            {/* Header */}
            <div className="py-5 md:col-span-2 lg:col-span-3 xl:col-span-4">
              <div className="flex items-center space-x-2 divide-x-2">
                <h1>Shop On Google</h1>

                <h2 className="pl-2 font-semibold text-xl">
                  Search Results for Page {i + 1}
                </h2>
              </div>

              <h3 className="font-extralight">
                Showing results for &quot;{decodeURIComponent(term)}&quot;
              </h3>
            </div>

            {/* Item Containers */}
            {pageResults?.content?.results?.organic?.map((item) => (
              <Link
                href={
                  item.url.includes("url?url=")
                    ? // Send to External URL
                      item.url.split("url?url=")?.[1]
                    : // Remove any Query Params then Send to Google Shopping Page
                      item.url.split("?")?.[0]
                }
                key={item.pos}
                prefetch={false}
                className={`flex flex-col border rounded-2xl hover:shadow-lg transition duration-200 ease-in-out
                ${item.url.includes("url?url=") && "italic"}`}
              >
                <div className="flex-1 p-5 border-b">
                  <p className="text-[#1B66D2]">{item.title}</p>
                </div>

                <div className="px-5 py-2 not-italic">
                  <p className="font-light">
                    {item.price} {item.currency}
                  </p>
                  <p className="text-[#1B66D2] font-semibold ">
                    {item.merchant.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
