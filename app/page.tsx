import Link from "next/link";

const SEARCHES = [
  {
    id: 1,
    term: "Google Pixel 8",
    url: "/search/google pixel 8",
    color: "bg-blue-500",
  },
  {
    id: 1,
    term: "iPhone 15 Pro Max",
    url: "/search/iphone 15 pro max",
    color: "bg-red-500",
  },
  {
    id: 1,
    term: "Macbook Pro",
    url: "/search/macbook pro",
    color: "bg-yellow-500",
  },
  {
    id: 1,
    term: "Tablets under $300",
    url: "/search/tablets?sort_by=r&max_price=300",
    color: "bg-blue-500",
  },
  {
    id: 1,
    term: "Monitors over $500",
    url: "/search/monitors?sort_by=r&min_price=500",
    color: "bg-green-500",
  },
];

export default function Home() {
  return (
    <main className="p-10 pt-0 text-center md:text-left">
      <h1 className="mb-5 text-3xl font-extralight">
        Welcome to Google Shopping
      </h1>
      <h2 className="mb-5">
        Get started by clicking on one of the example search items or by using
        the search box
      </h2>

      <div
        className="grid grid-cols-1 justify-center items-center gap-5 mt-2
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {SEARCHES.map((search) => (
          <Link
            key={search.id}
            href={search.url}
            prefetch={false}
            className={`${search.color} w-full h-36 px-4 py-2 rounded text-white font-bold hover:opacity-50`}
          >
            {search.term}
          </Link>
        ))}
      </div>
    </main>
  );
}
