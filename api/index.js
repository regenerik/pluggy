const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios  = require("axios")
const {scraping} = require("./src/generalControllers.js")

// sync todos los modelos de una vez;


  
  conn.sync({ force: false }).then(() => {
    server.listen(3001, () => {
    console.log('%s listening at 3001')
    scraping()
    });
  });




