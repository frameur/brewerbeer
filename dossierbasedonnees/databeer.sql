CREATE DATABASE IF NOT EXISTS brewerbeer;
USE brewerbeer;

CREATE TABLE IF NOT EXISTS brewersfrench(
       brewer_id INT AUTO_INCREMENT,
       nameBrass VARCHAR(30) NOT NULL,
       address VARCHAR(50) NOT NULL,
       nameCp VARCHAR(10) NOT NULL,
       nameCode VARCHAR(10) NOT NULL,
       nameTown VARCHAR(50) NOT NULL,
       nameWeb VARCHAR(50) NOT NULL,
       nameFacebook VARCHAR(50) NOT NULL,
       email VARCHAR(50) NOT NULL,
       phone VARCHAR(12) NOT NULL,
       logo VARCHAR(255) NOT NULL,
       content VARCHAR(255) NOT NULL,
       listBeer VARCHAR(30) NOT NULL,
       created_at TIMESTAMP DEFAULT NOW(),
       departement_id int,
       foreign key (departement_id) references  departement(departement_id),
       CONSTRAINT pkBrewer PRIMARY KEY(brewer_id)
);

CREATE TABLE IF NOT EXISTS productbeer(
        product_id INT AUTO_INCREMENT,
        nameBeer VARCHAR(30) NOT NULL,
        alcoolBeer VARCHAR(10) NOT NULL,
        content VARCHAR(255) NOT NULL,
        categoryBeer VARCHAR(30) NOT NULL,
        brewer_id INT NOT NULL,
        CONSTRAINT pkProduct PRIMARY KEY(product_id)
      
);

CREATE TABLE IF NOT EXISTS categorybeer(
        category_id INT AUTO_INCREMENT,
        nameCategory VARCHAR(30) NOT NULL,
        product_id INT NOT NULL,
        CONSTRAINT pkCategory PRIMARY KEY(category_id)     
);

ALTER TABLE brewersfrench ADD CONSTRAINT fkDepartbrewer FOREIGN key (departement_id) REFERENCES departement(departement_id)
ALTER table categorybeer
ADD CONSTRAINT fkCategorybeer foreign key (product_id) references productbeer (product_id);

CREATE TABLE IF NOT EXISTS productbeer(
        product_id INT AUTO_INCREMENT,
        nameBeer VARCHAR(30) NOT NULL,
        alcoolBeer VARCHAR(10) NOT NULL,
        content VARCHAR(255) NOT NULL,
        categoryBeer VARCHAR(30) NOT NULL,
        brewer_id INT NOT NULL,
        CONSTRAINT pkProduct PRIMARY KEY(product_id)
        
);
ALTER table productbeer
ADD CONSTRAINT fkProductbrewer foreign key (brewer_id) references  brewersfrench(brewer_id);

CREATE TABLE role(
      role_id INT,
      name VARCHAR(10) NOT NULL,
      CONSTRAINT pkRole PRIMARY KEY(role_id)
);

CREATE TABLE IF NOT EXISTS users(
      user_id INT AUTO_INCREMENT,
      firstname VARCHAR(50) NOT NULL,
      lastname VARCHAR(50) NOT NULL,
      email VARCHAR(50)  UNIQUE NOT NULL,
      age INT CHECK (age>=18),
      password VARCHAR(50) NOT NULL,
      role_id int,
      foreign key (role_id) references  role(role_id),
      CONSTRAINT pkUser PRIMARY KEY(user_id)
);


-- CREATE TABLE user_role(
--       user_id INT NOT NULL,
--       role_id INT NOT NULL,
--       grant_date TIMESTAMP,
--       PRIMARY KEY (user_id, role_id)
-- );

CREATE TABLE IF NOT EXISTS feedback(
      feed_id INT AUTO_INCREMENT,
      nameUser VARCHAR(10) NOT NULL,
      content VARCHAR(10) NOT NULL,
      user_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      CONSTRAINT pkFeed PRIMARY KEY(feed_id)
 ); 
ALTER table feedback
ADD CONSTRAINT fkUserfeed foreign key (user_id) references users(user_id);
 
 

CREATE TABLE IF NOT EXISTS actubeer(
        actu_id INT AUTO_INCREMENT,
        actuTitle VARCHAR(50) NOT NULL,
        actuContent VARCHAR(255) NOT NULL,
        author VARCHAR(20) NOT NULL,
        image VARCHAR(255) NOT NULL,
        Date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT pkActu PRIMARY KEY(actu_id)
);

CREATE TABLE IF NOT EXISTS `villes_france_free` (
  `ville_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ville_departement` varchar(3) DEFAULT NULL,
  `ville_slug` varchar(255) DEFAULT NULL,
  `ville_nom` varchar(45) DEFAULT NULL,
  `ville_nom_simple` varchar(45) DEFAULT NULL,
  `ville_nom_reel` varchar(45) DEFAULT NULL,
  `ville_nom_soundex` varchar(20) DEFAULT NULL,
  `ville_nom_metaphone` varchar(22) DEFAULT NULL,
  `ville_code_postal` varchar(255) DEFAULT NULL,
  `ville_commune` varchar(3) DEFAULT NULL,
  `ville_code_commune` varchar(5) NOT NULL,
  `ville_arrondissement` smallint(3) unsigned DEFAULT NULL,
  `ville_canton` varchar(4) DEFAULT NULL,
  `ville_amdi` smallint(5) unsigned DEFAULT NULL,
  `ville_population_2010` mediumint(11) unsigned DEFAULT NULL,
  `ville_population_1999` mediumint(11) unsigned DEFAULT NULL,
  `ville_population_2012` mediumint(10) unsigned DEFAULT NULL COMMENT 'approximatif',
  `ville_densite_2010` int(11) DEFAULT NULL,
  `ville_surface` float DEFAULT NULL,
  `ville_longitude_deg` float DEFAULT NULL,
  `ville_latitude_deg` float DEFAULT NULL,
  `ville_longitude_grd` varchar(9) DEFAULT NULL,
  `ville_latitude_grd` varchar(8) DEFAULT NULL,
  `ville_longitude_dms` varchar(9) DEFAULT NULL,
  `ville_latitude_dms` varchar(8) DEFAULT NULL,
  `ville_zmin` mediumint(4) DEFAULT NULL,
  `ville_zmax` mediumint(4) DEFAULT NULL,
  PRIMARY KEY (`ville_id`),
  UNIQUE KEY `ville_code_commune_2` (`ville_code_commune`),
  UNIQUE KEY `ville_slug` (`ville_slug`),
  KEY `ville_departement` (`ville_departement`),
  KEY `ville_nom` (`ville_nom`),
  KEY `ville_nom_reel` (`ville_nom_reel`),
  KEY `ville_code_commune` (`ville_code_commune`),
  KEY `ville_code_postal` (`ville_code_postal`),
  KEY `ville_longitude_latitude_deg` (`ville_longitude_deg`,`ville_latitude_deg`),
  KEY `ville_nom_soundex` (`ville_nom_soundex`),
  KEY `ville_nom_metaphone` (`ville_nom_metaphone`),
  KEY `ville_population_2010` (`ville_population_2010`),
  KEY `ville_nom_simple` (`ville_nom_simple`)
) ENGINE=innoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=36831 ;

CREATE TABLE IF NOT EXISTS `departement` (
  `departement_id` int(11) NOT NULL AUTO_INCREMENT,
  `departement_code` varchar(3) CHARACTER SET utf8 DEFAULT NULL,
  `departement_nom` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `departement_nom_uppercase` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `departement_slug` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `departement_nom_soundex` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`departement_id`),
  KEY `departement_slug` (`departement_slug`),
  KEY `departement_code` (`departement_code`),
  KEY `departement_nom_soundex` (`departement_nom_soundex`)
) ENGINE=innoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=102 ;

const listbrewer = await queryAsync("SELECT brewer_id, nameBrass, address FROM brewersfrench WHERE nameCp LIKE '85%'")

SELECT nameBrass, departement_nom_uppercase FROM `brewersfrench`INNER JOIN departement ON departement_code = nameCode



