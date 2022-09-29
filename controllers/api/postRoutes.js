const router = require('express').Router();
const User = require('../../models/User.js');
const withAuth = require('../../utils/auth');
const bcrypt = require('bcrypt')

//Create User
router.post('/register', async (req, res) =>{
    // create user
    try {
        const user = await User.create({...req.body})
        res.json({data:user})
    }catch(err){
        res.json({status:'error',message: err.message})
    }
    
})

//LOGIN (AUTHENTICATE USER)
router.post('/login', async (req, res) =>{
    console.log(req.body)
    //Read name and password from req.body
    const email = req.body.email
    const password = req.body.password

    //find if name exists in db
   const user = await User.findOne(
        {
            where:{
                email
            }
        }
    )
    if (!user){
        res.json({status: 'error', message: 'Invalid Login'})
        return
    }
    if(await bcrypt.compare(password, user.password)){
        res.json({status: 'ok', message:`${user.name} is logged in!`})
    }else{
        res.json({status: 'error', message: 'Invalid Login'})
    }

})

module.exports = router
