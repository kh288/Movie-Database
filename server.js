const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Routes
// post '/api/new-movie'
// get '/api/movies'
// get '/api/movie-reviews'
// put '/api/review/:id'
// delete '/api/movie/:id'

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
);

app.get('/api/new-movie', (req, res) => {
    res.json('New Movies section');
    db.query(`SELECT * FROM movies`, 3, (error, result => {
        error ? console.log(error) : console.log("affectedRows: ", result.affectedRows);
    }));
});

app.post('/api/new-movie', (req, res) => {
    res.json('Adding New Movie')
});

app.get('/api/movie-reviews', (req, res) => {
    res.json('Viewing Movie Reviews')
});

app.put('/api/review/:id', (req, res) => {
    res.json('removes a review?')
});

app.delete('/api/movie/:id', (req, res) => {
    res.json('Removes a movie')
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});