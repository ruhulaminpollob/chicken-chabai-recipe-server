const express = require("express");
const app = express();
const cors =require("cors")
const port = process.env.PORT || 5000;

const chef = require("./data/chef.json")
const recipes=require("./data/recipes.json")

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/chef/:chefId', (req, res) => {
    const chefId=req.params.chefId;
    const singleChef=chef.find(n => n._id == chefId)
    res.send(singleChef)
})
app.get('/recipes',(req, res)=>{
    res.send(recipes)
})
app.get('/recipes/:recipesId', (req, res) => {
    const recipesId=req.params.recipesId;
    const recipesData=recipes.find(n => n._id == recipesId)
    res.send(recipesData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})