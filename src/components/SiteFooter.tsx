import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative h-8 w-8 overflow-hidden rounded-md">
            <Image
              src="/logo-sqaure-zinc-900.png"
              alt=""
              width={32}
              height={42}
              className="absolute inset-x-0 top-0 h-auto w-8"
            />
          </span>
          <div className="text-xs leading-relaxed text-zinc-500">
            <p>© {new Date().getFullYear()} {site.legal}. All rights reserved.</p>
            <p>{site.address}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-zinc-400">
          <Link href="/substack-api" className="hover:text-white">
            Substack API
          </Link>
          <Link href="/substack-api/docs" className="hover:text-white">
            Docs
          </Link>
          <Link
            href="/substack-api/does-substack-have-an-api"
            className="hover:text-white"
          >
            FAQ
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
