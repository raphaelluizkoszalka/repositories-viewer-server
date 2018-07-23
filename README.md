# Node Js RESTFull microservice
https://immobilien-test.raphael.website/

Node JS microservice written with ExpressJS, Mongoose and MongoDB, to get GitHub API access_token and persisted users last repositories searches.

## endpoints
- /authenticate (to get GitHub API access_token avoiding CORS and to ommit the client_secret from the client)
- /repositiories?q={USERLOGIN} (to retrieve persisted searches made by GitHub users)

### how to clone and install dependencies

- install mongodb
- install nodejs
- install npm
- git clone https://github.com/raphaelkoszalka/repositories-viewer-server.git
- cd repositories-viewer-server
- npm install
- configure project .env

### how to run
- start mongodb
- cd repositories-viewer-server
- npm start

### further help
rmkoszalka@gmail.com
