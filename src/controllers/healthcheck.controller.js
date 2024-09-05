// const healthcheck = async (req, res) => {
//   try {
//     return res.status(200).json({ message: "Server is up and running" });
//   } catch (error) {
//     throw new Error(error);
//   }
// };

import { ApiError } from "../utils/ApiResponseHandler.js";
import { asyncHandler } from "../utils/AysncHandler.js";

const healthcheck = asyncHandler((req, res) => {
  try {
    return res.status(200).json({ message: "Server is up and running" });
  } catch (error) {
    throw new ApiError(500, error.message);
  }
})


export { healthcheck };
