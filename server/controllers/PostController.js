import PostModel from "../models/Post.js";
import mongoose from "mongoose";

export const create = async (req, res) => {
   try {
      const doc = new PostModel({
         name: req.body.name,
         task: req.body.task,
         executor: new mongoose.Types.ObjectId(req.body.executor),
         file: req.body.file,
         owner: req.userId,
      });

      const post = await doc.save();

      res.status(200).json({
         success: true,
         post,
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         msg: "Не удалось создать сделку",
      });
   }
};

export const getById = async (req, res) => {
   try {
      const dealId = req.params.id;

      const deal = await PostModel.findById(dealId).populate("owner").exec();

      res.json({ success: true, deal });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         msg: "Не удалось получить сделку",
      });
   }
};

export const getAll = async (req, res) => {
   try {
      const deals = await PostModel.find({ owner: req.userId })
         .populate("executor")
         .exec();

      res.json({ success: true, deals });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         msg: "Не удалось получить сделки",
      });
   }
};

export const getApplications = async (req, res) => {
   try {
      const deals = await PostModel.find({ executor: req.userId.toString() })
         .populate("owner")
         .exec();

      res.json({ success: true, deals });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         msg: "Не удалось получить сделки",
      });
   }
};
