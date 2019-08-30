import { getListofPlaces } from "./api";

export function launchApp() {
  displayHeader()
  displaySearchBar()
}

function displayHeader() {
  let html = `
  <h1>Friperie</h1>
`
  document.getElementById('friperieHeader').innerHTML = html
}

function displaySearchBar() {
  const button = document.getElementById('searchButton')
  button.addEventListener('click', () => performSearch())
}

function performSearch() {
  console.log('search button pressed')
  // id="suburbResults"
  // need API info of suburbs to loop through
  // OR list directly in main HBS file
  // OR create table to store in DB
  getListofPlaces(results)
    .then(result => {
      // res.json(result)
      displayResults(result)
    })
}

function listofPlaces(){
  return request
  .get('/opshops')
  .then(result => {
    let html = `
    <li>SHOPS ${result.body}</li>
    `
  document.getElementById('opShop').innerHTML = html
  })
 }

// function displayResults() {
  // take suburbResults
  // display underneath search bar
// }




// Other IDs:
// opShopName
// opShopAddress
// opShopHours