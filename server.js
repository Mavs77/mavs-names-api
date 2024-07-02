const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
'luka doncic':{
    'age':25, 
    'birthName':'Luka Dončić ', 
    'birthLocation': 'Ljubljana, Slovenia', 
    'image': "./img/luka.avif"
},
'kyrie irving':{
    'age':32, 
    'birthName':'Kyrie Andrew Irving', 
    'birthLocation': 'Melbourne, Australia', 
    'image': "./img/kyrie.webp"
},
'klay thompson':{
    'age':34, 
    'birthName':'Klay Alexander Thompson ', 
    'birthLocation': 'Los Angeles, CA', 
    'image': "./img/klay.jpg"
}, 
'unknown':{
    'age':404, 
    'birthName':'unknown', 
    'birthLocation': 'unknown',
    'image': "./img/404.webp" 
}
}

//get is a method that comes with express. Structured like an event listener
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const playerName = req.params.name.toLowerCase();
    if(players[playerName]){
        res.json(players[playerName])
    } else {
        res.json(players['unknown'])
    }
    ; 
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})