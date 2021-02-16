import connection from "./connection";

//CRUD e o nome que vc quiser dar para o seu abnco de dados
const QUERY_CREATE_DATABASE = "create database CRUD";

const QUERY_CREATE_TABLE =
  " create table users(id int primary key AUTO_INCREMENT , nome char(100), email char(100), telefone char(100))";

//  QUERY_SELECT_USER = "select * from users";

//  QueryInsert = `insert into user(nome, email, telefone) values(${nome}, ${email}, ${telefone})`;

//  QueryDelete = `delete from users where id = ${id}`;

//  QueryUpdate = `update users set nome='${nome}',
//     email = '${email}', telefone='${telefone}' where id = ${id}`;

connection.query(QUERY_CREATE_DATABASE);

connection.query("use teste");

connection.query(QUERY_CREATE_TABLE);
