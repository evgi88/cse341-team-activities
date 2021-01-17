const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/form01', { 
        title: 'Prove 01 - Form', 
        path: '/prove01' // For pug, EJS 
        //activeTA03: true, // For HBS
        //contentCSS: true, // For HBS
    });
});

router.post('/',(req, res, next) => {
    res.render('pages/display01', { 
        title: 'Prove 01 - Display Data', 
        path: '/prove01', // For pug, EJS 
        name: req.body.name,
        hobby: req.body.hobby,
        catOrDog: req.body.catOrDog
        //activeTA03: true, // For HBS
        //contentCSS: true, // For HBS
    });
});

module.exports = router;