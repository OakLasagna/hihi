const express = require('express');
const router = express.Router();
const database = require('../sql/database.js');
const fs = require('fs/promises');

//!Multer
const multer = require('multer'); //?npm install multer
const path = require('path');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join(__dirname, '../uploads'));
    },
    filename: (request, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); //?egyedi név: dátum - file eredeti neve
    }
});

const upload = multer({ storage });

//!Endpoints:
//?GET /api/test
router.get('/test', (request, response) => {
    response.status(200).json({
        message: 'Ez a végpont működik.'
    });
});

//?GET /api/testsql
router.get('/testsql', async (request, response) => {
    try {
        const selectall = await database.selectall();
        response.status(200).json({
            message: 'Ez a végpont működik.',
            results: selectall
        });
    } catch (error) {
        response.status(500).json({
            message: 'Ez a végpont nem működik.'
        });
    }
});

router.get('/selectCars', async (request, response) => {
    try {
        const selectall = await database.selectCars();
        response.status(200).json({
            message: 'Ez a végpont működik.',
            results: selectall
        });
    } catch (error) {
        response.status(500).json({
            message: 'Ez a végpont nem működik.'
        });
    }
});

router.get('/stats', async (request, response) => {
    try {
        const selectall = await database.selectCars();
        let markak = [];
        selectall.forEach((element) => {
            let found = false;
            let i = 0;

            while (i < markak.length && !found) {
                if (markak[i].brand == element.brand) {
                    markak[i].db++;
                    found = true;
                }
                i++;
            }

            if (!found) {
                markak.push({ brand: element.brand, db: 1 });
            }
        });
        response.status(200).json({
            message: 'Stats fetched successfully.',
            results: markak
        });
    } catch (error) {
        response.status(500).json({
            message: error.message
        });
    }
});

router.post('/uploadCar', upload.none(), async (request, response) => {
    try {
        let autok = request.body;
        await database.uploadCar(autok.brand, autok.model, autok.color, autok.year, autok.fuelType);
        response.status(200).json({
            message: 'Car added successfully.'
        });
    } catch (error) {
        response.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;
