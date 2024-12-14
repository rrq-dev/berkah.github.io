import { Client } from "appwrite";
import dotenv from "dotenv";

// Load variabel dari file .env
dotenv.config();

const client = new Client();

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // Endpoint dari .env
  .setProject(process.env.APPWRITE_PROJECT_ID); // Project ID dari .env

export default client;
