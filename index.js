import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  listUsers,
} from "./lib/database_user";

// Membuat pengguna baru
createUser({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 25,
});

// Mendapatkan data pengguna berdasarkan ID
getUser("document_id");

// Memperbarui data pengguna berdasarkan ID
updateUser("document_id", {
  name: "Jane Doe",
  age: 26,
});

// Menghapus pengguna berdasarkan ID
deleteUser("document_id");

// Mendapatkan daftar pengguna
listUsers(10, 0);
