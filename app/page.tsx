import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {siteConfig.tools.map((link) => (
        <div key={link.title} className="flex flex-col items-start gap-2">
          <h1 className="text-xl font-extrabold leading-tight tracking-tighter md:text-3xl mb-3">
            {link.title}
          </h1>

          <div className="container px-2 flex flex-wrap items-start gap-2 mb-12">
            {link.rows.map((row) => (
              <Card key={row.title}>
                <Link href={row.href} target="_blank" rel="noreferrer">
                  <CardHeader>
                    <CardTitle>
                      <Image
                        src={row.icon}
                        className="h-6 me-4"
                        width={24}
                        height={24}
                        alt={`${row.title} favicon`}
                      />
                      {row.title}
                    </CardTitle>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
