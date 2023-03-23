const express = require('express')
const app = express()

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
        id: 2,
        content: "HTML  easy",
        important: false
      },
      {
        id: 3,
        content: "HTML is ",
        important: true
      },
  ]

  app.get('/api/notes', (req, res) => {
    res.json(notes)
  })

  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    const note = notes.find((note) =>  note.id === id)
    console.log(note)
       res.json(note)
  })


  const PORT = process.env.PORT || 3001
  app.listen(PORT)
console.log(`Server running on port ${PORT}`)