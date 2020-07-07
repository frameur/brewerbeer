ALTER TABLE feedback ADD author varchar(50) NOT NULL;

ALTER table feedback
ADD CONSTRAINT fkFeedbackuser foreign key (user_id) references  users(user_id);

let query = "SELECT * FROM users INNER JOIN club ON user_id = club.id;"

<% if (age > 18) { %>>
    <p> valid!!!</p>
    <%} else { %>
    <p> Not Allowed </p>
    <% } %>