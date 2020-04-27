const themeConfig = require("./theme-config.js");
const webTJPlugin = require("./plugin-webtj.js");
const katex = require("@abreto/markdown-it-katex");
const mdFigure = require("markdown-it-figure");
const mdTaskLists = require("markdown-it-task-lists");
const MarkdownItOEmbed = require("markdown-it-oembed")

// .vuepress/config.js
module.exports = {
  // base: "/runestone/books/published/einfach-informatik-zusatz-material/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/KaTeX/0.11.1/katex.min.css"
      }
    ]
  ],
  //host: "localhost",
  plugins: [
    //"vuepress-plugin-export",
    //require("vuepress-plugin-cs-simply.js")
    //"vuepress-plugin-cs-simply"
    "vuepress-plugin-serve",
    {
      host: "localhost",
      port: 9000,
      staticOptions: {
        dotfiles: "allow"
      }
    }
  ],
  markdown: {
    lineNumbers: true,
    linkify: true,
    extendMarkdown: md => {
      md.use(katex);
      md.use(mdFigure);
      md.use(mdTaskLists);
      md.use(webTJPlugin);
      md.use(MarkdownItOEmbed);
    }
  },
  themeConfig: themeConfig
};
