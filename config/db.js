const mongoose = require("mongoose");

const connectDB = async () => {
   await mongoose.connect(
     "mongodb+srv://james:reactnodeapp@cluster0.3ucmj.mongodb.net/ReactNodeDB?retryWrites=true&w=majority",
     {
       useNewUrlParser: true,
       useCreateIndex: true,
       useUnifiedTopology: true,
       useFindAndModify: true,
     }
   );

   console.log("MongoDB connected successully")
}

module.exports = connectDB;