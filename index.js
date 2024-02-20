import express from "express";

const app=express();
const port=3000;

app.use(express.urlencoded({ extended: true })) ;
app.use(express.static("public"));

var names=["milk", "pants"];

app.get("/",(req,res)=>{
    res.render("index.ejs",{names:names});
});

app.get('/connect', (req, res) => {
    res.render('connect.ejs');
  });
app.post("/product",(req,res)=>{
    var product=req.body.userInput;
    product=product.toLowerCase();
    console.log(product);
    const containsItem = names.includes(product);
    console.log(containsItem);
    if (containsItem == false){
res.render("index.ejs",{error: "This product does not exist in our database, we will need some additional information from you to process the scores."});
    }
});

app.post("/newProduct",(req,res)=>{
console.log(req.body.newData);
if (req.body.newData){
    res.render("newEntry.ejs");
}
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });