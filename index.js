const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

const user = {
    name: "Adam",
    age: 26,
    occupation: "Web Developer",
    reasonForTravel: "See the world",
    places: [
        {
            place: "Barcelona, Spain",
            stay: "Spanish Hotel",
            leaveDate: new Date('02/10/2023'),
            returnDate: new Date('03/05/2023')
        },
        {
            place: "Cairo, Egypt",
            stay: "Random Hotel",
            leaveDate: new Date('05/10/2023'),
            returnDate: new Date('06/05/2023')
        }
    ]
}

app.get('/', (req, res) => {
    res.render('dashboard', { user });
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
})