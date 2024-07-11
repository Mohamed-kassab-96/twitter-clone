// import User from "../models/user.model.js";
// import genrateTokenAndSetCookie from "../lib/utils/generateToken.js";
// import bcrypt from 'bcryptjs'

// export const signup = async (req, res) => {
// 	try {
// 		// const { fullName, username, email, password } = req.body;
// 		const { newUserData } = req.body;

// 		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 		// if (!emailRegex.test(email)) {
// 		if (!emailRegex.test(newUserData.email)) {
// 			return res.status(400).json({ error: "Invalid email format" });
// 		}

// 		// const existingUser = await User.findOne({ username });
// 		const existingUser = await User.findOne( newUserData.username );
// 		if (existingUser) {
// 			return res.status(400).json({ error: "Username is already taken" });
// 		}

// 		// const existingEmail = await User.findOne({ email });
// 		const existingEmail = await User.findOne( newUserData.email );
// 		if (existingEmail) {
// 			return res.status(400).json({ error: "Email is already taken" });
// 		}

// 		// if (password.length < 6) {
// 		// 	return res.status(400).json({ error: "Password must be at least 6 characters long" });
// 		// }

// 		// Hash Password
// 		const salt = await bcrypt.genSalt(10);
// 		const hashedPassword = await bcrypt.hash(newUserData.password, salt);

// 		const newUser = new User({
// 			fullName: newUserData.fullName,
// 			username: newUserData.username,
// 			email: newUserData.email,
// 			password: hashedPassword,
// 		});

// 		if (newUser) {
// 			genrateTokenAndSetCookie(newUser._id, res);
// 			await newUser.save();

// 			res.type("application/json").setHeader("Content-Type", "application/json").status(201).json({
// 				_id: newUser._id,
// 				fullName: newUser.fullName,
// 				username: newUser.username,
// 				email: newUser.email,
// 				followers: newUser.followers,
// 				following: newUser.following,
// 				profileImg: newUser.profileImg,
// 				coverImg: newUser.coverImg,
// 			});
// 		} else {
// 			res.status(400).json({ error: "Invalid user data" });
// 		}
// 	} catch (error) {
// 		console.log("Error in signup controller", error.message);
// 		res.status(500).json({ error: "Internal Server Error" });
// 	}
// };

export const signup = async (req, res) => {
    res.json({
        data : "you hit the signup endpoint"
    });
};

export const login = async (req, res) => {
    res.json({
        data : "you hit the login endpoint"
    });
};

export const logout = async (req, res) => {
    res.json({
        data : "you hit the logout endpoint"
    });
};

