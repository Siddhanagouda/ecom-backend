const express = require("express");
const {
  verifyPayment,
  createOrder,
} = require("../controllers/orderController");
const { isAuth } = require("../middlewares/authMiddlewares");

const orderRoutes = express.Router();
orderRoutes.post("/create-razorpay-order", isAuth, createOrder);
orderRoutes.post("/verify-payment", isAuth, verifyPayment);

module.exports = orderRoutes;
