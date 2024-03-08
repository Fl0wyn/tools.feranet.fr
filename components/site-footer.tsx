import { siteConfig } from "@/config/site";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-8 text-center dark:font-light text-sm bg-background relative">
      Copyright © {new Date().getFullYear()}&nbsp;
      <Link
        href={`https://${siteConfig.href}`}
        className="hover:underline underline-offset-4"
      >
        {siteConfig.href}
      </Link>
    </footer>
  );
}
