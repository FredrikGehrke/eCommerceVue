const http = require('http')
const port = process.env.port || 9999
const app = require('./app')
const mongodb = require('mongoose');

const serverUri = 'http://localhost:' + port
const mongoUri = 'mongodb+srv://Han:BytMig123@cluster0-evsh8.mongodb.net/webapidb?retryWrites=true&w=majority';

// Till Hans: "You will only be able to connect to your cluster from the following list of IP Addresses:"
// Tror jag måste lägga in din IP address för att du ska kunna få mitt API att fungera med min mongodb collection. Support hjälpte mig med detta.

http.createServer(app).listen(port, () => console.log('WEBSERVER: ' + serverUri))

mongodb.set("useCreateIndex", true)
.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 5000
})
.then(() => console.log("MONGODB: Running"))
.catch(err => console.log(err.reason));

