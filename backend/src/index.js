const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//sem param, todas as aplicacoes front-end podem acessar o server
app.use(cors(
    //origin: 'http://meuapp.com' //origem que pode acessar
));

// request body will be automatically converted into json
app.use(express.json());
app.use(routes);


app.listen(3333);

