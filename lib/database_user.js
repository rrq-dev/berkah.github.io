import { databases } from "./appwrite.js";
import dotenv from "dotenv";

// Variabel ID database dan koleksi
const databaseId = process.env.APPWRITE_DATABASE_ID;
const collectionId = process.env.APPWRITE_COLLECTION_USERS;

// Fungsi untuk membuat data pengguna baru
export const createUser = async (data) => {
  try {
    const response = await databases.createDocument(
      databaseId,
      collectionId,
      "unique()", // ID dokumen otomatis
      data
    );
    console.log("User created:", response);
    return response;
  } catch (error) {
    console.error("Failed to create user:", error.message);
  }
};

// Fungsi untuk membaca data pengguna berdasarkan ID
export const getUser = async (documentId) => {
  try {
    const response = await databases.getDocument(
      databaseId,
      collectionId,
      documentId
    );
    console.log("User retrieved:", response);
    return response;
  } catch (error) {
    console.error("Failed to retrieve user:", error.message);
  }
};

// Fungsi untuk memperbarui data pengguna berdasarkan ID
export const updateUser = async (documentId, data) => {
  try {
    const response = await databases.updateDocument(
      databaseId,
      collectionId,
      documentId,
      data
    );
    console.log("User updated:", response);
    return response;
  } catch (error) {
    console.error("Failed to update user:", error.message);
  }
};

// Fungsi untuk menghapus data pengguna berdasarkan ID
export const deleteUser = async (documentId) => {
  try {
    const response = await databases.deleteDocument(
      databaseId,
      collectionId,
      documentId
    );
    console.log("User deleted:", response);
    return response;
  } catch (error) {
    console.error("Failed to delete user:", error.message);
  }
};

// Fungsi untuk mengambil semua data pengguna (dengan pagination)
export const listUsers = async (limit = 10, offset = 0) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId, [
      // Opsional: tambahkan filter atau sort jika diperlukan
      `limit(${limit})`,
      `offset(${offset})`,
    ]);
    console.log("Users list:", response.documents);
    return response.documents;
  } catch (error) {
    console.error("Failed to list users:", error.message);
  }
};
