import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import UserModel from "../models/User.js";

export const register = async (req, res) => {
   try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
         return res.status(400).json(errors.array());
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(req.body.password, salt);

      const doc = new UserModel({
         phone: req.body.phone,
         password: passwordHash,
         fullname: req.body.fullName,
         avatarUrl: req.body.avatarUrl,
      });

      const user = await doc.save();

      const token = jwt.sign(
         {
            _id: user._id,
         },
         "blavbla",
         {
            expiresIn: "30d",
         }
      );

      const { password, ...userData } = user._doc;

      res.json({ ...userData, token, success: true });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         success: false,
         msg: "Не удалось зарегистрироваться",
      });
   }
};

export const login = async (req, res) => {
   try {
      const user = await UserModel.findOne({ phone: req.body.phone });

      if (!user) {
         return res.status(400).json({ msg: "Пользователь не найден" });
      }

      const isValidPass = await bcrypt.compare(
         req.body.password,
         user.password
      );

      if (!isValidPass) {
         res.status(400).json({ msg: "Неверный логин или пароль" });
      }

      const token = jwt.sign(
         {
            _id: user._id,
         },
         "blavbla",
         {
            expiresIn: "30d",
         }
      );

      const { password, ...userData } = user._doc;

      res.json({ ...userData, token, success: true });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         success: false,
         msg: "Не удалось авторизоваться",
      });
   }
};

export const getMe = async (req, res) => {
   try {
      const user = await UserModel.findById(req.userId);

      if (!user) {
         return res.status(404).json({
            success: false,
            msg: "Такого пользователя не существует",
         });
      }

      const { password, ...userData } = user._doc;

      res.json({ ...userData, success: true });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         success: false,
         msg: "Не получить данные",
      });
   }
};

export const updateProfile = async (req, res) => {
   try {
      const user = await UserModel.findByIdAndUpdate(req.userId, {
         fullname: req.body.fullName,
         phone: req.body.phone,
      });

      if (!user) {
         return res.status(404).json({
            success: false,
            msg: "Такого пользователя не существует",
         });
      }

      const { password, ...userData } = user._doc;

      res.json({ ...userData, success: true });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         success: false,
         msg: "Не получить данные",
      });
   }
};
