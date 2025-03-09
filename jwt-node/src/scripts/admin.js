const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createAdminAccount(){

try {
    const existingAdmin = await User.findOne({ email: "admin@gmail.com"});
    if(!existingAdmin) {
        const newAdmin = new User({
            email: "admin@gmail.com",
            name: "Admin",
            password: await bcrypt.hash("adminadmin", 10),
            role: "admin"

        })
        await newAdmin.save();
        console.log("Admin account create successfuly");
    }else {
        console.log("Admin already exist");

    }
    }catch (error) {
        console.error(error.message);
    }
}
module.exports = createAdminAccount;