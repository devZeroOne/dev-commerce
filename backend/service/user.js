const User = require("../model/user");

const findUserWithPropertyService = (key, value) => {

    if (key === '_id') {
        return User.findById(value);
    }

    return User.findOne({ [key]: value });

}

const createUserService = async ({ name, email, password }) => {
    const user = new User({ name, email, password });
    return await user.save();
}



module.exports = {
    findUserWithPropertyService,
    createUserService
}