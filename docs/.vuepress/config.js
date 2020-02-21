var fs = require('fs');
function listFiles(folderName, prefix="") { 
  
  list = fs.readdirSync('./docs' + folderName); 
  return list.map(i => prefix + i)
}

module.exports = {
  title: 'Intermediate Java - Spring 2020',
  description: 'Just playing around',
  themeConfig: {
    title: 'ReDI School Intermediate Java',
    nav: [
      { text: "Home", link: "/" },
      { text: "Lessons", link: "/lessons/01-intro" },
      { text: "Resources", link: "/resources"},
      { text: "Previous Semesters", link: "/previous/fall2019/01-intro"},
      { text: "For Teachers", link: "/teachers/for-teachers"}
    ],
    sidebar: {
      '/lessons/': [
        {
          title: "Lessons",
          collapsable: false,
          children: listFiles("/lessons/")
        }],
      '/teachers/': [
        {
          title: "Teachers' Resources",
          collapsable: false,
          children: listFiles("/teachers/")
        }], 
        '/previous/': [
        {
          title: "Fall 2019",
          collapsable: true,
          children: listFiles("/previous/fall2019/", prefix="fall2019/")
        }, 
        {
          title: "Spring 2019",
          collapsable: true,
          children: listFiles("/previous/spring2019/", prefix="spring2019/")
        }]
    },
    lastUpdated: 'Last Updated'
  }
}
