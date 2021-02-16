import { Router } from "express";

const route = Router();

import UserController from "./controller/UserController";

route.get("/users", UserController.index);
route.get("/users/:id", UserController.show);
route.post("/users", UserController.create);
route.put("/users/:id", UserController.update);
route.delete("/users/:id", UserController.delete);

export default route;
