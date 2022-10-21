import e from "express";
console.log('Server working')

import express from 'express'
import request from 'request'

const PORT = 5000

const APP = express()
APP.use(express.json())


APP.get('/people', (req, res)=>{
    request(
        'https://swapi.dev/api/people',
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })

            return res.send(body)
        }
    )
})

APP.get('/species', (req, res)=>{
    request(
        'https://swapi.dev/api/species',
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })

            return res.send(body)
        }
    )
})

APP.get('/films', (req, res)=>{
    request(
        'https://swapi.dev/api/films',
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })

            return res.send(body)
        }
    )
})

APP.listen(PORT, () => console.log('Server started on PORT ' + PORT))