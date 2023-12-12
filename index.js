const { app } = require('./src/app')

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Api trainers is running on ${PORT}...`);
});