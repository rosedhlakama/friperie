export function launchApp() {
  displayHeader()
  displaySearchBar()
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

function performSearch() {
  console.log('search button pressed')
  // id="suburbResults"
  // need API info of suburbs to loop through
  // OR list directly in main HBS file
  // OR create table to store in DB
}

// function displayResults() {
  // take suburbResults
  // display underneath search bar
// }




// Other IDs:
// opShopName
// opShopAddress
// opShopHours