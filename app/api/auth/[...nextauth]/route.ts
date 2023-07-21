import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface User {
  id: number
  role: string
  companyId: number
  token: string
}

declare module 'next-auth' {
  interface Session {
    user: User
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

        const tokenRes = await fetch(
          process.env.API_URL + '/iso-14064/auth/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: 'admin@email.com',
              password: 'rup453rup4bj4',
            }),
          }
        )

        const accessTokenData = await tokenRes.json()
        const accessToken = accessTokenData?.data?.token

        const userRes = await fetch(
          process.env.API_URL + '/iso-14064/auth/jwt/user-info',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + accessToken,
            },
          }
        )

        const userData = await userRes.json()
        const user = userData?.data

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            ...user,
            token: accessToken,
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },
    async session({ session, token }) {
      session.user = token.user as User

      return session
    },
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
