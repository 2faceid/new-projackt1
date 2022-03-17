const express = require ('express');
const router = express.Router();

//router.get('/greeting',(require,response) =>{
//    return response.status(200).json({
//        message : 'welcome to my node.js api'
//    })
//});
//module.exports = router;

let users =[];
//גם מקבלים וגם מחזרירים מידע
router.post('/register',(request,response) => {    
    // const email = request.body.email;
    // const passwors = request.body.password;
 
     const {email,password} = request.body;//דרך שונה להצגת המשתנים בתוך הגוף
     
     users.push({email:email, password:password});
 
     //מחזיר את מה שרשמנו בתוך הגוף(מחזיר את המידע)
     return response.status(200).json({
        // email: `welcome - ${email} your passwors is ${passwors}`
           message: users
        }); 
 });




module.exports = router; 
