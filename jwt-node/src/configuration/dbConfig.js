const mongoose = require("mongoose");

// Connexion à MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/jwt-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Événement en cas de connexion réussie
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

// Événement en cas d'erreur de connexion
mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
