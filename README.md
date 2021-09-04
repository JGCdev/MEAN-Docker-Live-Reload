
#### Development Mode 

#### Angular app reload with built-in server, node app restarts on all code saving with nodemon

```docker-compose -f docker-compose-dev.yml up --build```

#### Production:

```docker-compose up --build```

### Run tests

*Make sure to execute it after building containers:

```docker-compose exec client npm run test```

