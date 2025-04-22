import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 daqiqa
  max: 30, // Har bir IP dan 1 daqiqada maksimal 30 ta request
  message: {
    success: false,
    message: "Too many requests! Please slow down 😤",
  },
});

export default limiter;
