const mongoose = require("mongoose");

exports.connectDb = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/aprenant_db").then((cnx) => {
    console.log(`Database connected : ${cnx.connection.host}`);
  });
};
