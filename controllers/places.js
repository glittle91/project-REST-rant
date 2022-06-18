const router = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [ ]
    res.render('places/index')
  })
  
  let places = [{
    name: 'Burger King',
    city: 'Washington',
    state: 'DC',
    cuisines: 'Burgers, American Food',
    pic: 'https://bit.ly/39H4AB0'
  }, {
    name: 'Outback Steakhouse',
    city: 'Takoma Park',
    state: 'MD',
    cuisines: 'Steak, Burgers',
    pic: 'https://bit.ly/3OmPTSr'
  }]
  
  res.render('places/index', { places })


module.exports = router
