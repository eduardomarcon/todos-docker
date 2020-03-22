const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, "A descrição é obrigatória"]
    },
    finished: { type: Boolean, required: [true, "O término é obrigatório"] }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = mongoose.model("todos", todoSchema);
