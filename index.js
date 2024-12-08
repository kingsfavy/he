import express from 'express';
import url from 'url';
//import sqlite3  from 'sqlite3';
//import Database from 'better-sqlite3';
import session from 'express-session';
import ejs from 'ejs';
//const QRCode = require('qrcode');
import http from 'http';
//const Busboy = require('busboy');
//const sha1 = require('sha1');
import path from 'path';
//import paypal from '@paypal/checkout-server-sdk';
import fs from 'fs';
import crypto from 'crypto';
//const { Scene, PerspectiveCamera, WebGLRenderer, PlaneGeometry, MeshBasicMaterial, TextureLoader, Mesh } = require('three');
import bodyParser from 'body-parser';
import passport from 'passport';
import LocalStrategy from 'passport-local';
const app = express();
// Set EJS as view engine
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

//sqlite3.verbose();

// Middleware for session management
app.use(session({
  secret: 'aQjK!#n3rP5v&mB^9H@LwDyUz$EXe8Gs', // Change this to a secure random key
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'index.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  	