require('dotenv').config();
const host = process.env.MONGODB_HOST;
const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;

const Uri = `mongodb://${user}:${password}@${host}`;
module.exports = Uri