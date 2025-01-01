import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect('mongodb+srv://manukrishna:Manu@2002@cluster0.v1qf4.mongodb.net/food')
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error("DB Connection Error: ", err));
};
