import { Application } from "express";
import Routes from "../utils/constants/routes.json"
import UsersNetwork from "./users"


function routes (server: Application) {
    server.use(Routes.user, UsersNetwork)
}

export default routes;