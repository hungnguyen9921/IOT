const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01664464657',
    database: 'iot',
});
connection.connect((errors) => {
    if (errors) {
        console.log('connection database failed...' + errors.stack);
        return;
    } else {
        console.log('connection database sucessful...');
    }
})

module.exports = connection;