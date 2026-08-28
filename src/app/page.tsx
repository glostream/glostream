import Link from "next/link";
import { site } from "@/lib/site";

const products = [
  {
    href: "/substack-api",
    name: "Substack Live",
    kind: "API",
    blurb:
      "Unofficial live Substack API. Search posts, people, and the newsletter directory. Read feeds, comments, profiles, and archives. Batch export on Apify.",
  },
  {
    href: "https://keyseer.com",
    name: "KeySeer",
    kind: "SaaS",
    external: true,
    blurb:
      "Keyword research for SEO: generate ideas, compare markets, and read multi-year trend history.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
          APIs &amp; software
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Live data APIs and custom software, without the theatre.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          GloStream ships unofficial APIs for public web data and builds the
          backends, pipelines, and dashboards teams actually run.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/substack-api"
            className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Substack API
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/40"
          >
            Contact
          </a>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-20"
      >
        <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Products
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              {...(product.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="group rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition hover:border-blue-500/40 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] uppercase tracking-wider text-zinc-500">
                  {product.kind}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {product.blurb}
              </p>
              <p className="mt-4 text-sm text-blue-400 group-hover:text-blue-300">
                {product.external ? "Open product →" : "Read more →"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Consulting
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-zinc-400">
          <p>
            We take on focused builds: data pipelines, analytics dashboards, and
            cloud backends. Python and TypeScript, on AWS.
          </p>
          <p className="text-sm text-zinc-500">
            Python · FastAPI · Next.js · PostgreSQL · dbt · Snowflake · Airflow ·
            AWS
          </p>
        </div>
      </section>
    </div>
  );
}
