import UserModel from '../models/userModel.js'

export const getUser = async (req, res) => {
    try {
        const User = await UserModel.find();
        res.status(200).json(User);
    } catch (err) {
        res.send(err);
    }
}

export const createUser = async (req, res) => {
    const { id, name, des } = req.body;
    const newUser = new UserModel({ id, name, des });
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserModel.findByIdAndRemove(id);
}