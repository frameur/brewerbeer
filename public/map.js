
            var map;
            /* initialisation de la fonction initmap */
            function initmap() {
                // paramÃ©trage de la carte
                map = new L.Map('map');
                // crÃ©ation des "tiles" avec open street map
                var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
                var osmAttrib='Map data de OpenStreetMap';
                var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 10, attribution: osmAttrib});           
                // on centre sur la France
                map.setView(new L.LatLng(46.85, 2.3518),6);
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
                [48.58476, 7.750576,10,  'Alsace'],
                [44.837912, -0.579541,7,  'Aquitaine'],
                [45.783088, 3.082352,20,  'Auvergne'],
                [47.32167, 5.04139,30,  'Bourgogne'],
                [48.114722, -1.679444,30,  'Bretagne'],
                [47.9025, 1.909,21,  'Centre'],
                [48.9575, 4.365,32,  'Champagne-Ardenne'],
                [41.9266, 8.73694,8,  'Corse'],
                [47.24306, 6.02194,12,  'Franche-ComtÃ©'],
                [16, -61.73334,13,  'Guadeloupe'],
                [4.93461, -52.33033,4,  'Guyane'],
                [48.856578, 2.351828,25,  'lle-de-France'],
                [43.611944, 3.877222,32,  'Languedoc-Roussillon'],
                [45.85, 1.25,20,  'Limousin'],
                [49.1203, 6.1778,35,  'Lorraine'],
                [14.6, -61.08334,4,  'Martinique'],
                [-12.77889, 45.23151,2,  'Mayotte'],
                [43.604482, 1.443962,7,  'Midi-Pyrenees'],
                [50.637222, 3.063333,28,  'Nord-Pas-de-Calais'],
                [49.183056, -0.369444,14,  'Basse-Normandie'],
                [49.443889, 1.103333,18,  'Haute-Normandie'],
                [47.21806, -1.55278,15,  'Pays de la Loire'],
                [49.9, 2.3, 12, 'Picardie'],
                [46.581945, 0.336112,21,  'Poitou-Charentes'],
                [43.296346, 5.369889,32,  'Provence-Alpes-Cote d\'Azur'],
                [-20.8789, 55.4481,7,  'La Reunion'],
                [45.759723, 4.842223,8,  'Rhone-Alpes'] 
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
                marker.bindPopup(regions[i][3]+ " : " + regions[i][2]+" Brasseurs");
                // on ajoute le cercle Ã  la carte
                map.addLayer(marker);
            }
        