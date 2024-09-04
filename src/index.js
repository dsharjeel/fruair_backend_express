import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/config.js";

dotenv.config({ path: "./.env" });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(9000, () => {
//   console.log(`Example app listening on port ${9000}`);
// });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error(`Express server error: ${error.message}`);
    });
    app.listen(process.env.PORT || 9000, () =>
      console.log(`Server running on port ${process.env.PORT || 9000}`)
    );
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  });
