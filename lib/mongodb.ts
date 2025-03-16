import { MongoClient, Db } from "mongodb";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/login";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(MONGODB_URI, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db(); // Mặc định lấy database từ MONGODB_URI
}

export default clientPromise;
