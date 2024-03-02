"use client";

import { SiteHero } from "@/components/site-hero";
import { ToolsConfig } from "@/config/tools";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { badgeVariants } from "@/components/ui/badge";

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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function IndexPage() {
  const [tools, setTools] = useState(ToolsConfig);

  const [active, setActive] = useState("All");

  const updateTools = (
    link:
      | {
          title: string;
          rows: { title: string; href: string; icon: string; desc: string }[];
        }
      | "All"
  ) => {
    if (link === "All") {
      setActive("All");
      return setTools(ToolsConfig);
    } else {
      setTools([link]);
      setActive(link.title);
    }
  };

  return (
    <>
      <SiteHero />

      <section className="container px-4 relative flex">
        <ul className="flex flex-wrap gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <li
                  className={badgeVariants({
                    variant: `${active === "All" ? "default" : "outline"}`,
                  })}
                  onClick={() => updateTools("All")}
                >
                  All
                </li>
              </TooltipTrigger>
              <TooltipContent>
                {ToolsConfig.reduce((acc, link) => acc + link.rows.length, 0)}
              </TooltipContent>
            </Tooltip>
            {ToolsConfig.map((link) => (
              <Tooltip key={link.title}>
                <TooltipTrigger>
                  <li
                    className={badgeVariants({
                      variant: `${
                        active === link.title ? "default" : "outline"
                      }`,
                    })}
                    onClick={() => updateTools(link)}
                  >
                    {link.title}
                  </li>
                </TooltipTrigger>
                <TooltipContent>{link.rows.length}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </ul>
      </section>

      <section className="container px-4 pt-4 z-20 relative flex">
        <Command className="border">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            {tools.map((link) => (
              <CommandGroup key={link.title} heading={link.title}>
                <div className="container flex flex-wrap items-start gap-2 px-0 my-4">
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
    </>
  );
}
