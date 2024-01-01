import React from 'react'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { options } from '..//../../api/auth/[...nextauth]/options'
import CreateProject from './components/Create'

export default async function Create() {
  const session = await getServerSession(options)
  // console.log(session?.user.accessToken)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <div className=''>
      <CreateProject />
    </div>
  )
}
