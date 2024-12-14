import { account } from "./appwrite.js";

// Fungsi untuk daftar pengguna
const registerUser = async (email, password, name) => {
  try {
    const response = await account.create("unique()", email, password, name);
    console.log("User registered:", response);
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
};

// Fungsi untuk login pengguna
const loginUser = async (email, password) => {
  try {
    const response = await account.createEmailSession(email, password);
    console.log("User logged in:", response);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};

// Contoh penggunaan
// registerUser('user@example.com', 'password123', 'User Name');
// loginUser('user@example.com', 'password123');
