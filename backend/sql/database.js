const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'autok',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//!SQL Queries
async function selectall() {
    const query = 'SELECT * FROM exampletable;';
    const [rows] = await pool.execute(query);
    return rows;
}

async function selectCars() {
    const query = 'SELECT * FROM cars;';
    const [rows] = await pool.execute(query);
    return rows;
}

async function uploadCar(brand, model, color, year, fuelType) {
    const query = 'INSERT INTO cars (brand, model, color, year, fuelType) VALUES (?, ?, ?, ?, ?);';
    await pool.execute(query, [brand, model, color, year, fuelType]);
}
//!Export
module.exports = {
    selectall,
    selectCars,
    uploadCar
};
