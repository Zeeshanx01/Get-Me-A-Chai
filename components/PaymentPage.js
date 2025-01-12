"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
// import { useSearchParams } from 'next/navigation'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Bounce } from 'react-toastify';
// import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {
  const { data: session } = useSession()

  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  // const searchParams = useSearchParams()
  // const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => {
  //   if (searchParams.get("paymentdone") == "true") {
  //     toast('Thanks for your donation!', {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Bounce,
  //     });
  //   }
  //   router.push(`/${username}`)

  // }, [])


  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }


  const pay = async (amount) => {
    // Get the order Id 
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      // "key": 121, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "PKR",
      "name": "Get Me A Chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }

    var rzp1 = new Razorpay(options);
    rzp1.open();
  }



  return (<>
    {/* {params.username} */}
    <div className='cover bg-slate-500 w-full relative'>
      {/* <img className='w-full object-cover ' src="patreon_banner_winter.gif" alt="" /> */}
      <img className='w-full object-cover h-[20vh]' src={currentUser.coverpic} alt="COVER PIC" />

      <div className="absolute bg-gray-5000 opacity-500 w-full -bottom-[11rem] max-sm:-bottom-[11rem] flex justify-center">

        <div className=' flex flex-col items-center bg-slate-7000 w-full'>
          {/* <img className='object-cover w-32 h-32 border-2 border-white rounded-lg' src='https://www.shutterstock.com/image-photo/kharkiv-ukraine-august-9-2023-600nw-2382844697.jpg' alt="" /> */}

          <img className='object-cover w-32 h-32 border-2 border-white rounded-lg' src={currentUser.profilepic} alt="Profile Pic" />

          <div className="profileInfo  flex flex-col items-center w-full">
            <div className='font-bold text-2xl my-3'>
              {/* @{session.user.name} */}
              @{username}
            </div>
            <div className='text-xs my-1'>
              Let's help {currentUser.name} get a chai!
            </div>
            <div className='text-xs opacity-60 my-1'>
              {/* 15,105 members  .  92 Posts  .  $16,700/release */}
              {payments.length} donations. {currentUser.name} is raising funds for chai.
            </div>
          </div>

        </div>

      </div>



    </div>


    <div className=' bg-blue-3000 opacity-250 w-full mt-[12rem] mb-10'>
      <div className=' flex max-sm:flex-col sm:w-[80%] gap-4 justify-center mx-auto max-sm:mx-4 text-slate-400'>

        {/* SUPPORTERS */}
        <div className="donated bg-slate-600 bg-opacity-40 rounded-lg p-10 max-sm:p-4 w-1/2 max-sm:w-full text-slate-200 ">

          <h2 className='text-2xl font-bold'>Supporters:</h2>

          <ul>



            {payments.length == 0 && <li className="text-center">No payments yet.</li>}
            {payments.map((p, i) => {
              return <div key={i} className='flex gap-2 items-center my-1'>
                <img className=' bg-slate-500 rounded-full p-[2px]' width={30} src="avatar.gif" alt="" />
                <li>{p.name} donated <span className='font-bold'>Rs {p.amount}</span> with a messege "{p.message}"</li>
              </div>
            })}


          </ul>
        </div>


        {/* MAKE A PAYMENT */}
        <div className="makePayment bg-slate-600 bg-opacity-40 rounded-lg p-10 max-sm:p-4  w-1/2 max-sm:w-full ">
          <h2 className='text-2xl font-bold'>Make a Payment:</h2>

          <div className="flex gap-2 flex-col my-2">

            <input onChange={handleChange} value={(paymentform.name)} name='name' type="text" placeholder='Enter Name' className='bg-slate-900 w-full p-3 rounded-lg my-1' />
            <input onChange={handleChange} value={(paymentform.message)} name='message' type="text" placeholder='Enter Message' className='bg-slate-900 w-full p-3 rounded-lg my-1' />
            <input onChange={handleChange} value={(paymentform.amount)} name='amount' type="text" placeholder='Enter Amount' className='bg-slate-900 w-full p-3 rounded-lg my-1' />


            {/* BUTTON */}
            <div className="w-fit">
              <button onClick={() => { pay(Number.parseInt(paymentform.amount) * 100) }} type="button" className="text-white bg-gradient-to-r from-purple-700 via-purple-6000 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-12 py-2 text-center me-222 mb-222">Pay</button>
            </div>

          </div>


          <div className="flex gap-2 mt-5">
            <button className='bg-slate-900 p-1 rounded-lg ' onClick={() => { pay(10) }}>Pay Rs 10</button>
            <button className='bg-slate-900 p-2 rounded-lg ' onClick={() => { pay(20) }}>Pay Rs 20</button>
            <button className='bg-slate-900 p-1 rounded-lg ' onClick={() => { pay(30) }}>Pay Rs 30</button>

          </div>

        </div>


      </div >
    </div >













    <Link href={'/'}> <button type="button" className="duration-300 text-slate-400 bg-slate-800 hover:bg-slate-400 hover:text-slate-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back to Home</button></Link>

  </>)
}

export default PaymentPage