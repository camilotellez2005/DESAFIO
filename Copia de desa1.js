const { randomFillSync, randomFill } = require('crypto');
const express = require('express')
const app = express();
const modul =require('./producto.js')
import {choice} from "random";



let cal = modul.mo


app.get('/',(req,res)=>{
  res.send({
    items: cal,
    cantidad: cal.length,
  });
});


app.get('/item-random',(req,res)=>{
  
  res.send({
    item: random.choice(cal)
  })
})



app.get('*',(req,res)=>{
  res.send('NO SE ENCONTRO!!!');
});




app.listen('9089',() =>{
    console.log('el servidor esta arriba');
})

