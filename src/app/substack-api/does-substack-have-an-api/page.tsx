import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { rapidApiSubstack, substackPages } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Does Substack have an API?",
  description:
    "Substack has a narrow official Developer API for LinkedIn profile lookup. There is no official API for search, feeds, posts, comments, or publication archives. GloStream’s unofficial live API covers that public read surface.",
  path: substackPages.faq,
});

const faqs = [
  {
    q: "Does Substack have an official API?",
    a: "Yes, but it is narrow. In 2026 Substack published a Developer API that looks up a public creator profile from a LinkedIn handle. Access is gated: you apply, accept their terms, and mint a token. It is not a general API for posts, search, feeds, comments, or archives.",
  },
  {
    q: "What about Substack’s official MCP?",
    a: "Substack also runs a remote MCP server for publication analytics. That is OAuth-gated and aimed at admins of Bestseller publications. It does not expose public search or archive reads.",
  },
  {
    q: "How do you read public posts, search, and archives?",
    a: "Per-publication RSS covers a slice of posts. For search, feeds, comments, profiles, and full archives, developers use unofficial APIs that wrap Substack’s public web JSON. GloStream’s Substack Live API is that read surface, sold on RapidAPI.",
  },
  {
    q: "Is the GloStream API affiliated with Substack?",
    a: "No. It is unofficial, independent, and can break when Substack changes their site. It does not publish posts, manage subscribers, or use your Substack login.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function DoesSubstackHaveAnApiPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-sm text-zinc-500">
        <Link href={substackPages.product} className="hover:text-zinc-300">
          Substack API
        </Link>
        <span className="mx-2">/</span>
        FAQ
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Does Substack have an API?
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-zinc-400">
        Yes — a small official one. Substack does not offer a general-purpose
        public API for posts, search, or publication archives. That gap is what
        unofficial live APIs fill.
      </p>

      <div className="mt-12 space-y-10">
        {faqs.map((item) => (
          <section key={item.q}>
            <h2 className="text-xl font-semibold text-white">{item.q}</h2>
            <p className="mt-3 leading-relaxed text-zinc-400">{item.a}</p>
          </section>
        ))}
      </div>

      <section className="mt-12 space-y-4 text-zinc-400">
        <h2 className="text-xl font-semibold text-white">
          Official vs unofficial
        </h2>
        <p>
          Use Substack’s{" "}
          <a
            href="https://support.substack.com/hc/en-us/articles/45099095296916-Substack-Developer-API"
            className="text-blue-400 hover:text-blue-300"
          >
            Developer API
          </a>{" "}
          when you need a verified creator profile from a LinkedIn handle. Use{" "}
          <Link
            href={substackPages.product}
            className="text-blue-400 hover:text-blue-300"
          >
            GloStream Substack Live
          </Link>{" "}
          when you need public search, feeds, comments, profiles, or archives.
          Checkout is on RapidAPI. Routes are on the{" "}
          <Link
            href={substackPages.docs}
            className="text-blue-400 hover:text-blue-300"
          >
            docs
          </Link>
          .
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={rapidApiSubstack}
          className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Try on RapidAPI
        </a>
        <Link
          href={substackPages.docs}
          className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/40"
        >
          API docs
        </Link>
      </div>
    </article>
  );
}
