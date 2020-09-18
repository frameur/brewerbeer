
            var map;
            /* initialisation de la fonction initmap */
            function initmap() {
                // paramÃ©trage de la carte
                map = new L.Map('map');
                // crÃ©ation des "tiles" avec open street map
                var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
                var osmAttrib='Map data de OpenStreetMap';
                var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 20, attribution: osmAttrib});           
                // on centre sur la France
                map.setView(new L.LatLng(	46.670511, -1.426442),9);
                map.addLayer(osm);
            }
            /* on va procÃ©der Ã  l'initialisation de la carte */
            initmap();
    
            /* Creation d'un tableau qui va contenir nos donnes */
            /*
             * Pour chaque elt du tableay on a les coordonnÃ©es gÃ©ographiques
             * une valeur ainsi que le nom de la rÃ©gion franÃ§aise
             */
            var regions = [
                [46.6, -1.75,'Garatelle',  'VAIRE'],
                [46.6667, -1.51667,'Des Chats Noirs',  'LANDERONDE'],
                [46.7667, -1.51667,'Les Coureurs de Lune',  'LE POIRE SUR VIE'],
                [46.5167, -1.2667,'La Bellote',  'LA COUTURE'],
                [46.5333, -1.78333,'LaCabaude',  'OLONNE SUR MER'],
                [46.8667, -2.01667,'De Trevarn',  'SAINT URBAIN'],
                [46.5, -1.78333,'Opé',  "LES SABLES D'OLONNE"],
                [46.6983, -1.93944,'Les Brasseurs de la Vie',  'SAINT-GILLES-CROIX-DE-VIE'],
                [46.9, -2.01667,'Etienne',  'SAINT-GERVAIS'],
                [46.9, -2.01667,'Aliénor',  'SAINT-GERVAIS'],
                [46.9, -2.01667,'La Fourmi Bière',  'SAINT-GERVAIS'],
                [46.3833, -0.75,'Terre de Possibles',  'SAINT-PIERRE-LE-VIEUX'],
                [46.9167, -0.966667,'Mélusine',  'CHAMBRETAUD'],
                [46.4167, -1.58333,'des Islattes',  'JARD-SUR-MER'],
                [46.8333, -1.76667,'de la Motte',  'SAINT-CHRISTOPHE-DU-LIGNERON'],
                [46.65, -0.9,'La Muette',  'BAZOGES-EN-PAREDS'],
                [46.8667, -1.01667,'du Grand Zig',  'LES HERBIERS'],
                [46.5167, -0.95,'Heima',  'POUILLÉ'],
                [46.4, -0.833333,'Drum&Brass Brewery',  'MONTREUIL'],
                [46.3425, -0.79,'La Cibulle',  'MAILLÉ'],
                [46.9667, -2.23333,'La N O',  'LA GUÉRINIÈRE'],
                [46.8333, -2.15,'La Petite Ramonière',  'NOTRE-DAME-DE-MONTS'],
                
            ];
            
            /* On boucle sur le tableau pour y placer les points */
            for (i = 0; i < regions.length; i++) {
                
                var nbAnnonces = regions[i][2];
                var couleur ="green";
                
                if (nbAnnonces > 20000) {
                    if (nbAnnonces > 50000) {
                        couleur = "red";
                    } else {
                        couleur = "orange";
                    }
                }
                /*
                 * On va crÃ©er un cercle sur la carte pour chaque point
                 */
                var circleLocation = new L.LatLng(regions[i][0], regions[i][1]),
                circleOptions = {
                    color: couleur,
                    fillColor: couleur,
                    fillOpacity: 0.2
                };
        
                var marker = new L.marker(circleLocation,(7000 + (regions[i][2]/4)), circleOptions);
                // on rajoute un popup sur le cercle
                marker.bindPopup("Brasseur " + regions[i][2]+ " - " + regions[i][3]);
                // on ajoute le cercle Ã  la carte
                map.addLayer(marker);
            }
        