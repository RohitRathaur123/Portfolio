// utils/cookies.js
import axios from "axios";
import { EcomAPI, CMSAPI} from "../config";
import toast from "react-hot-toast";

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export const setCookie = (name, value, maxAge, path = '/') => {
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}`;
};

// Add this function to src/utils/cookies.js
export const migrateGuestCart = async (userId) => {
  const guestCart = JSON.parse(getCookie("guestCart") || "[]");
  if (guestCart.length === 0) return;

  try {
    for (const productId of guestCart) {
      const payload = {
        id: 0,
        productId: productId,
        userId: parseInt(userId),
      };
      await axios.post(`${CMSAPI}/api/Website/add-to-cart`, payload, {
        headers: { "Content-Type": "application/json" },
      });
    }
    // Clear guest cart after successful migration
    setCookie("guestCart", JSON.stringify([]), 86400, "/");
  } catch (error) {
    console.error("Cart migration failed:", error);
    toast.error("Failed to migrate cart items");
  }
};