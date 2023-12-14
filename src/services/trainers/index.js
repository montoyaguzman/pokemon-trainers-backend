const { trainers } = require('../../data/trainers');
const conn = require('../../db/connection');
class TrainersServices {

    constructor() {
        this.data = [];
        this.generateData();
    }

    generateData() {
        this.data = trainers;
    }

    async getData(id, name, isChampion) {

        try {
            const result = await conn.query('SELECT Trainers.name, Trainers.age, Regions.name AS region FROM Trainers INNER JOIN Regions ON Trainers.idRegion = Regions.idRegion');
            // console.log(result)
            // console.log(result.rows)
            return result.rows;
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } finally {
            // conn.close();
        }


        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(this.data);
        //     }, 1000);
        // });

        // const name = req.query.name || '';
        // const isChampion = req.query.isChampion === 'true' ? true : false

        // const isLikeName = ((trainer) => {
        //     return trainer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        // });

        // const hasWinnedTournaments = ((trainer) => {
        //     return trainer.winnedTournaments.length > 0;
        // });


        // let data = trainers.filter(isLikeName);

        // if (isChampion) {
        //     data = data.filter(hasWinnedTournaments);
        // }

        // res.json(data);
    }

    async createNew(newTrainer) {

        const { name, age, regionId } = newTrainer;

        try {
            const queryInsert = 'INSERT INTO Trainers(name, age, idRegion) VALUES ($1, $2, $3);' // RETURNING id
            const result = await conn.query(queryInsert, [name, age, regionId]);
            return true;
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } finally {
            // conn.close();
        }

    }

    editOne(id, newTrainer) {

    }

    deleteOne(id) {

    }

}

module.exports = { TrainersServices };