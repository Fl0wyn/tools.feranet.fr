"use client";
import Link from "next/link";

import { toolsConfig, ToolsConfig } from "@/config/tools";
import Image from "next/image";
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

export default function IndexPage() {
  const [tools, setTools] = useState(toolsConfig);

  const [active, setActive] = useState("All");

  const updateTools = (link: ToolsConfig[0] | "All") => {
    if (link === "All") {
      setActive("All");
      return setTools(toolsConfig);
    } else {
      setTools([link]);
      setActive(link.title);
    }
  };

  return (
    <>
      <section className="container px-4 relative flex">
        <ul className="flex flex-wrap gap-2">
          <li
            className={badgeVariants({
              variant: `${active === "All" ? "default" : "outline"}`,
            })}
            onClick={() => updateTools("All")}
          >
            All
          </li>
          {toolsConfig.map((link) => (
            <li
              key={link.title}
              className={badgeVariants({
                variant: `${active === link.title ? "default" : "outline"}`,
              })}
              onClick={() => updateTools(link)}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </section>

      <section className="container px-4 pt-4 z-20 relative flex">
        <Command className="border">
          <CommandInput
            placeholder={`Search on ${toolsConfig.reduce(
              (acc, link) => acc + link.rows.length,
              0
            )} tools`}
          />
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            {tools.map((link) => (
              <CommandGroup key={link.title} heading={link.title}>
                <div className="container flex flex-wrap gap-2 px-[0.05rem] mt-4">
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
