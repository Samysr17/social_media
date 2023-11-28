import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
// import {Signin} from "./controllers/Auth"
import authRoutes from "./routes/Auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import { verifytoken } from "./middleware/Auth.js"
import {createPost} from "./controllers/posts.js"

//middleware configs
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,'public/assets')));

//file storage

const storage=multer.diskStorage({
    destination:function(req,file,cb){//here response is the file
        cb(null,"public/assets");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload=multer({storage});//upload


app.post("/auth/signin",upload.single("picture"));//middleware,controller
app.post("/posts",verifytoken,upload.single("picture"),createPost);

//routes
app.use("/auth",authRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes);

const PORT=process.env.PORT || 8000;
mongoose.connect("mongodb+srv://testuser:test123@cluster0.6u46r0o.mongodb.net/?retryWrites=true&w=majority",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`server running on ${PORT} `));
}).catch((error)=>console.log(`${error} `));//db connection