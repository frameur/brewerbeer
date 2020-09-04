const search_input = document.getElementById('search')
const results = document.getElementById('results')
let search_term = '2'
let departements
const showDepartement = async () => {
  // clearHTML
  results.innerHTML = ''
     console.log(results);
  // getting the data
  departements = await fetch('http://localhost:1998/brasseurs/brasseursdepartements-api').then(res =>
    res.json()
  )
  // creating the structure
  const ul = document.createElement('ul')
  departements
    .filter(departement =>
      departement.departement_nom.toLowerCase().includes(search_term.toLowerCase())
    )
    .forEach(departement => {
      const li = document.createElement('li')
      let departement_nom = document.createElement('a')
      
      document.querySelector('#redirect')
      .addEventListener('click', ()=>{
        window.location.href = 'https://www.brasseurs-independants.fr/';
      })

      departement_nom.innerText = departement.departement_nom
      departement_nom.href = '#' + departement.nameBrass
    
      li.appendChild(departement_nom)
      ul.appendChild(li)
  
    })
    
  results.appendChild(ul)
  
}

// display initial departement
search_input.addEventListener('input', e => {
  
search_term = e.target.value

// re-display departement again based on the new search_term
showDepartement()

})