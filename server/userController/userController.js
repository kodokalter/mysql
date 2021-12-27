const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
  });

exports.view = (req, res)=>{
    pool.getConnection((err, conn)=>{
        if(err) throw err;
        console.log(conn.threadId)
        conn.query('SELECT * FROM wp LIMIT 5',(err, rows)=>{
            conn.release();
            if(!err){
                console.log(rows)
                res.render('home',{
                    layout: 'layout',
                    title : 'Home',
                    rows : rows
                })
            }
        })
     })
}