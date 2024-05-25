import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
   {
      fullname: {
         type: String,
         required: true,
      },
      phone: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      avatarUrl: String,
   },
   {
      timestamps: true,
   }
);

export default mongoose.model("User", UserSchema);
