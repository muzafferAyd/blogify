import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.get("/", (req, res) =>{
    res.send("Coding with me");
});

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://stockDB:Muzaffer123_@cluster0.wig2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is runnig on port: ${PORT}`);
    });
})
.catch((error)=>{
    console.error(error.message);
});