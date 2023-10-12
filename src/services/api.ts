import axios from "axios";

export const api = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers:{
    'X-RapidAPI-Key': 'e4d31fd093msh81feaaf1ff2ca55p11925ejsn2f33b3baf380',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
})