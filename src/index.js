const app = require('./app')

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api trainers running on ${PORT}... src...`);
});

module.exports = app;