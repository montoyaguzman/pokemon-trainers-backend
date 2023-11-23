const app = require('../src/app')

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api trainers running on ${PORT}...`);
});

module.exports = app;