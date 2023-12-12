const express = require('express');
const trainersRoutes = express.Router();

const {
    getAll,
    createNew,
    editOne,
    deleteOne,
} = require('../../controller/trainers');

trainersRoutes.get('/', getAll);

// trainersRoutes.get('/:id', getById);

trainersRoutes.post('/', createNew);

trainersRoutes.patch('/:id', editOne);

trainersRoutes.delete('/:id', deleteOne);

module.exports = { trainersRoutes };