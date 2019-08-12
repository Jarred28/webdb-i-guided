const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('id', 'title', 'contents')
    .from('posts')
   //db('posts') // returns a promise that resolves to all records from the posts
     .then().catch(eer => {
         res.status(500).json ({message: "error getting the posts from id" });

     });
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;