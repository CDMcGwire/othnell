// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Othnell Tabletop RPG",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Markdown",
        baseDir: "src/pages/",
        refs: {
          author: {
            typeName: "Author",
            create: true
          }
        },
        plugins: [
          [
            "remark-autolink-headings",
            {
              content: {
                type: "element",
                tagName: "span",
                properties: { className: ["icon", "icon-link"] },
                children: [{ type: "text", value: "🠶" }]
              }
            }
          ],
          ["remark-bracketed-spans"]
        ]
      }
    }
  ],
};
