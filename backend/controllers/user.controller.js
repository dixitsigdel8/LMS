import {User} from "../models/user.models.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { generateToken } from "../utils/generateToken.js";
export const register = async (req,res)=>{
    try {
        const {name,email, password} = req.body;
        
        //check if user already exist or not
        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({sucess:false,message:"User already exist"})
        }

        // if not create new user
        const user = new User({name, email, password});
        user.save()

        res.status(201).json({
            success:true,
            message:'User registered successfully'
        })
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", error:error.message})
        console.log(error)
    }
}

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        //check user exist or not
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({sucess:false, message:"Invalid email or password"});
        }
        //compare enter password with hashed password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({success:false, message:"Invalid email or password"})
        }

        generateToken(res,user,'Login successful!')

        

    } catch (error) {
        res.status(500).json({message:'Internal server Error',error:error.message})
        console.log(error)
        
    }
}