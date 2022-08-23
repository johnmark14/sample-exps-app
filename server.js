const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

// Exps Middleware
app.use((req, res, next) => {
    next();
});

hbs.registerHelper('getCurrentYear', () => {
    return 'new Date '+new Date().getFullYear();
});
app.get('/', (req, res) => {
    res.render(
        'index.hbs', {
            'pageTitle': 'New Page Title'
        }
    );
});

app.get('/about', (req, res)=> {
    res.render('about.hbs', {
        'pageTitle': 'New Page Title'
    });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT);