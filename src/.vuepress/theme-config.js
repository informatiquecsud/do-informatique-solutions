module.exports = {
  logo: "/logo.png",
  nav: [
    {
      text: "Programmation",
      items: [
        {
          text: "Solutions des exercices",
          ariaLabel: "Menu de solution des exercices",
          items: [1, 2, 3, 4, 5, 6].map(chapterNo => ({
            text: `Chapitre ${chapterNo}`,
            link: `/concepts-programmation/solutions/chapter-0${chapterNo}`
          }))
        }
      ]
    },
    { text: "Travaux pratiques et projets", link: "/projects-worksheets/" }
  ],
  sidebar: "auto",
  lastUpdated: "Dernière modification"
};
