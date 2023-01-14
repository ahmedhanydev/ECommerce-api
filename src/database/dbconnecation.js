const mongoose = require("mongoose");

exports.dbConnection = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("DB connection established");
    })
    .catch((err) => {
      console.log(err);
    });
};
