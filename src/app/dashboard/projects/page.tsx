'use client'

import React from 'react'
import { useEffect } from 'react'
import { redirect } from "next/navigation"

export default function Project() {

  useEffect(() => {
    redirect('/dashboard/projects/create')
  
   
  }, [])
  
  return (
    <div>Projectjvyhfyi</div>
  )
}

// INITS

// import React from 'react'
// import { AppProps } from 'next/app'
// import Layout from '../components/Layout'
// import projectContext from './projectContext'
// import { ProjectProvider } from './projectContext' // import your ProjectProvider

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ProjectProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </ProjectProvider>
//   )
// }
// function MyApp({ Component, pageProps }) {
//   return (
//     <ProjectProvider>
//       <Component {...pageProps} />
//     </ProjectProvider>
//   )
// }

// export default MyApp
// pages/_app.tsx
// import { AppProps } from 'next/app';
// import { ReactNode } from 'react';
// import { SessionProvider } from 'next-auth/react';
// import { ChakraProvider } from '@chakra-ui/react';
// import { ProjectProvider } from './projectContext';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <ChakraProvider>
//         {/* Wrap your components with the ProjectProvider */}
//         <ProjectProvider>
//           <ComponentWrapper>
//             <Component {...pageProps} />
//           </ComponentWrapper>
//         </ProjectProvider>
//       </ChakraProvider>
//     </SessionProvider>
//   );
// }

// function ComponentWrapper({ children }: { children: ReactNode }) {
//   // You can add any global context or layout here
//   return <div>{children}</div>;
// }

// export default MyApp;

// without session id
// pages/_app.tsx
// import React from 'react';
// import { ProjectProvider } from '../contexts/ProjectContext';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ProjectProvider>
//       <Component {...pageProps} />
//     </ProjectProvider>
//   );
// }

// export default MyApp;

// pages/_app.tsx
// pages/_app.tsx
// import React from 'react';
// import { AppProps } from 'next/app';
// import { ProjectProvider } from './projectContext';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ProjectProvider>
//       <Component {...pageProps} />
//     </ProjectProvider>
//   );
// }

// export default MyApp;
