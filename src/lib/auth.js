
// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db("SunCart");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
//   emailAndPassword: { 
//     enabled: true, 
//   }, 
// });




import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("SunCart");

export const auth = betterAuth({
  // 🔥 IMPORTANT: fix 403 Invalid origin issue
  trustedOrigins: [
    "http://localhost:3000",
    "https://sun-cart4.vercel.app"
  ],

  // Database config
  database: mongodbAdapter(db, {
    client,
  }),

  // Email/password auth
  emailAndPassword: {
    enabled: true,
  },
});
