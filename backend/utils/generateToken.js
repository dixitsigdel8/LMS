import jwt from 'jsonwebtoken';

export const generateToken = (res, user, message) => {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES || '1d',
    });

    res.cookie("token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",  // Secure cookie in production
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    return res.status(200).json({
        success: true,
        message,
        user
    });
};
