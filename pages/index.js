import Link from "next/link"
import { useSession } from 'next-auth/react'


function Home(){
  const {data: session,status} = useSession()
  console.log(session)
  return (
    <div>
    {session && `welcome ${session.user.name}` }
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/blog">
             blog
          </Link>
        </li>
        <li>
          <Link href="/docs">
             docs
          </Link>
        </li>
        <li>
          <Link href="/about">
             about
          </Link>
        </li>
        <li>
          <Link href="/users">
             users
          </Link>
        </li>
        <li>
          <Link href="/locations">
             users locations
          </Link>
        </li>
        <li>
          <Link href="/news">
             News Articles
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
             Dashboard
          </Link>
        </li>
        <li>
          <Link href="/events">
             Events
          </Link>
        </li>
        <li>
          <Link href="/feedback">
             Feedback
          </Link>
        </li>
        <li>
          <Link href="/gallery">
             Gallery
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Home