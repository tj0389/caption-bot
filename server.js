let express=require("express");
let app=express();
const port=process.env.PORT || 8000;

app.use(function(req,res,next){
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

app.use(express.static("static"));

app.get('/',(req,res)=>{

	res.sendFile(__dirname+'/index.html');
});

app.listen(port,() => {
    console.log(`Running on server at http://localhost:${port}/`);
})
