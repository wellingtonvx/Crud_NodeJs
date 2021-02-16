import connection from "../database/connection";

class UserController {
  index(req, res) {
    connection.query("select * from users", (err, row) => {
      if (!err) {
        return res.json(row);
      } else {
        return res.status(400).json({ error: "erro ao listar usuarios" });
      }
    });
  }

  show(req, res) {
    const id = req.params.id;

    connection.query(`select * from users where id = ${id}`, (err, results) => {
      if (!err) {
        return res.json(results);
      } else {
        return res.status(400).json({ error: "usuário inexistente", err });
      }
    });
  }

  create(req, res) {
    const { nome, email, telefone } = req.body;

    const QueryInsert = `INSERT INTO users(nome, email, telefone) VALUES('${nome}', '${email}', '${telefone}')`;

    connection.query(QueryInsert, (err, result) => {
      const id = result.insertId;
      if (!err) {
        return res.json({ id, nome, email, telefone });
      } else {
        return res.status(400).json({ error: "erro ao criar usuario", err });
      }
    });
  }

  update(req, res) {
    const id = req.params.id;

    if (!id) {
      return res.json({ error: "usuario inexistente" });
    }

    const { nome, email, telefone } = req.body;

    const QueryUpdate = `update users set nome='${nome}', 
    email = '${email}', telefone='${telefone}' where id = ${id}`;

    connection.query(QueryUpdate, (err) => {
      if (!err) {
        return res.json({ id, nome, email, telefone });
      } else {
        return res.status(400).json({ error: "erro ao criar usuario", err });
      }
    });
  }

  delete(req, res) {
    const id = req.params.id;

    if (!id) {
      return res.json({ error: "usuario inexistente" });
    }

    const QueryDelete = `delete from users where id = ${id}`;

    connection.query(QueryDelete, (err) => {
      if (!err) {
        return res.json({ messege: `usuário deletado com sucesso` });
      } else {
        return res.status(400).json({ error: "erro ao deletar usuario", err });
      }
    });
  }
}

export default new UserController();
