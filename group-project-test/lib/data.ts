//Geting Promise

//import types
import{Users} from './defenition';
import { sql } from '@vercel/postgres';

export async function fetchUsers() {
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching users data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<Users>`SELECT * FROM revenue`;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }