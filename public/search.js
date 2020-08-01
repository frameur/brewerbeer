const search_input = document.getElementById('search')
const results = document.getElementById('results')
let search_term = ''
let departements
const showDepartement = async () => {
  // clearHTML
  results.innerHTML = ''
  // getting the data
  departements = await fetch('http://localhost:1998/brasseurs/brasseurs-api').then(res =>
    res.json()
  )
  // creating the structure
  const ul = document.createElement('ul')
  departements
    .filter(departement =>
      departement.departement_nom_uppercase.toUpperCase().includes(search_term.toUpperCase())
    )
    .forEach(departement => {
      const li = document.createElement('li')
      let departement_nom_uppercase  = document.createElement('a')
      departement_nom_uppercase.innerText = departement.departement_nom_uppercase 
      departement_nom_uppercase.href = '/brasseurs/' + departement.id
    //   departement_nom.classList.add('country-name')
      li.appendChild(departement_nom_uppercase)
      ul.appendChild(li)
    })
  results.appendChild(ul)
}
// display initial departement
// showDepartement();
search_input.addEventListener('input', e => {
  search_term = e.target.value
  // re-display departement again based on the new search_term
  showDepartement()
})