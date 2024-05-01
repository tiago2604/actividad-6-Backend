const express = require('express');
const router = express.Router();


let items = [];

router.get('/', (req, res) => {
    res.json(items);
});


router.post('/', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name  
    };
    items.push(newItem);
    res.status(201).send(newItem);
});


router.put('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send('El item no fue encontrado.');
    }
    item.name = req.body.name;  
    res.send(item);
});

module.exports = router;
