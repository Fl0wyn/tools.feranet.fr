import Link from "next/link";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="backdrop-blur sticky top-0 z-40 w-full border-b">
      <div className="container flex h-14 items-center px-4 sm:justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={28} height={28} />
            <span className="inline-block font-bold ps-1">
              {siteConfig.title}
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "link",
                })}
              >
                <GitHubLogoIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
