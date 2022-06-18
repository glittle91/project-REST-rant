const router = require('express').Router()
const places = require('..models/places.js')

// GET /places
app.get('/', (req, res) => {
    let places = [ ]
    res.render('places/index')
  })

    router.get('/new', (req, res) => {
    res.render('places/new')

    router.post('/', (req, res) => {
        console.log(req.body)
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        places.push(req.body)
        res.redirect('/places')
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
