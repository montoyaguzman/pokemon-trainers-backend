const app = require('../src/app')

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api trainers running on ${PORT}... API`);
});

module.exports = app;