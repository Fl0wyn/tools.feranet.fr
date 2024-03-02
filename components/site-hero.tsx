import { siteConfig } from "@/config/site";

export function SiteHero() {
  return (
    <div className="flex flex-col items-center justify-center h-[15rem] relative z-20">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        {siteConfig.description}
      </p>

      <h1 className="text-3xl sm:text-5xl font-bold mt-2">
        Awersome list{" "}
        <span className="text-amber-500 dark:text-amber-500">créativity</span>
      </h1>
    </div>
  );
}
