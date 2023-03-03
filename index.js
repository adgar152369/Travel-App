const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static('public'));
app.use('/js', express.static('js'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

const user = {
    name: "Adam",
    age: 26,
    occupation: "Web Developer",
    reasonForTravel: "n",
    places: [
        {
            country: "Spain",
            city: "Barcelona",
            img: "public/images/barcelona_spain.jpg",
            color: "#a23e48",
            id: 1
        },
        {
            country: "Egypt",
            city: "Cairo",
            img: "public/images/cairo_egypt.jpeg",
            color: "#f0c987",
            id: 2
        }
    ]
}

const featured = {
    featuredPlaces: [
        {
            country: "France",
            city: "Paris",
            description: 'the city of stank people',
            id: 1
        },
        {
            country: "United States",
            city: "New York City",
            description: 'the city of homeless people',
            id: 2
        },
        {
            country: "Iceland",
            city: "Vik",
            description: 'the city of no people',
            id: 3
        }
    ]
}

let userPlaces = user.places;
let featuredPlaces = featured.featuredPlaces;

app.get('/', (req, res) => {
    res.render('home', { user, userPlaces, featuredPlaces });
});

app.get('/places/index', (req, res) => {
    res.render('index', { userPlaces });
})

app.get('/places/new', (req, res) => {
    res.render('new');
});

app.get('/places/:id', (req, res) => {
    const { id } = req.params;
    // const placeId = userPlaces.find(p => p.id === parseInt(id));
    const featuredPlace = featuredPlaces.find(f => f.id === parseInt(id));
    // console.log(featuredPlace);
    res.render('place', { featuredPlace });
});

app.get('/places/index/:id', (req, res) => {
    const { id } = req.params;
    const userPlace = userPlaces.find(p => p.id === parseInt(id));
    console.log(userPlaces)
    res.render('my-place', { userPlace })
});

// app.get('/places/my-places/:id', (req, res) => {
//     const { id } = req.params;
//     const placeId = userPlaces.find(p => p.id === parseInt(id));
//     res.render('my-places', { placeId, userPlaces })
// }) 

app.post('/places/index', (req, res) => {
    const { country, city, img,color } = req.body;
    userPlaces.push({ country, city, img, color, id: Math.floor(Math.random() * 100) })
    res.redirect('/places/index');
});

app.delete('/places/:id', (req, res) => {
    const { id } = req.params;
    userPlaces = userPlaces.filter(p => p.id !== id);
    res.redirect('/places');
})





app.listen(3000, () => {
    console.log('listening on port 3000!');
})




