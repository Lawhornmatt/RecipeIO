const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Book, Recipe, User} = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET


router.get('/', withAuth, async (req, res) => {
  try {
    let { count, rows } = await Recipe.findAndCountAll({});
    
    const randRecipe = Math.floor(Math.random() * count) + 1;
    const recipeData = await Recipe.findByPk(randRecipe);

    // Serialize data so the template can read it
    let recipe = recipeData.get({ plain: true });

    res.render('home', {
        recipe,
        logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err.message)
    res.status(500).json(err);
  }
});




//get and post of register

router.get('/register',withAuth, (req, res) => {

  try {
      //replace this with the correct handlebars path
      res.render('signup', {
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }

  //LIST OF THE COOKBOOKS


});

router.post('/register', async (req, res) =>{
  // create user
  try {
      const user = await User.create({...req.body})
      res.json({data:user})
  }catch(err){
      res.json({status:'error',message: err.message})
  }
  
});

router.get('/contact',withAuth, (req, res) => {

  try {
      //replace this with the correct handlebars path
      res.render('contact', {
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }

  //LIST OF THE COOKBOOKS


});


router.get('/about',withAuth, (req, res) => {

  try {
          //replace this with the correct handlebars path
          //       VVVVVVVVVVV
      res.render('TEMP_RECIPES', {
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }

  //about us information


});



router.get('/login', (req, res) => {
  console.log(req.session.logged_in);
  res.render('login');

//THIS NEEDS TO BE UNCOMMENTED IF REQ SESSION LOGGED IN IS WORKING

  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
   
  // }


});

//LOGIN (AUTHENTICATE USER)
router.post('/login', async (req, res) =>{
  try {
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
    res
      .status(400)
      .json({status: 'error', message: 'Invalid Login'})
      return
  }
  if(await bcrypt.compare(password, user.password)){

      const token = jwt.sign({
        id: user.id, 
        username: user.username
      }, JWT_SECRET)

      res.json({status: 'ok', message:`${user.first_name} is logged in!`, data: token})
  }else{
      res.json({status: 'error', message: 'Invalid Login'})
  }

  // saves user to the session
  req.session.save(() => {
    req.session.user_id = User.id;
    req.session.logged_in = true;
  });
} catch (err) {
  res.status(404).json(err);
}
});

router.post('/verify',(req,res) =>{
  
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;