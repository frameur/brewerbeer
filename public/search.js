// document.querySelector('#departement').addEventListener('input', function(){
//   if(this.value.length == 20){
//      let url = 'http://localhost:1998/brasseurs/departements-api';

//      fetch(url).then((res) =>
//      res.json().then(() => {
//         console.log(data);
//         let affichage = '<ul>';
//            for(let departement of data){
//               affichage += '<li>${departement.departement_nom}</li>';
//            }
//            affichage += '</ul>';
//            document.querySelector('#departements').innerHTML = affichage;
//      })
//      )
//   }
// })





const search_input = document.getElementById('search')
const results = document.getElementById('results')
let search_term = ''
let departements
const showDepartement = async () => {
  // clearHTML
  results.innerHTML = ''
  // getting the data
  departements = await fetch('http://localhost:1998/brasseurs/departements-api').then(res =>
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
      let departement_nom  = document.createElement('a')
     
      departement_nom.innerText = departement.departement_nom
      departement_nom.href = '/brasseurs/' + departement.id
      
    //   departement_nom_uppercase.classList.add('country-name')
      li.appendChild( departement_nom)
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