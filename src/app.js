const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
import { getUserFromToken } from "./middlewares/auth";


import path from 'path';
import {startDb} from './database/db'
import {SECRET_KEY, SITE_URL} from "./config/constants"
import {initRoutes} from './routes/routes'
import {User} from './models/User';
import { passportConfig } from './config/passport';
startDb();
app.set('views', path.join(__dirname, 'views')) // Redirect to the views directory inside the src directory
app.use(express.static(path.join(__dirname, '../public'))); // load local css and js files
app.set('view engine', 'ejs'); 
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false, 
    expires: new Date(Date.now() + (30 * 86400 * 1000))
}));

app.use(passport.initialize());
app.use(passport.session());
// passport.use("local", new LocalStrategy(User.authenticate()));
passportConfig(passport);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})


initRoutes(app);

const PORT = process.env.PORT

app.listen(PORT, process.env.IP, ()=>{
    console.log(`Listening on ${PORT}`)
})