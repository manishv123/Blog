const database=require('mysql2');
const pool=database.createPool({
host:'localhost',
user:'root',
database:'logindb',
password:'login@123'
});
module.exports=pool.promise();
