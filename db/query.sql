SELECT *
FROM movies
JOIN reviews ON movies.reviews = reviews.id;


SELECT reviews.id AS reviewsID, reviews.name , movies.name 
FROM reviews
JOIN movies ON movies.reviews = reviews.name;

