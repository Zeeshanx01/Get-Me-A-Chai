import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'

// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectdb'

export const athoptions = NextAuth({
  providers: [
    // OAuth authentication providers...

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),


    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  
  callbacks: {




    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB()
        let currentUser = await User.findOne({ email: email });
        console.log(currentUser);  
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
          console.log('New user created:', newUser);
        } else {
          console.log('User already exists:', currentUser);
        }
      }
      return true;
    },



    async session({ session, user, token }) {
      
      const dbUser = await User.findOne({email: session.user.email})
      console.log(dbUser);

      if (dbUser) {
      session.user.name = dbUser.username
    } 
    else {
      console.warn('User not found in the database');
    }

    return session

    },



  }
  
})

export {athoptions as GET, athoptions as POST}
























// export async function GET(request) {}
 
// export async function HEAD(request) {}
 
// export async function POST(request) {}
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
// export async function OPTIONS(request) {}