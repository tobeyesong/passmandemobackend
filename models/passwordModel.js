/** @format */
import mongoose from "mongoose";

const passwordSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    sitePassword: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Password = mongoose.model("Password", passwordSchema);

export default Password;
