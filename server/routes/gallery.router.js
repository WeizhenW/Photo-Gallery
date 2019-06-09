const express = require('express');
const router = express.Router();
let galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

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