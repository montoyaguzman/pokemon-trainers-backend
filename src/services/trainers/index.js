const { trainers } = require('../../data/trainers');

class TrainersServices {

    constructor() {
        this.data = [];
        this.generateData();
    }

    generateData() {
        this.data = trainers;
    }

    getData(id, name, isChampion) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 1000);
        });
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

    createNew(newTrainer) {
    }

    editOne(id, newTrainer) {

    }

    deleteOne(id) {

    }

}

module.exports = { TrainersServices };