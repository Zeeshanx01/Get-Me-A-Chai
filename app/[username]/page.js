// 'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
// import connectDB from '@/db/connectDB'
// import User from '@/models/User'


const Username = ({ params }) => {
  // const { data: session } = useSession()

  // // if username is not in database, show 404 page
  // const checkUsername = async () => {
  //   await connectDB()

  //   let u = await User.findOne({ username: params.username })
  //   if (!u) {
  //     return notFound()
  //   }

  // }
  // await checkUsername()

  return (<>

    <PaymentPage username={params.username} />
  </>)

}
export default Username

// dynamic meta data
export async function generateMetadata({ params }) {
  return {
    title: `${params.username} | Get Me A Chai`,

  }
}