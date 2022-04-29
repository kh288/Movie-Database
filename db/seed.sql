USE movie_db;
INSERT INTO movies  (movie_name,id)
VALUES ("Joker",1),
       ("50 Shades of Grey",2),
       ("IronMan",3),
       ("Avengers: End Game",4),
       ("Captain America",5),
       ("Dr.Strange",6),
       ("Fantastic Beast and Where to Find Them",7);


INSERT INTO reviews (review, movie_id)
VALUES ("Very good", 1),
       ("ehh", 3),
       ("would see again",5 ),
       ("My eyes!!", 2),
       ("there wasn't even any beast", 7),
       ("best film ever", 4),
       ("ehhhh", 1);
