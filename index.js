const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

const user = {
    name: "Adam Garcia",
    age: 26,
    occupation: "Web Developer",
    reasonForTravel: "n",
    places: [
        {
            country: "Spain",
            city: "Barcelona",
            img: "public/images/barcelona_spain.jpg",
            id: uuid()
        },
        {
            country: "Egypt",
            city: "Cairo",
            img: "public/images/cairo_egypt.jpeg",
            id: uuid()
        }
    ]
}

let userPlaces = user.places;

app.get('/places', (req, res) => {
    res.render('dashboard', { user, userPlaces });
});

app.get('/places/new', (req, res) => {
    res.render('new');
});

app.get('/places/:id', (req, res) => {
    const { id } = req.params;
    const place = userPlaces.find(p => p.id == id);
    res.render('place', { place });
});

app.post('/places', (req, res) => {
    const { country, city, id } = req.body;
    userPlaces.push({country, city, id: uuid()})
    console.log(userPlaces);
    res.redirect('/places');
});

app.delete('/places/:id', (req, res) => {
    const { id } = req.params;
    userPlaces = userPlaces.filter(p => p.id !== id);
    console.log(userPlaces);
    res.redirect('/places');
})





app.listen(3000, () => {
    console.log('listening on port 3000!');
})