import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send('MERHABALAR DUNYA');
});

app.listen(port, ()=> {
    console.log(`Application runnin on port: ${port}`);
});