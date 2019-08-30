import { getListofPlaces } from "./api";
import request from 'superagent'

export function launchApp() {
  displayHeader()
  displaySearchBar()
  listofPlaces()
}

function displayHeader() {
  let html = `
  <img src="/images/Friperie.png" id="headerimg" alt="header" width="700">
`
  document.getElementById('friperieHeader').innerHTML = html
}

function displaySearchBar() {
  const button = document.getElementById('searchButton')
  button.addEventListener('click', () => performSearch())
}


function listofPlaces() {
  request
    .get('/opshops')
    .then(result => {
      let html = `
        <h3>Name: ${result.body.name}</h3>
        <h4>Address: ${result.body.formatted_address}</h4>
        <ul>
        ${result.body.opening_hours.weekday_text.map(hoursHTML).join('\n')}
      
        </ul>
        `
      document.getElementById('opShop').innerHTML = html
    })
}

function hoursHTML(day) {
  return `<li>${day}</li>`
}



// Other IDs:
// opShopName
// opShopAddress
// opShopHours