import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-md">
            <Image
              src="/logo-sqaure-zinc-900.png"
              alt=""
              width={36}
              height={48}
              className="absolute inset-x-0 top-0 h-auto w-9"
              priority
            />
          </span>
          <span className="text-sm font-medium tracking-wide text-white">
            GloStream Tech
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-400 sm:gap-6">
          <Link
            href="/#products"
            className="hidden transition hover:text-white sm:inline"
          >
            Products
          </Link>
          <Link href="/substack-api" className="transition hover:text-white">
            Substack API
          </Link>
          <Link
            href="/substack-api/docs"
            className="hidden transition hover:text-white sm:inline"
          >
            Docs
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="transition hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
