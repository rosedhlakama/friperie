const express = require('express')
const request = require('superagent')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
     res.render('index')
})
    

router.get('/opshops', (req, res) => {
  const apiKey = process.env.GOOGLE_API_KEY
  request.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=opshop%20Wellington%20NZ&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,type,place_id,geometry&key=' + apiKey)
        .then(result => {
          const opshops = result.body.candidates
          const opshopId = result.body.candidates[0].place_id
          request.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + opshopId + '&fields=name,formatted_address,formatted_phone_number,opening_hours&key=' + apiKey)
            .then(result => {
              const opshop = result.body.result
              res.render('index', {opshop})
            })
          
        })
        .catch(e => {
              res.status(500).send(e.message)
        })
})

module.exports = router
