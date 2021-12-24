# dev5_festivalapi
Een open source API met informatie over alle toekomstige belgische festivals.

# Gebruikbaarheid
Met behulp van deze API kan je devolgende gegevens over festivals terugvinden:
- naam (string)
- locatie (string)
- start datum (string)
- eind datum (string)
- max capaciteit (string)
- prijs ticket (integer)
- festival genre (string)

GET:

- /GET - Krijg alle festivals aanwezig in de API
- /GETGENRES - Krijg alle genres aanwezig in de API
- /ORDERBYPRICE - Krijg alle festivals aanwezig in de API gerangschikt van minst duur tot duurste


POST:

- /POST - Geef hierboven vermelde gegevens op en stuur deze naar de festival api waar ze opgeslagen worden
- /POSTGENRES - Geef een genre (string) op en stuur deze naar de genres api waar deze opgeslagen wordt

PUT:

- /UPDATE - Geef de id (int) van het festival op en wat je aan het object wilt veranderen, wordt realtime opgeslagen en doorgestuurd naar database
- /UPDATEGENRES - Geef de id (int) van het genre op en genre (string) naar wat je de originele genre wilt veranderen

DELETE:

- /DELETE - Geef de id (int) van het festival op en deze wordt automatisch uit de lijst verwijdert
- /DELETEGENRE - Geef de id (int) van de genre op en deze wordt automatisch verwijdert
- /DELETEALL - Verwijdert alle festivals uit de tabel
- /DELETEALLGENRES - Verwijdert alle genres uit de tabel
- /DELETEALLDUPLICATEGENRES - Geef de genre (string) op en deze zal dan alle gelijkaardige genres verwijderen.

# Gebruiksaanwijzingen
1. Clone de repository
2. Zorg ervoor dat in de juiste directory zit 'cd dev5_festivalapi'
3. "docker-compose up --build
5. Ga naar browser naar keuze en surf naar localhost:3000

# Resources
- http://knexjs.org/
- https://expressjs.com/
- https://jestjs.io/en/
- https://www.postgresql.org/

# Copyright
Open source festival API gemaakt door Matteo Buscemi (matteo.buscemi@student.ehb.be)
