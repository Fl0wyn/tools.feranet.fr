import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToolsConfig } from "@/config/tools";

import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="w-full bg-background dark:bg-grid-slate-800/[0.2] bg-grid-slate-400/[0.2] relative flex">
      <div className="absolute pointer-events-none inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="container py-4 md:py-8 z-20">
        {ToolsConfig.map((link) => (
          <div key={link.title}>
            <h1 className="text-xl font-semibold leading-tight tracking-tighter mb-3">
              {link.title}
            </h1>

            <div className="container px-2 flex flex-wrap items-start gap-2 mb-8">
              {link.rows.map((row) => (
                <Card key={row.title}>
                  <Link href={row.href} target="_blank" rel="noreferrer">
                    <CardHeader>
                      <CardTitle>
                        <Image
                          src={row.icon}
                          // placeholder="blur"
                          className="h-5 me-4"
                          width={20}
                          height={20}
                          alt={`${row.title} favicon`}
                        />
                        {row.title}
                      </CardTitle>
                      <CardDescription>{row.desc}</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
