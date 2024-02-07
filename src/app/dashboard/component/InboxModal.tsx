// import React from 'react'
// import { HiOutlineX } from 'react-icons/hi'
// import Image from 'next/image'

// interface InboxModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const InboxModal: React.FC<InboxModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <>
//       <div
//         style={{

//           width: '437px',
//           position: 'absolute',
//           top: '55px',
//           right: '0%',
//           background: '#fff',
//           padding: '20px',
//           boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//           zIndex: '999',
//           borderRadius: '10px',
//           // position: "absolute",
//           // top: "55px",
//           // right: "0%",
//           // background: "#fff",
//           // padding: "20px",
//           // boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//           // zIndex: "999",

//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "10px",
//           }}
//         >

//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <h2 className=' text-lightBlue text-lg ' >Inbox</h2>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <h2 style={{ margin: 0, marginRight: "10px" }}>Inbox</h2>
//           </div>
//           <HiOutlineX
//             size={20}
//             onClick={onClose}
//             style={{ cursor: "pointer" }}
//           />
//         </div>
//         <div>
//           <div className=' flex justify-between items-start mb-6'>
//             <Image
//               src='/images/Bitmap.svg'
//               alt='Description of the image'
//               width={45}
//               height={45}
//               className=' mr-4'
//             />
//             <div>
//               <h2 className=' text-lightBlue text-lg font-medium mb-1'>
//                 GeekOps
//               </h2>

//               <p className=' text-sm font-medium '>
//                 There has been a change in your project. Head over to your
//                 active projects to view.
//               </p>
//               <button className=' text-sm bg-lightYellow p-2 rounded-full mt-2 font-medium py-2 px-3'>
//                 Acknowledge
//               </button>
//             </div>
//             <p className=' text-lightBlue text-sm font-medium'>8:00AM</p>
//           </div>
//           <div className=' flex justify-between items-start mb-6'>
//             <Image
//               src='/images/Bitmap.svg'
//               alt='Description of the image'
//               width={45}
//               height={45}
//               className=' mr-4'
//             />
//             <div>
//               <h2 className=' text-lightBlue text-lg font-medium mb-1'>
//                 GeekOps
//               </h2>

//               <p className=' text-sm font-medium '>
//                 Your email has been successfully changed.
//               </p>
//               <button className=' text-sm bg-lightYellow p-2 rounded-full mt-2 font-medium py-2 px-3'>
//                 Acknowledge
//               </button>
//             </div>
//             <p className=' text-lightBlue text-sm font-medium'>7:00PM</p>
//           </div>

//           <div className=' flex justify-between items-start '>
//             <Image
//               src='/images/Bitmap.svg'
//               alt='Description of the image'
//               width={45}
//               height={45}
//               className=' mr-4'
//             />
//             <div>
//               <h2 className=' text-lightBlue text-lg font-medium mb-1'>
//                 GeekOps
//               </h2>

//               <p className=' text-sm font-medium '>
//                 There has been a change in your project. Head over to your
//                 active projects to view.
//               </p>
//               <button className=' text-sm bg-lightYellow py-2 px-3 rounded-full mt-2 font-medium'>
//                 Acknowledge
//               </button>
//             </div>
//             <p className=' text-lightBlue text-sm font-medium'>8:00AM</p>
//           </div>
//           <p> Nerd message</p>
//           <p> Nerd message</p>
//           <p> Nerd message</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InboxModal;

import React from 'react'
import { HiOutlineX } from 'react-icons/hi'
import Image from 'next/image'
interface InboxModalProps {
  isOpen: boolean
  onClose: () => void
}

const InboxModal: React.FC<InboxModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        style={{
          width: '437px',
          position: 'absolute',
          top: '55px',
          right: '0%',
          background: '#fff',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          zIndex: '999',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ margin: 0, marginRight: '10px' }}>Inbox</h2>
          </div>
          <HiOutlineX
            size={20}
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div>
          <div className='flex items-start mb-6'>
            <Image
              src='/images/Avatar.png'
              alt='Description of the image'
              width={45}
              height={45}
              className='mr-4'
            />
            <div className='flex flex-col justify-between'>
              <span className='flex justify-between items-start mb-1'>
                <h2 className='text-lightBlue text-lg font-medium'>GeekOps</h2>
              </span>
              <p className='text-sm font-medium'>
                There has been a change in your project. Head over to your
                active projects to view.
              </p>
              {/* <button className='text-sm bg-lightYellow p-2 rounded-full mt-2 font-medium py-2 px-3 inline-flex'>
                Acknowledge
              </button> */}
              <button className='text-sm mt-2 font-medium inline-flex'>
                <span className='text-darkBlue bg-lightYellow p-2 rounded-full'>
                  Acknowledge
                </span>
              </button>
            </div>
            <p className='text-lightBlue text-sm font-medium'>8:00AM</p>
          </div>
          {/*  */}
          <div className='flex items-start mb-6'>
            <Image
              src='/images/Avatar.png'
              alt='Description of the image'
              width={45}
              height={45}
              className='mr-4'
            />
            <div className='flex flex-col justify-between'>
              <span className='flex justify-between items-start mb-1'>
                <h2 className='text-lightBlue text-lg font-medium'>GeekOps</h2>
              </span>
              <p className='text-sm font-medium'>
                Your email has been successfully changed.
              </p>
              <button className='text-sm mt-2 font-medium inline-flex'>
                <span className='text-darkBlue bg-lightYellow p-2 rounded-full'>
                  Acknowledge
                </span>
              </button>
            </div>
            <p className='text-lightBlue text-sm font-medium'>7:00PM</p>
          </div>
          {/*  */}
          <div className='flex items-start mb-6'>
            <Image
              src='/images/Avatar.png'
              alt='Description of the image'
              width={45}
              height={45}
              className='mr-4'
            />
            <div className='flex flex-col justify-between'>
              <span className='flex justify-between items-start mb-1'>
                <h2 className='text-lightBlue text-lg font-medium'>GeekOps</h2>
              </span>
              <p className='text-sm font-medium'>
                There has been a change in your project. Head over to your
                active projects to view.
              </p>
              <button className='text-sm mt-2 font-medium inline-flex'>
                <span className='text-darkBlue bg-lightYellow p-2 rounded-full'>
                  Acknowledge
                </span>
              </button>
            </div>
            <p className='text-lightBlue text-sm font-medium'>8:00PM</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InboxModal
 