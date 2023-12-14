const express = require('express');
const usersRouter = express.Router();
const { TrainersServices } = require('../../services/trainers/index');
const trainerObjectService = new TrainersServices();

const getAll = async (req, res) => {
    const { name, isChampion } = req.query;
    const { id } = req.params;
    try {
        const data = await trainerObjectService.getData(id, name, isChampion);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'no hay datos' });
    }
};

const createNew = async (req, res) => {
    const newTrainer = req.body;
    try {
        const isRegisterOk = await trainerObjectService.createNew(newTrainer);
        const statusRegister = isRegisterOk ? 'sucess' : 'fail';
        res.status(201).json({ status: statusRegister, data: newTrainer });
    } catch (error) {
        res.status(404).json({ message: 'no hay datos' });
    }
};

const editOne = async (req, res) => {
    const { id } = req.query;
    try {
        const data = await trainerObjectService.editOne(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'no hay datos' });
    }
};

const deleteOne = async (req, res) => {
    const { id } = req.query;
    try {
        const data = await trainerObjectService.deleteOne(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'no hay datos' });
    }
};

module.exports = {
    getAll,
    createNew,
    editOne,
    deleteOne,
};