import type { Metadata } from "next";
import { rapidApiSubstack, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unofficial Substack API",
  description:
    "Unofficial live Substack API. Search posts, people, and publications. Read feeds, comments, profiles, and publication archives.",
  alternates: { canonical: "/substack-api" },
};

const groups = [
  {
    name: "Search",
    items: [
      "Top posts and comments",
      "Post search",
      "People search",
      "Publication search",
    ],
  },
  {
    name: "Read",
    items: [
      "Category feeds",
      "Publication archives",
      "Posts by ID or slug",
      "Comments and replies",
    ],
  },
  {
    name: "Discover",
    items: [
      "Categories and leaderboards",
      "Explore tabs",
      "Public profiles and activity",
      "Publication recommendations",
    ],
  },
];

export default function SubstackApiPage() {
  return (
    <article className="mx-auto max-w-5xl px-6 pb-24 pt-16">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
        Substack Live
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Unofficial Substack API
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
        A live REST API for public Substack data. Search posts, people, and
        publications. Read feeds, comments, profiles, and archives. Not
        affiliated with Substack.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={rapidApiSubstack}
          className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Try on RapidAPI
        </a>
        <a
          href={site.discord}
          className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/40"
        >
          Discord support
        </a>
      </div>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-white">What you can call</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.name}
              className="rounded-xl border border-white/10 bg-zinc-900/40 p-5"
            >
              <h3 className="text-sm font-medium text-blue-400">{group.name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-2xl space-y-4 text-zinc-400">
        <h2 className="text-xl font-semibold text-white">How it behaves</h2>
        <p>
          Successful responses wrap Substack JSON as{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-200">
            {"{ \"data\": ... }"}
          </code>
          . Missing parameters return 400. Unknown resources return 404.
          Upstream timeouts return 504.
        </p>
        <p>
          Subscribe and get a key on RapidAPI. Use it on every request. Live
          support is on Discord.
        </p>
      </section>
    </article>
  );
}
