const router = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [ ]
    res.render('places/index')
  })

  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  
  let places = [{
    name: 'Burger-King',
    city: 'Washington',
    state: 'DC',
    cuisines: 'Burgers, American Food',
    pic: '/images/bacon-cheeseburger.jpg'
  }, {
      
    name: 'Outback-Steakhouse',
    city: 'Takoma Park',
    state: 'MD',
    cuisines: 'Steak, Burgers',
    pic: '/images/steak.jpg'
  }]
  
  res.render('places/index', { places })


module.exports = router
