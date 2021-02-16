import mysql from "mysql2";

const conMysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

conMysql.connect((err) => {
  if (err) {
    console.error("erro connecting" + err.stack);
    return;
  }
});

export default conMysql;
