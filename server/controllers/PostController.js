import PostModel from "../models/Post.js";

export const create = async (req, res) => {
   try {
      const doc = new PostModel({
         name: req.body.name,
         task: req.body.task,
         executor: req.body.executor,
         file: req.body.file,
         owner: req.userId,
      });

      const post = await doc.save();

      res.json(post);
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

      const deal = PostModel.findById(dealId);
      console.log(deal);

      res.json(deal);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         msg: "Не удалось получить сделку",
      });
   }
};

export const getAll = async (req, res) => {
   try {
      const deals = await PostModel.find();

      res.json(deals);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         msg: "Не удалось получить сделки",
      });
   }
};
