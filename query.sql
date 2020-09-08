ALTER TABLE feedback ADD author varchar(50) NOT NULL;

ALTER table feedback
ADD CONSTRAINT fkFeedbackuser foreign key (user_id) references  users(user_id);

 SELECT * FROM users INNER JOIN club ON user_id = user.id;

-- <% if (age > 18) { %>>
    -- <p> valid!!!</p>
    -- <%} else { %>
    -- <p> Not Allowed </p>
    -- <% } %>


    <% if(userId){ %>
      <% } else{ %>
         <% } %>

     ("UPDATE `actubeer`SET `actuTitle`=?, `actuContent`=?, `author`=?, `image`=?, `Date`=?, `created_at`=? WHERE `brewersfrench`.`brewer_id`=?",   [actuTitle, actuContent, author, image, Date, created_at, actuId ])


("UPDATE `actubeer` SET  `actuTitle` = '" + actuTitle + "', `actuContent` = '" + actuContent + "', `author` = '" + author + "', `image` = '" + image+ "' , `Date` = '" + Date + "' , `created_at` = '" + created_at + "' WHERE `actubeer`.`actu_id` = '" + actuId + "' ");

SELECT `departement_code`, `departement_nom_uppercase` FROM `departement` WHERE 1


SELECT  `ville_departement`, `ville_nom`, `ville_nom_simple`, `ville_nom_reel`, `ville_code_postal`,  `ville_longitude_deg`, `ville_latitude_deg`  FROM `villes_france_free` WHERE 1

DATE_FORMAT(b.created_at, "% m /% d /% Y% T") AS created_at

 <!-- <script>
         // https://esri.github.io/esri-leaflet/examples/geocoding-control.html

         const coordsParis = {
            lat: 48.866667,
            lng: 2.333333
         };
         let coordsFromBrowser = {
            lat: coordsParis.lat,
            lng: coordsParis.lng
         };

         navigator.geolocation.getCurrentPosition(function (position) {
            console.log(
               "position",
               position.coords.latitude,
               position.coords.longitude
            );

            coordsFromBrowser.lat = position.coords.latitude;
            coordsFromBrowser.lng = position.coords.longitude;

            map.setView([coordsFromBrowser.lat, coordsFromBrowser.lng], 15);
         });

         const map = L.map("map").setView(
            [coordsFromBrowser.lat, coordsFromBrowser.lng],
            7
         );

         L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);

         const searchControl = L.esri.Geocoding.geosearch().addTo(map);

         const results = L.layerGroup().addTo(map);

         let markers = [];

         searchControl.on("results", function (data) {
            markers = [];
            console.log("data", data);
            results.clearLayers();
            // several results as several towns with same name (like)
            for (var i = data.results.length - 1; i >= 0; i--) {
               const result = data.results[i];
               const marker = L.marker(result.latlng);
               markers = [...markers, L.marker(marker)];
               results.addLayer(marker);
               marker.on("click", addRadius);
               console.log("markers", markers);
            }
         });

         function addRadius(marker, radius = 1000) {
            console.log("marker clicked", marker);
            const circle = L.circle([marker.latlng.lat, marker.latlng.lng], {
               radius,
            });
            console.log("circle", circle);
            circle.addTo(map);
            setTimeout(() => {
               map.setZoom(15);
            }, 1000);
         }
      </script> -->

    
DATE_FORMAT(created_at, '%d/%m/%Y') AS created_at from brewersfrench

exos trigger
CREATE TABLE Customer ( id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT, last_order_id INT );
CREATE TABLE Sale ( id INTEGER PRIMARY KEY, item_id INT, customer_id INT, price INT );
INSERT INTO Customer (name) VALUES ('Bob'), ('Sally'), ('Fred');
SELECT * FROM Customer;
CREATE TRIGGER newSale AFTER INSERT ON Sale
    FOR EACH ROW
      UPDATE Customer SET last_order_id = NEW.id WHERE Customer.id = NEW.customer_id;
;
SHOW triggers;
INSERT INTO Sale (item_id, customer_id, price) VALUES (1, 3,  1995);
SELECT * FROM Sale;
SELECT * FROM Customer;
SHOW TRIGGERS;
DROP TRIGGER newSale

CREATE TABLE Clients ( id INTEGER PRIMARY KEY AUTO_INCREMENT, nom TEXT, derniere_commande_id INT );
CREATE TABLE Ventes ( id INTEGER PRIMARY KEY AUTO_INCREMENT, ref INT, client_id INT, prix INT );
INSERT INTO Clients (nom) VALUES ('François'), ('Julien'), ('Sarah');
CREATE TRIGGER nouvelleVente
AFTER INSERT ON Ventes
FOR EACH ROW
UPDATE Clients SET derniere_commande_id = NEW.id WHERE Clients.id = NEW.client_id;
SHOW TRIGGERS;
INSERT INTO Ventes (ref, client_id, prix) VALUES (3, 1, 1500);




   <div class="container">
         <div class="row">
            <div class="col-md-6">
               <div class="five columns">
                  <% brewersfrench.forEach((brewer, index) => { %>
                  <h4>Brasseur <%= brewer.nameBrass %></h4>
                  <p><%= brewer.address %></p>
                  <% }) %>
               </div>
            </div>
         </div>
      </div> 

      SELECT nameBrass, nameTown, ville_nom, ville_longitude_deg, ville_latitude_deg FROM `brewersfrench`INNER JOIN villes_france_free ON nameTown = ville_nom


      
      <div id="brewers">
         <!-- template clones will be rendered here -->
      </div>

      <!-- the template tag does not render in the document,
      JS is used to populate and clone it -->
      <template id="brewer">
         <div>
            <a href="">
               <h1 style="font-weight: 700; margin-left: 50px;" class="nameBrass"></h1>
            </a>
            <p style=" margin-left: 50px;" class="nameTown"></p>

            <!-- <img src="" alt="" class="image"> -->
            <!-- <a href=""class="email" ></a>    -->
         </div>
      </template>
       <script>

         // JS
         const brewerTemplate = document.querySelector("#brewer");
         const brewersContainer = document.querySelector("#brewers");

         async function getApi() {
            const req = await fetch("http://localhost:1998/brasseurs/brasseurs-api");
            const resp = await req.json();

            for (const brewer of resp.data) {
               let clone = document.importNode(brewerTemplate.content, true);
               clone.querySelector(".nameBrass").textContent = brewer.nameBrass;
               clone.querySelector(".nameTown").textContent = brewer.nameTown;
               // clone.querySelector(".email").textContent = brewer.email;
               // clone.querySelector(".image").src = person.avatar;
               brewersContainer.appendChild(clone);
            }
         }

         getApi();
      </script>


   <!-- Nous chargeons les fichiers CDN de Leaflet. Le CSS AVANT le JS -->
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="" />
   <link rel="stylesheet" type="text/css" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.css" />
   <link rel="stylesheet" type="text/css" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.Default.css" />
    <!-- Fichiers Javascript -->
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>
    <script type='text/javascript' src='https://unpkg.com/leaflet.markercluster@1.3.0/dist/leaflet.markercluster.js'></script>
        // On initialise la latitude et la longitude de Paris (centre de la carte)
      var lat = 48.852969;
      var lon = 2.349903;
      var macarte = null;
           var markerClusters; // Servira à stocker les groupes de marqueurs
           // Nous initialisons une liste de marqueurs
          
  
           var brewers = {
               "Paris": { "lat": 48.852969, "lon": 2.349903 },
               "Brest": { "lat": 48.383, "lon": -4.500 },
               "Quimper": { "lat": 48.000, "lon": -4.100 },
               "Bayonne": { "lat": 43.500, "lon": -1.467 }
           };
      // Fonction d'initialisation de la carte
     // Fonction d'initialisation de la carte
  function initMap() {
  // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
  macarte = L.map('map').setView([lat, lon], 6);
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
     // Il est toujours bien de laisser le lien vers la source des données
     attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
     minZoom: 1,
     maxZoom: 20
  }).addTo(macarte);
  // Nous parcourons la liste des villes
  for (brewer in brewers) {
  var marker = L.marker([brewers[brewer].lat, brewers[brewer].lon]).addTo(macarte);
  // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
  marker.bindPopup(brewer);
  }               	
  }
      window.onload = function(){
     // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
     initMap(); 
      };

      "express": module pour créer un serveur local 
      "express-fileupload": gestion de chargement de fichier 
      "ejs": moteur de templating 
      "express-session": gestion des sessions utilisateur 
      "path": gestion chemin fichiers
      "mysql": connection base de données
      "dotenv": module protection données sensible
      "util": module accés certaines fonctions utilitaires
      "morgan": enregistreur de middleware requete HTTP


      SELECT `nameBrass`, `departement_nom`, GROUP_CONCAT(`departement_nom` SEPARATOR ' ') AS concat_mot FROM `brewersfrench` INNER JOIN `departement` ON `departement_code` = `nameCode` GROUP BY `departement_nom` ORDER BY `concat_mot` ASC


          db.query('SELECT id, firstname, email, password, rolesite FROM users WHERE email = ? AND password = ?', [email, result[0].password], function (err, results) {
            if (results.length) {
              req.session.loggedin = true;
              req.session.firstname = results[0].firstname;
              req.session.userId = results[0].id;
              if (results[0].rolesite === 1) {                
                res.redirect('/admin')
              }else{
                res.redirect('/')
              };
              // console.log("req.session :", req.session)
            } else {
              res.send('Email ou mot de passe incorrect !');
            }
          });
        } else {
          res.send('Ajouter un email ou un mot de passe !');
        }
      })
    }