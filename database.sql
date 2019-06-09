CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR(128),
	"description" VARCHAR(256),
	"likes" INTEGER
	);
	
SELECT * FROM "images";

INSERT INTO "images" ("url", "description", "likes")
VALUES 
('images/Italy.jpg', 'Photo of Cinque Terre in Italy.', 0),
('images/Finland.jpg', 'Photo of a building in Helsinki, Finland.', 0),
('images/Hungary.jpg', 'Photo of the castle view across the river.', 0 ),
('images/Iceland.jpg',  'Photo of the glaciers floating on the lagoon.', 0 ),
('images/Russia.jpg',  'Photo of Church of the Savior on Blood in Saint Petersburg.', 0 ),
('images/Singapore.jpg',  'Photo of the city view.', 0 ),
('images/Washington_DC.jpg',  'Photo of China Town in DC.',  0 ),
('images/Yellow_stone.jpg', 'Photo of the geyser in a mist morning.', 0 )