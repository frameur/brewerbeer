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

CREATE TABLE Categorie ( id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT, last_order_id INT );
CREATE TABLE Sort ( id INTEGER PRIMARY KEY, item_id INT, categorie_id INT, alcool INT );
INSERT INTO Categorie (name) VALUES ('Stout'), ('Ipa'), ('Langer'), ('Abbaye');

CREATE TRIGGER newSort AFTER INSERT ON Sort
FOR EACH ROW
UPDATE Categorie SET last_order_id = NEW.id WHERE Categorie.id = NEW.categorie_id;

SHOW TRIGGERS; 


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

      async function insertPost(nameBrass, address, nameCp ){
              await pool.execute('INSERT INTO brewersfrench SET nameBrass = ?, address = ?, nameCp = ?,'[ nameBrass, address, nameCp ] )
        }
       
        

        insertPost;