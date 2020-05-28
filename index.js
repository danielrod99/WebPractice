var express=require('express');
var app=express();

app.use('/public',express.static(__dirname+'/public'));
app.use('/node',express.static(__dirname+'/node_modules'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000,function(){
    console.log('Listening from the server')
})