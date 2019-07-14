const GetProjects = () => {
  return [
    {
      id: 123
      , name: "Exotic Snackstore"
      , description: "Exotic Snackstore is a demo webstore that sells foreign snacks. Users can create accounts and place demo orders while admins can edit the products, view orders and manage users. Done with Teemu Tannerma."
      , stack: [
        "react"
        , "node"
        , "sass"
      ]
      , img: 'exotic.jpg'
      , alt: "exotic"
      , github: "https://github.com/NikoHienonen/Exotic-Snackstore"
      , link: "https://fierce-lake-40102.herokuapp.com/"
    },
    {
      id: 124
      , name: "Audio Coursestore"
      , description: "Audio Coursestore is a demo portal for teachers to view and sign up for courses that I created for a client. This is not the real version, just a showcase version of the real one with all the data changed to placeholder and dummy info about audio production."
      , stack: [
        "react"
        , "sass"
      ]
      , img: 'audio.jpg'
      , alt: "audio"
      , github: "https://github.com/NikoHienonen/audiocourse-store"
      , link: "https://rocky-tor-98553.herokuapp.com/"
    },
    {
      id: 125
      , name: "Volleyball App"
      , description: "Volleyball App is an application created for an unnamed volleyball team that needed an app to calculate game points and save matches to a database for viewing."
      , stack: [
        "angular"
        , "node"
        , "css3"
      ]
      , img: 'vb-app.jpg'
      , alt: "vb-app"
      , github: "https://github.com/NikoHienonen/vbapp"
      , link: ""
    },
    {
      id: 126
      , name: "Guess The Rick and Morty Character!"
      , description: "Guess the Rick and Morty Character! is the first project that I ever created, I made it to train my REST-skills. Obviously it isn't perfect since it doesn't work without a sufficiently fast connection, but acts as a memento for where I've come from."
      , stack: [
        "js"
        , "html5"
        , "css3"
      ]
      , img: 'r-m.jpg'
      , alt: "r-m"
      , github: "https://github.com/NikoHienonen/R-M"
      , link: "https://nikohienonen.github.io/R-M/index.html"
    }
  ]

}

export default GetProjects
