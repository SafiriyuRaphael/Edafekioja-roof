// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Missing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-[#FF840E] px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-extrabold tracking-wider">404</h1>
        <p className="mt-4 text-xl font-medium">
          Oops! The page you're looking for doesn't exist.
        </p>
      </motion.div>

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/753/753345.png" // Replace with any preferred image
        alt="Lost"
        className="w-64 h-64 mt-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-white text-indigo-800 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Missing;
