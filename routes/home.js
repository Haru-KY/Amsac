import mysql from 'mysql2';
import express from 'express';
const router = express.Router();

router.get( '/', function( req, res, next) {

    res.render( 'home', {title: "Home", error: null});

});

export default router;