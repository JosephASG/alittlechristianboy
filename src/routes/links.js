const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

router.get('/add',(req, res) =>{
    res.send('links/add');
});

module.exports = router;