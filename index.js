const app = require('./app')

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api rols running on ${PORT}...`);
});

module.exports = app;