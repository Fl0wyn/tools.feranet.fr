import { siteConfig } from "@/config/site";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="py-6 text-center dark:font-light text-sm bg-background relative">
      Copyright © {currentYear}&nbsp;
      <Link
        href={`https://${siteConfig.href}`}
        className="hover:underline underline-offset-4"
      >
        {siteConfig.href}
      </Link>
    </footer>
  );
}
