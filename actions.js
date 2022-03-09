const express = require ('express');
const router = express.Router();

router.get('/greeting',(require,response) =>{


    return response.status(200).json({
        message : 'welcome to my node.js api'
    })


});




module.exports = router;