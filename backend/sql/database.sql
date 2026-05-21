-- 1. Tábla létrehozása (ha még nem létezik)
CREATE TABLE IF NOT EXISTS cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    color VARCHAR(30) NOT NULL,
    year INT NOT NULL,
    fuelType VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. A 30 tesztadat beszúrása
INSERT INTO cars (id, brand, model, color, year, fuelType) VALUES
(1, 'Ford', 'Focus', 'Fekete', 2022, 'Hibrid'),
(2, 'Volkswagen', 'Polo', 'Piros', 2010, 'Dízel'),
(3, 'Opel', 'Astra', 'Fekete', 2013, 'Benzin'),
(4, 'BMW', 'X5', 'Fekete', 2021, 'Elektromos'),
(5, 'BMW', '5 Series', 'Kék', 2020, 'Hibrid'),
(6, 'Volkswagen', 'Passat', 'Zöld', 2012, 'Elektromos'),
(7, 'Volkswagen', 'Polo', 'Zöld', 2016, 'Elektromos'),
(8, 'Ford', 'Focus', 'Fekete', 2017, 'Hibrid'),
(9, 'Toyota', 'Camry', 'Fehér', 2017, 'Hibrid'),
(10, 'Opel', 'Insignia', 'Piros', 2023, 'Hibrid'),
(11, 'BMW', 'X3', 'Szürke', 2021, 'Elektromos'),
(12, 'Ford', 'Fiesta', 'Kék', 2014, 'Elektromos'),
(13, 'Toyota', 'Camry', 'Zöld', 2022, 'Elektromos'),
(14, 'BMW', 'X5', 'Kék', 2010, 'Benzin'),
(15, 'BMW', 'X3', 'Szürke', 2011, 'Dízel'),
(16, 'Volkswagen', 'Tiguan', 'Fekete', 2022, 'Hibrid'),
(17, 'Toyota', 'Yaris', 'Kék', 2018, 'Benzin'),
(18, 'BMW', 'X3', 'Zöld', 2013, 'Dízel'),
(19, 'Volkswagen', 'Golf', 'Piros', 2020, 'Elektromos'),
(20, 'BMW', '5 Series', 'Piros', 2012, 'Benzin'),
(21, 'Toyota', 'Camry', 'Kék', 2022, 'Dízel'),
(22, 'Volkswagen', 'Tiguan', 'Fehér', 2020, 'Benzin'),
(23, 'Ford', 'Focus', 'Zöld', 2013, 'Dízel'),
(24, 'BMW', '5 Series', 'Piros', 2012, 'Hibrid'),
(25, 'Ford', 'Focus', 'Zöld', 2010, 'Dízel'),
(26, 'Opel', 'Corsa', 'Zöld', 2022, 'Benzin'),
(27, 'BMW', '5 Series', 'Szürke', 2014, 'Dízel'),
(28, 'Opel', 'Corsa', 'Fekete', 2020, 'Benzin'),
(29, 'Ford', 'Mondeo', 'Zöld', 2013, 'Dízel'),
(30, 'Opel', 'Corsa', 'Szürke', 2016, 'Benzin');