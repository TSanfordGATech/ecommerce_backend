// Requires the express module 
const express = require('express');
// organize my routing files
const routes = require('./routes');
// import sequelize connection
const sequelize = require(./config.connection');

// Calls the express function and puts new express applications inside the app const. 
const app = express();
// Identify the port (pre provided so not changing.)
const PORT = process.env.PORT || 3001;

// tell the app to recognize the incoming request object as a JSON object.
app.use(express.json());
// Then, recognize that as strings or arrays (can use parse here as well)
app.use(express.urlencoded({ extended: true }));

// tells the app what routes to use
app.use(routes);

// sync sequelize models to the database, then turn on the server
// Add int he sequelize part first: 
sequelize.sync({ force:false }).then(() => {
// turn on the port 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})});
