'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import PaymentPage from '@/components/PaymentPage'

const Username = ({ params }) => {
  const { data: session } = useSession()



  return (<>

    <PaymentPage username = {params.username} />
  </>)
}

export default Username
