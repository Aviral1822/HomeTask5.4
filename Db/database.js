const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5000,
    user: "postgres",
    password: "aviralepam",
    database: "Mydatabase2"
});

client.connect();

/*

    client.query(`INSERT INTO users(id,login,password,age,isdeleted)
    values(606,'Harshita Sachdeva','ValoAgent:Breach',20,false)`,
    (err, res) => {
        if (!err) {
            console.log(res);
        }
        client.end();
    });





client.query(`DELETE FROM users where id=605`,(err,res)=>{
    if(!err){
        console.log(res);
    }
    client.end();
});
*/

module.exports = {
    query: (text, params) => client.query(text, params)
};

