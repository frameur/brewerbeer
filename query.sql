ALTER TABLE feedback ADD author varchar(50) NOT NULL;

ALTER table feedback
ADD CONSTRAINT fkFeedbackuser foreign key (user_id) references  users(user_id);

 SELECT * FROM users INNER JOIN club ON user_id = user.id;

-- <% if (age > 18) { %>>
    -- <p> valid!!!</p>
    -- <%} else { %>
    -- <p> Not Allowed </p>
    -- <% } %>

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

      DATE_FORMAT(b.created_at, '" + "%d/%m/%Y" + "') AS created_at, DATE_FORMAT(p.date_end, '" + "%d/%m/%Y" + "') AS date_end

      DATE_FORMAT(b.created_at, "%d/%m/%Y") AS created_at

      SELECT * ,
DATE_FORMAT(b.created_at, '%d/%m/%Y') AS created_at
from brewersfrench