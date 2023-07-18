const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const app = express();

app.use(express.static('public'))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{});
})



app.listen(process.env.PORT || 3000,(err)=>{
   if(err)
   console.log(Error,err);
   else
   console.log('Server running successfully');
})