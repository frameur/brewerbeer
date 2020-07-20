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

SELECT brewersfrench, DATE_FORMAT(created_at, "% m /% d /% Y% T") FROM created_at