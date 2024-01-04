// // pages/api/fetchData.js
// import { NextApiRequest, NextApiResponse } from 'next';
// import { options } from "../app/api/auth/[...nextauth]/options"
// import { getServerSession } from "next-auth/next"

// const session = await getServerSession(options)
// const token = session?.user?.accessToken

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // const { token } = req.cookies;

//     if (!token) {
//       throw new Error('No token provided.');
//     }

//     const res = await fetch('https://nerdbuds.onrender.com/api/v1//projects/userProjects', {
//       headers: {
//         Authorization: `Bearer ${token}`      
//       }
//     });

//     if (!res.ok) {
//       throw new Error('An error occurred while fetching the data.');
//     }

//     const data = await res.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }