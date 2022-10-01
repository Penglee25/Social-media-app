import mongoose from "mongoose";

const chatsSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const chatsModel = mongoose.model("chats", chatsSchema);
export default chatsModel;
