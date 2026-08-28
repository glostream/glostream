import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import {
  rapidApiSubstack,
  rapidApiSubstackHost,
  site,
  substackPages,
} from "@/lib/site";
import { substackApiGroups } from "@/lib/substack-api";

export const metadata: Metadata = pageMetadata({
  title: "Substack API docs",
  description:
    "Unofficial Substack API routes: newsletter directory search, posts, feeds, archives, comments, and profiles. Call them with a RapidAPI key.",
  path: substackPages.docs,
});

const curl = `curl --request GET \\
  --url 'https://${rapidApiSubstackHost}/search/post?query=newsletter&language=en' \\
  --header 'x-rapidapi-host: ${rapidApiSubstackHost}' \\
  --header 'x-rapidapi-key: YOUR_RAPIDAPI_KEY'`;

export default function SubstackApiDocsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-16">
      <p className="text-sm text-zinc-500">
        <Link href={substackPages.product} className="hover:text-zinc-300">
          Substack API
        </Link>
        <span className="mx-2">/</span>
        Docs
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Substack API docs
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-zinc-400">
        Unofficial live read API. Subscribe on RapidAPI, send the key on every
        request. Use{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-200">
          /search/publication
        </code>{" "}
        for the newsletter directory (keyword discovery). Successful responses
        wrap Substack JSON as{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-200">
          {'{ "data": ... }'}
        </code>
        . Missing parameters return 400. Unknown resources return 404. Upstream
        timeouts return 504.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={rapidApiSubstack}
          className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Get a RapidAPI key
        </a>
        <Link
          href={substackPages.faq}
          className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/40"
        >
          Does Substack have an API?
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-white">Quickstart</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Host is{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-200">
            {rapidApiSubstackHost}
          </code>
          . IDs come from search or feed: posts as{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-200">
            post_id
          </code>
          , comments as{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-200">
            comment_id
          </code>
          . Publication handles are the subdomain or host.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-zinc-900/60 p-4 text-sm leading-relaxed text-zinc-300">
          <code>{curl}</code>
        </pre>
        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          Directory example:{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-300">
            /search/publication?query=newsletter
          </code>
          . For a bulk export from URLs or those keywords, ask on{" "}
          <a href={site.discord} className="text-blue-400 hover:text-blue-300">
            Discord
          </a>{" "}
          for the private Apify Actor. RapidAPI remains checkout for live REST.
        </p>
      </section>

      {substackApiGroups.map((group) => (
        <section key={group.name} className="mt-14">
          <h2 className="text-xl font-semibold text-white">{group.name}</h2>
          <div className="mt-6 space-y-8">
            {group.endpoints.map((endpoint) => (
              <div key={endpoint.path}>
                <h3 className="font-mono text-sm text-blue-400">
                  {endpoint.method} {endpoint.path}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {endpoint.summary}
                </p>
                {endpoint.params.length > 0 ? (
                  <ul className="mt-3 space-y-1.5 text-sm text-zinc-500">
                    {endpoint.params.map((param) => (
                      <li key={param.name}>
                        <code className="text-zinc-300">{param.name}</code>
                        {param.required ? (
                          <span className="ml-2 text-xs uppercase tracking-wide text-blue-400/80">
                            required
                          </span>
                        ) : null}
                        <span className="ml-2">{param.note}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
