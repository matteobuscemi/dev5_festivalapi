const express = require("express");
const server = express();
const PORT = 8000;
server.use(express.json());


const pg = require('knex')({
    client: 'pg',
    version: '14',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://admin:dev5@localhost:5432/festival_api'
  });


  /**
  * endpoint that gets all the festivals from the API
  * @returns (object) festival with: name, location, starting date, end date, capacity and price
  */
  server.get("/GET", async(req, res) => {
    await pg.select().from('festival_api').then(data => {res.send(data)})
  })

  /**
  * endpoint that allows the user to get all the festivals from the API ordered by price ascending
  * @returns (object) festival with: name, location, starting date, end date, capacity and price, ascending by price
  */
server.get('/ORDERBYPRICE', async (req,res) => {
  await pg.select().from('festival_api').then(data => { res.send(data.sort((a,b) => a.prijs > b.prijs ? 1:-1)) })
})


  /**
  * endpoint that allows the user to create a festival and send to the API
  * @params name (string), locatie (string), startDatum (string), eindDatum (string), capaciteit (integer) and prijs (integer)
  */
server.post("/POST",async(req,res)=>{
    const { name, locatie, startdatum, einddatum, capaciteit,prijs } = req.body
    if(name,  locatie, startdatum,  einddatum, capaciteit, prijs){
          await pg('festival_api').insert({ name: name, locatie: locatie, startdatum: startdatum, einddatum: einddatum, capaciteit: capaciteit, prijs: prijs })
          .then(data => { res.sendStatus(200); })
    } else{ res.sendStatus(400); }
  });

  /**
  * endpoint that allows the user to update information from a festival in the API
  * @params id (integer), name (string), locatie (string), startDatum (string), eindDatum (string), capaciteit (integer) and prijs (integer)
  */
server.put('/UPDATE', async (req, res) => {
  const { id, name, locatie, startdatum, einddatum, capaciteit, prijs } = req.body
      await pg('festival_api')
      .where({id: id}).update({ name: name, locatie: locatie, startdatum: startdatum, einddatum: einddatum, capaciteit: capaciteit, prijs: prijs }).then(data => { res.sendStatus(200) })
});

  /**
  * endpoint that allows the user to delete a festival in the API
  * @params id (integer)
  */
  server.delete('/DELETE', async (req, res) => {

    const { id: id } = req.body
      if(id){
        await pg('festival_api').where('id', req.body.id).del()
        .then(() => { res.sendStatus(200) })
      }else{ res.sendStatus(400); }

})

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
          .then(async () => {});
      }else{}
    });
  }
  initialiseTables()





module.exports = server;