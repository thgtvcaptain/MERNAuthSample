import User from "../models/userModel";

export const loginUser = async (req, res) => {
    res.json({message: 'login user'});
}

export const signupUser = async (req, res) => {
    res.json({message: 'signup user'});
}