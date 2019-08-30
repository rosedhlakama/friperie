import request from 'superagent'


export function getListofPlaces() {
  request.get('/opshops')
  .then(result => {
    console.log(result)
  })
    .catch(err => {
      res.status(500).send(err.message)
    })
}