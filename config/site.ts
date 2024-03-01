export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "Tools Feranet",
  description: "A collection of tools for web development.",
  mainNav: [
    // {
    //   title: "",
    //   href: "",
    //   icon: "",
    //   desc: ""
    // },
  ],

  tools: [
    {
      title: "Design",
      rows: [
        {
          title: "Photopea",
          href: "https://www.photopea.com/",
          icon: "/images/photopea.png",
          desc: "Online Photo Editor",
        },
        {
          title: "Vecta",
          href: "https://vecta.io/",
          icon: "/images/vecta.png",
          desc: "Online Vector Graphics Editor",
        },
        {
          title: "Convertio",
          href: "https://convertio.co",
          icon: "/images/convertio.png",
          desc: "Convert anything to anything",
        },
        {
          title: "Haikei",
          href: "https://app.haikei.app/",
          icon: "/images/haikei.png",
          desc: "Generate SVG shapes",
        },
        {
          title: "Base64 Image",
          href: "https://www.base64-image.de/",
          icon: "/images/base64-image.png",
          desc: "Convert image to base64",
        },
        {
          title: "SVGOMG",
          href: "https://svgomg.net/",
          icon: "/images/svgomg.png",
          desc: "Optimize SVG",
        },
        {
          title: "Tailwindcss Color",
          href: "https://tailwindcss.com/docs/customizing-colors",
          icon: "/images/tailwindcss.png",
          desc: "Customizing colors",
        },
      ],
    },
    {
      title: "Icon",
      rows: [
        {
          title: "Material Icons",
          href: "https://fonts.google.com/icons",
          icon: "/images/material-icons.png",
          desc: "Google's Material Icons",
        },
        {
          title: "Font Awesome",
          href: "https://fontawesome.com/search",
          icon: "/images/font-awesome.ico",
          desc: "The web's most popular icon set and toolkit",
        },
        {
          title: "Pictogrammers",
          href: "https://pictogrammers.com/libraries/",
          icon: "/images/pictogrammers.png",
          desc: "A library of free icons for your projects",
        },
        {
          title: "Lucide",
          href: "https://lucide.dev/",
          icon: "/images/lucide.svg",
          desc: "Simply beautiful open-source icons",
        },
        {
          title: "SVGPORN",
          href: "https://svgporn.com/",
          icon: "/images/svgporn.png",
          desc: "The best SVGs on the web",
        },
        {
          title: "Radix icons",
          href: "https://www.radix-ui.com/icons",
          icon: "/images/radix-icons.png",
          desc: "A crisp set of 15x15 icons designed by the Modulz team",
        },
        {
          title: "Icones 8",
          href: "https://icones8.fr/icons/color",
          icon: "/images/icones8.png",
          desc: "Free icons in various styles",
        },
        {
          title: "Emojipedia",
          href: "https://emojipedia.org/",
          icon: "/images/emojipedia.ico",
          desc: "Emoji search and copy platform",
        },
        {
          title: "Clearbit",
          href: "https://clearbit.com/logo",
          icon: "/images/clearbit.ico",
          desc: "Logo API",
        },
      ],
    },
    {
      title: "Library",
      rows: [
        {
          title: "VuePress",
          href: "https://vuepress.vuejs.org/",
          icon: "/images/vuepress.png",
          desc: "Vue-powered Static Site Generator",
        },
        {
          title: "VueUse",
          href: "https://vueuse.org/",
          icon: "/images/vueuse.ico",
          desc: "Collection of Vue Composition Utilities",
        },
        {
          title: "Vuetify",
          href: "https://vuetifyjs.com/en/",
          icon: "/images/vuetify.ico",
          desc: "Vue Component Framework",
        },
        {
          title: "Bootstrap",
          href: "https://getbootstrap.com/",
          icon: "/images/bootstrap.png",
          desc: "The world’s most popular front-end open source toolkit",
        },
        {
          title: "Tailwindcss",
          href: "https://tailwindcss.com/",
          icon: "/images/tailwindcss.png",
          desc: "A utility-first CSS framework for rapid UI development",
        },
        {
          title: "shadcn UI",
          href: "https://ui.shadcn.com/",
          icon: "/images/shadcn-ui.ico",
          desc: "Ract component library",
        },
        {
          title: "Aceternity UI",
          href: "https://ui.aceternity.com/",
          icon: "/images/aceternity-ui.png",
          desc: "React component library",
        },
      ],
    },
    {
      title: "AI",
      rows: [
        {
          title: "ChatGPT",
          href: "https://chat.openai.com/",
          icon: "/images/chatgpt.png",
          desc: "OpenAI's Chatbot",
        },
        {
          title: "Gemini",
          href: "https://gemini.google.com/",
          icon: "/images/gemini.png",
          desc: "Google's Chatbot",
        },
        {
          title: "Suno AI",
          href: "https://www.suno.ai/",
          icon: "/images/suno-ai.ico",
          desc: "Make a song",
        },
        {
          title: "DALL·E 2",
          href: "https://labs.openai.com/",
          icon: "/images/dalle2.png",
          desc: "OpenAI's Image Generation",
        },
        {
          title: "Upscale",
          href: "https://www.upscale.media/",
          icon: "/images/upscale.png",
          desc: "AI Image Upscaling and Enhancement",
        },
        {
          title: "Remove bg",
          href: "https://www.remove.bg/",
          icon: "/images/remove-bg.png",
          desc: "Remove Image Background",
        },
        {
          title: "Watermark Remover",
          href: "https://www.watermarkremover.io/",
          icon: "/images/watermark-remover.ico",
          desc: "Remove Watermark",
        },
        {
          title: "Vectorizer",
          href: "https://vectorizer.ai/",
          icon: "/images/vectorizer.png",
          desc: "Convert any image to vector",
        },
      ],
    },
    {
      title: "API",
      rows: [
        {
          title: "Ipinfo",
          href: "https://ipinfo.io/",
          icon: "/images/ipinfo.png",
          desc: "IP address and geolocation data API",
        },
        {
          title: "Openweathermap",
          href: "https://openweathermap.org/current",
          icon: "/images/openweathermap.png",
          desc: "Weather data API",
        },
        {
          title: "Ntfy",
          href: "https://ntfy.sh/",
          icon: "/images/ntfy.ico",
          desc: "Push notifications made easy",
        },
        {
          title: "Ipify API",
          href: "https://www.ipify.org/",
          icon: "/images/ipify.png",
          desc: "A Simple Public IP Address API",
        },
      ],
    },
    {
      title: "Dev",
      rows: [
        {
          title: "Alternativeto",
          href: "https://alternativeto.net/",
          icon: "/images/alternativeto.ico",
          desc: "Find software alternatives",
        },
        {
          title: "Useful Forks",
          href: "https://useful-forks.github.io/",
          icon: "/images/useful-forks.png",
          desc: "A collection of useful forks",
        },
        {
          title: "Readmi",
          href: "https://readmi.xyz/editor",
          icon: "/images/readmi.svg",
          desc: "Create a beautiful README for your GitHub profile",
        },
        {
          title: "Json Crack",
          href: "https://jsoncrack.com/editor",
          icon: "/images/json-crack.ico",
          desc: "Understand your JSON better by visualizing",
        },
      ],
    },
  ],

  links: {
    github: "https://github.com/tools.feranet.fr",
  },
};
