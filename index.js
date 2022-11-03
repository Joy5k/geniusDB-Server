const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

require('dotenv').config()

app.use(cors());
app.use(express.json())
const products = ('/products.json');
const services = ('services.json');
const team = ('/team.json');
const service = ('/service.json');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ctmwtm0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/', (req, res) => {
    res.send('Server is Running');
})

app.get('/services', (req, res) => {
    res.send(services);
})



app.listen(port, () => {
    console.log(`Port Running on ${port}`);
})