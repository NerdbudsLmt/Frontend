import React, { useState } from 'react'
import Link from 'next/link'
import HeaderComponent from './Components/HeaderComponent'


export default function privacyPolicy() {
  return (
    <>
      <HeaderComponent />
      <section className=' flex justify-center mx-auto flex-col lg:w-[70%] w-90%  mb-28'>
        <h1 className=' text-[#F9D262] text-3xl text-left mb-4'>
          Privacy Policy for nerdbuds
        </h1>
        <p className='text-xl mb-4'>
          Nerdbuds Ltd, hereinafter referred to as &quot;Nerdbuds,&quot; is
          committed to ensuring the privacy and security of personal information
          collected from clients and users of our website. This Privacy Policy
          outlines how we collect, use, disclose, and protect your information.
        </p>
        <div>
          <h1 className='text-[#F9D262] text-3xl mb-2'>
            1. Information we collect
          </h1>
          <h3 className='text-xl mb-2 text-[#F9D262] '>
            1.1 Personal Information
          </h3>
          <p className='text-xl mb-4'>
            We may collect personal information, including but not limited to
            names, contact details, and payment information, provided
            voluntarily by clients during the engagement process.
          </p>
          <h3 className='text-xl mb-2 text-[#F9D262] '>
            1.1 Non-Personal Information
          </h3>
          <p className='text-xl mb-6'>
            We may collect non-personal information, such as browser type, IP
            address, and website usage data, to improve our services and user
            experience.
          </p>
        </div>
        <div>
          <h1 className='text-[#F9D262] text-3xl mb-2'>
            2. How We Use Your Information
          </h1>
          <h3 className='text-2xl mb-2 text-[#F9D262] '>
            2.1. Service Delivery
          </h3>
          <p className='text-xl mb-4'>
            We use personal information to provide the requested web development
            services, including communication, project updates, and invoicing.
          </p>
          <h3 className='text-2xl mb-2 text-[#F9D262] '>
            2.2. Website Analytics
          </h3>
          <p className='text-xl mb-4'>
            Non-personal information is used for website analytics and to
            improve our website&apos;s functionality and content.
          </p>
          <h3 className='text-2xl mb-2 text-[#F9D262] '>2.3. Marketing</h3>
          <p className='text-xl mb-6'>
            With explicit consent, we may use your contact information to send
            promotional and marketing materials related to our services.
          </p>
        </div>
        <div>
          <h1 className='text-[#F9D262] text-3xl mb-2'>
            3. Information Sharing
          </h1>
          <h3 className='text-xl mb-2 text-[#F9D262] '>
            3.1. Third-Party Service Providers
          </h3>
          <p className='text-xl mb-4'>
            We may share necessary information with third-party service
            providers to facilitate our services, such as payment processors.
          </p>
          <h3 className='text-xl mb-2 text-[#F9D262] '>
            3.2. Legal Compliance
          </h3>
          <p className='text-xl mb-6'>
            We may disclose personal information when required to comply with
            applicable laws, regulations, or legal processes.
          </p>
        </div>
        <div>
          <h1 className='text-[#F9D262] text-3xl mb-2'>4. Security</h1>
          <p className='text-xl mb-6'>
            We implement reasonable security measures to protect personal
            information from unauthorized access, disclosure, alteration, and
            destruction. However, no method of transmission over the internet or
            electronic storage is entirely secure.
          </p>
        </div>
        <div>
          <h1 className='text-[#F9D262] text-3xl mb-2'>5. Your Choices</h1>
          <p className='text-xl mb-6'>You have the right to:</p>

          <h3 className='text-xl mb-2 text-[#F9D262] '>
            5.1. Access, Correct, or Delete Your Information
          </h3>
          <p className='text-xl mb-4'>
            You may request access to your personal information, correct
            inaccuracies, or request deletion.
          </p>
          <h3 className='text-xl mb-2 text-[#F9D262] '>
            5.2. Opt-Out of Marketing Communications
          </h3>
          <p className='text-xl mb-6'>
            You can opt-out of receiving marketing communications at any time by
            following the provided opt-out instructions.
          </p>
        </div>
        <div>
          <h1 className='text-[#F9D262] text-3xl mb-2'>
            6. Changes to This Privacy Policy
          </h1>
          <p className='text-xl mb-6'>
            The Company may update this Privacy Policy periodically. We will
            notify users of any material changes by updating the Effective Date
            at the top of this document.
          </p>
        </div>
        <div>
          <h1 className='text-[#F9D262] text-3xl mb-2'>7. Contact Us</h1>
          <p className='text-xl mb-6'>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at nerdbudsltd@gmail.com
          </p>
          <p className='text-xl mb-6'>
            By using our website or engaging with our services, you acknowledge
            that you have read, understood, and agreed to the terms of this
            Privacy Policy.
          </p>
        </div>
      </section>
    </>
  )
}
