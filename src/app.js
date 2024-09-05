import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: "http://localhost:9000",
  credentials: true,
};

const helmetOptions = {
  contentSecurityPolicy: false,
  xDownloadOptions: false,
};

app.use(cors(corsOptions));
app.use(helmet(helmetOptions));
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// import routers

import HealthCheckRouter from "./routes/healthcheck.routes.js"
import AuthRouter from "./routes/auth.routes.js"

app.use("/api/v1", HealthCheckRouter)
app.use("/api/v1/auth", AuthRouter)

// error handler
// app.use((_, res) => {
//     res.status(404).send("Page not found");
// });

export { app };
