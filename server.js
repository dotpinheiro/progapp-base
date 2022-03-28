require('dotenv/config');
const app = require('./app');

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000;

app.listen({ host, port }, () => {
    console.log(`Server running on ${host}:${port}`)
})
