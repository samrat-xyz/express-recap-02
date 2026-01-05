const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send('WWE Super Stars Server Successfully Running....')
})

const superStarts = [
  {
    id: 1,
    name: "Roman Reigns",
    ringName: "The Tribal Chief",
    brand: "SmackDown",
    finisher: "Spear",
    championships: 6,
    isChampion: true,
    debutYear: 2010,
    nationality: "American",
  },
  {
    id: 2,
    name: "Brock Lesnar",
    ringName: "The Beast Incarnate",
    brand: "Free Agent",
    finisher: "F-5",
    championships: 10,
    isChampion: false,
    debutYear: 2002,
    nationality: "American",
  },
  {
    id: 3,
    name: "John Cena",
    ringName: "The Champ",
    brand: "Free Agent",
    finisher: "Attitude Adjustment",
    championships: 16,
    isChampion: false,
    debutYear: 2002,
    nationality: "American",
  },
  {
    id: 4,
    name: "The Rock",
    ringName: "The People's Champion",
    brand: "Legend",
    finisher: "Rock Bottom",
    championships: 10,
    isChampion: false,
    debutYear: 1996,
    nationality: "American",
  },
  {
    id: 5,
    name: "Seth Rollins",
    ringName: "The Visionary",
    brand: "RAW",
    finisher: "Curb Stomp",
    championships: 5,
    isChampion: false,
    debutYear: 2012,
    nationality: "American",
  },
  {
    id: 6,
    name: "CM Punk",
    ringName: "The Best in the World",
    brand: "RAW",
    finisher: "Go To Sleep",
    championships: 6,
    isChampion: false,
    debutYear: 2006,
    nationality: "American",
  },
  {
    id: 7,
    name: "Randy Orton",
    ringName: "The Viper",
    brand: "RAW",
    finisher: "RKO",
    championships: 14,
    isChampion: false,
    debutYear: 2002,
    nationality: "American",
  },
  {
    id: 8,
    name: "Triple H",
    ringName: "The Game",
    brand: "Legend",
    finisher: "Pedigree",
    championships: 14,
    isChampion: false,
    debutYear: 1995,
    nationality: "American",
  },
  {
    id: 9,
    name: "AJ Styles",
    ringName: "The Phenomenal One",
    brand: "SmackDown",
    finisher: "Styles Clash",
    championships: 4,
    isChampion: false,
    debutYear: 2016,
    nationality: "American",
  },
  {
    id: 10,
    name: "The Undertaker",
    ringName: "The Deadman",
    brand: "Legend",
    finisher: "Tombstone Piledriver",
    championships: 7,
    isChampion: false,
    debutYear: 1990,
    nationality: "American",
  },
];


app.get('/superstars',(req,res)=>{
    res.send(superStarts)
})


app.listen(port,()=>{
    console.log(`Server running on port : ${port}`)
})