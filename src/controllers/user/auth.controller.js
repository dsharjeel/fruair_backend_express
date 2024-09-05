// register controller
// login controller
// logout controller
// forgotPassword controller
// resetPassword controller
// updatePassword controller
// protect controller
// restrictTo controller
// updateMe controller
// deleteMe controller
// getMe controller

import { ApiError } from "../../utils/ApiResponseHandler.js";
import { asyncHandler } from "../../utils/AysncHandler.js";
import { User } from "../../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if ((!firstName, !lastName, !email, !password)) {
      throw new ApiError(400, "Please provide all required fields");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).json({ success: "User created successfully", user });
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export { registerUser };
