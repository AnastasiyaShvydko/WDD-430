//import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { users,items } from '../lib/placeholder-data';


// const client = await db.connect();


// async function seedUsers() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;
  
//     const insertedUsers = await Promise.all(
//       users.map(
//         (user) => client.sql`
//           INSERT INTO customers (id, name, email, image_url)
//           VALUES (${user.id}, ${user.name}, ${user.email}, ${user.image_url})
//           ON CONFLICT (id) DO NOTHING;
//         `,
//       ),
//     );
  
//     return insertedUsers;
//   }

//   export async function GET() {
//     // return Response.json({
//     //   message:
//     //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
//     // });
//     try {
//       await client.sql`BEGIN`;
//       await seedUsers();
//       await client.sql`COMMIT`;
  
//       return Response.json({ message: 'Database seeded successfully' });
//     } catch (error) {
//       await client.sql`ROLLBACK`;
//       return Response.json({ error }, { status: 500 });
//     }
//   }
  