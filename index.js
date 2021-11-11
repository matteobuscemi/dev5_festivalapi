<<<<<<< Updated upstream
=======
const express = require("express");
const server = express();
const PORT = 8080;


server.get("/", (req, res)=> {
    const festival = { name: 'Rock Werchter',locatie: "Werchter", startdatum: "30/06/2022" ,einddatum: "3/07/2022" ,capaciteit: "90000" , prijs: "243 euro"};

    res.json(festival)


})


server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);

});
>>>>>>> Stashed changes
