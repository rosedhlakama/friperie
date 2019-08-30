const express = require('express')
const request = require('superagent')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
     res.render('index')
})
    

router.get('/opshops', (req, res) => {
  const apiKey = process.env.GOOGLE_API_KEY
  request.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=' + apiKey)
        .then(result => {
          const opshops = result.body.candidates
          console.log(opshops)
          res.json(opshops)
        })
        .catch(e => {
              res.status(500).send(e.message)
        })
})

module.exports = router
