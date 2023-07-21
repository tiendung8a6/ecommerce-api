import exppress from "express";
import {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
  updateShippingAddresctrl,
  forgotPasswordCtrl,
  changePasswordCtrl,

} from "../controllers/usersCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const userRoutes = exppress.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddresctrl);
userRoutes.post("/forgotpassword", forgotPasswordCtrl);
userRoutes.post("/changepassword", isLoggedIn, changePasswordCtrl);

export default userRoutes;
