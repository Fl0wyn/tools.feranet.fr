import { ToolsConfig } from "@/config/tools";
import Image from "next/image";
import Link from "next/link";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IndexPage() {
  return (
    <div className="w-full bg-background dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex">
      <div className="absolute pointer-events-none inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="container py-4 md:py-8 z-20 flex">
        <Command className="border">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {ToolsConfig.map((link) => (
              <CommandGroup key={link.title} heading={link.title}>
                <div className="container flex flex-wrap items-start gap-2 px-2 my-4">
                  {link.rows.map((row) => (
                    <CommandItem key={row.title}>
                      <Card key={row.title}>
                        <Link href={row.href} target="_blank" rel="noreferrer">
                          <CardHeader>
                            <CardTitle>
                              <Image
                                src={row.icon}
                                className="h-5 me-2"
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
                    </CommandItem>
                  ))}
                </div>
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </section>
    </div>
  );
}
