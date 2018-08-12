const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const port = 3000;


const mongojs = require('mongojs')

const db = mongojs('clientKeeper' , ['clients'])

// Set path

app.use(express.static(path.join(__dirname  , 'public')))
app.use(bodyParser.json())

//Allow request From angular
app.use( (req , res , next) => {
    res.setHeader('Access-Control-Allow-Origin' , 'http://localhost:4200')

    res.setHeader( 'Access-Control-Allow-Methods' , 'GET,POST,PUT,DELETE,OPTIONS')

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type ,Accept , Z-Key');

    next()
})

app.get('/' , function(req , res){
    res.send('Please Use This Site')
})

app.get('/api/clients' , function(req , res ,  next){
    db.clients.find().sort({first_name:1} , function(err , clients){
        if(err){
            res.send(err)
        }
        res.json(clients)
    })

})
//Post Clients
app.post('/api/clients' , function(req,res, next){
    db.clients.insert(req.body , function(err , client){
        if(err){
            res.send(err)
        }
        res.json(client)
    })
})


//Update Client
app.put('/api/clients/:id' , function(req,res, next){
    const id = req.params.id;
        db.clients.findAndModify({query : {_id:mongojs.ObjectId(id)} , 
        update : {
            $set : {
                first_name: req.body.first_name,
                last: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone
            }} , 
            new : true    
    } , function(err ,client){
        res.json(client);
    })
})

//Delete Request
app.delete('/api/clients/:id' , function(req,res, next){
    const id = req.params.id;
    db.clients.remove({_id : mongojs.ObjectId(id)} , function(err , client){
        if(err){
            res.send(err)
        }
        res.json(client)
    })
})

app.listen(port , function(){
    console.log('Server Started on  ' + port);
})