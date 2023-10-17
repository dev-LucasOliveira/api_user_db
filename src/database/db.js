const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Connecting to db");

    mongoose.connect(
        "mongodb+srv://corporate:MQoBCR7lqP2R11RT@cluster0.ml8jggc.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("\nMongoDB Atlas connected")).catch((err) => console.log("error", err));
}

module.exports = connectDatabase;