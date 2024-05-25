import { body } from "express-validator";
import jwt from "jsonwebtoken";

export default (req, res, next) => {
   const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

   if (token) {
      try {
         const decoded = jwt.verify(token, "blavbla");
         req.userId = decoded._id;
         next();
      } catch (err) {
         console.log(err);
         return res.status(403).json({
            success: false,
            msg: "Неверный токен",
         });
      }
   } else {
      return res.status(403).json({
         success: false,
         msg: "Нет доступа",
      });
   }
};
