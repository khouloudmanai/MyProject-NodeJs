const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const app = express(); 
const createAdminAccount = require("./scripts/admin");
const PORT = process.env.PORT || 5002;



app.use(bodyParser.json());
app.use(cors()); 

createAdminAccount();
app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})
