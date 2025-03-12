import express from "express";
import { createEmployee, deleteEmployee, loginEmployee ,updateEmployee} from "../Controlers/UserControllers.js";


const userRoute = express.Router();

userRoute.post("/",createEmployee);
userRoute.put("/:id",updateEmployee);
userRoute.post("/login",loginEmployee);
userRoute.delete("/:id",deleteEmployee);


export default userRoute;