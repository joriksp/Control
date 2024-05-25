import { body } from "express-validator";

export const loginValudation = [
   body("phone").isMobilePhone("ru-RU"),
   body("password").isLength({ min: 6 }),
];

export const registerValudation = [
   body("phone").isMobilePhone("ru-RU"),
   body("password").isLength({ min: 6 }),
   body("fullName").isLength({ min: 3 }),
   body("avatarUrl").optional().isURL(),
];

export const postCreateValudation = [
   body("name").isLength({ min: 3 }),
   body("task").isLength({ min: 10 }),
   body("executor").isLength({ min: 3 }),
   body("fileUrl").isURL(),
];
