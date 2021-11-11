const express = require("express");
const server = express();
const PORT = 8000;
const bodyParser = require('body-parser');
server.use(bodyParser.json());


const pg = require('knex')({
    client: 'pg',
    version: '14',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://admin:dev5@localhost:5432/festival_api'
  });

  server.get("/get", async(req, res) => {
    await pg.select().from('festival_api')
    .then(data => {
      res.send(data)
    })

  })

server.post("/post",async(req,res)=>{
    const {
        name: name,
        locatie: locatie,
        startdatum: startdatum,
        einddatum: einddatum,
        capaciteit: capaciteit,
        prijs: prijs
    } = req.body
    if(name,  locatie, startdatum,  einddatum, capaciteit, prijs){
  
          await pg('festival_api').insert({
            name: name,
            locatie: locatie,
            startdatum: startdatum,
            einddatum: einddatum,
            capaciteit: capaciteit,
            prijs: prijs
        })
          .then(data => {
            res.sendStatus(200);
          })
  
    }else{
      res.sendStatus(400);
    }
  });

  async function initialiseTables() {
    await pg.schema.hasTable('festival_api').then(async (exists) => {
      if (!exists) {
        await pg.schema
          .createTable('festival_api', (table) => {
            table.increments();
            table.string('name');
            table.string('locatie');
            table.string('startdatum');
            table.string('einddatum');
            table.string('capaciteit');
            table.integer('prijs');
            table.timestamps(true, true);
          })
          .then(async () => {
  
          });
      }else{
  
      }
    });
  }
  initialiseTables()

server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);

});
