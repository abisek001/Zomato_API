const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const cookieSession = require('cookie-session');
const router = require('./Router/index');
const dotenv = require('dotenv');
const paymentRoutes = require('./Controllers/payment');
const passport = require('passport');
const passportSetup = require('./Controllers/passport');
const authRote = require('./Controllers/auth');

const hostname = "localhost";
const port = "5502";

app.use(cookieSession({ name:"Session", keys:["edureka"], makAge: 24*60*60*1000 }));

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   res.header('Access-Control-Allow-Credentials', 'true');
   next();
 });

const corsOptions = {
   origin: ['http://localhost:3000', "https://mern-app-zomato.onrender.com"],
   credentials: true,
   optionSuccessStatus:200
}
dotenv.config();
app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/',router);
app.use('/api/payment', paymentRoutes)
app.use('/auth', authRote);


const dbUrl = 'mongodb://127.0.0.1:27017/restaurant';

const atlesdbUrl = "mongodb+srv://abisek501:7TVG2K0IxHG0wTsE@cluster0.5rzfnfi.mongodb.net/Zomato_Clone?retryWrites=true&w=majority";
mongoose.connect(atlesdbUrl,{useNewUrlParser: true, useUnifiedTopology: true})
.then( res => {
   app.listen(port, hostname, () => {
      console.log(`Server is runnung on http://${hostname}:${port}`);
   });   
})
.catch(err =>console.log(err));

