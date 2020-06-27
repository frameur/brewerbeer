INSERT INTO users (firstname, lastname, email, age, password, created_on, last_login)
VALUES ('Ronaldo', 'roger', 'ronaldo@mail.com', 21, 123456, 20/06/2020, 15/06/2020);

INSERT INTO users (firstname, lastname, email, age, password, created_on, last_login)
VALUES ('boudard', 'marion', 'ketch@mail.com', 21, 123456, 20/06/2020, 15/06/2020);

SELECT * FROM users

ALTER TABLE users ADD author varchar(50) NOT NULL;