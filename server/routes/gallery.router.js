const express = require('express');
const router = express.Router();
let galleryItems = require('../modules/gallery.data');
const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'photo-gallery',
    host: 'localhost',
    port: 5432
}

const pool = Pool(config);

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    pool.query(`
    SELECT * FROM "images" ORDER BY "id";
    `).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get route', error);
        }
    )
}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    pool.query(`
    UPDATE "images" SET "likes"= "likes" + 1 WHERE "id"=$1
    `, [galleryId]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with put route', error);
        }
    )
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
}); // END PUT Route



//POST Route
router.post('/', (req, res) => {
    const newItem = req.body;
    galleryItems.push(newItem);
    res.sendStatus(200);

})

//DELETE Route
router.delete('/delete/:id', (req, res) => {
    const idToDelete = req.params.id;
    //initialize the index value
    let index = 0;
    //loop through to get the index of the photo to be deleted
    galleryItems.forEach(photo => {
        if(photo.id ==  idToDelete) { //idToDelete is string, photo.id is number
            index = galleryItems.indexOf(photo);
        }
    })
    //delete the photo from the array
    galleryItems.splice(index, 1);
    res.sendStatus(200);
})


module.exports = router;