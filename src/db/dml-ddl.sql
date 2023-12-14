CREATE TABLE Regions (
	idRegion SERIAL PRIMARY KEY,
	name VARCHAR(40)
);

CREATE TABLE Trainers (
	idTrainer SERIAL PRIMARY KEY,
	name VARCHAR,
	age INT,
	idRegion INT,
	CONSTRAINT FK_trainers_regions FOREIGN KEY (idRegion)
		REFERENCES Trainers(idTrainer)
);

INSERT INTO Regions VALUES
	(DEFAULT, 'Kanto'),
	(DEFAULT, 'Johto'),
	(DEFAULT, 'Sinnoh'),
	(DEFAULT, 'Hoenn')
;

INSERT INTO Trainers VALUES
	(DEFAULT, 'Ash', 10, 1),
	(DEFAULT, 'Misty', 12, 1),
	(DEFAULT, 'May', 11, 4),
	(DEFAULT, 'Sawn', 11, 3)
;


SELECT Trainers.name, Trainers.age, Regions.name 
	FROM Trainers INNER JOIN Regions
	ON Trainers.idRegion = Regions.idRegion;
