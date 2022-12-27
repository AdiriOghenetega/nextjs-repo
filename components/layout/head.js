import Link from "next/link"
import { signIn, signOut,useSession } from "next-auth/react"
import Github from "next-auth/providers/github"

function Header() {
   const { data: session, status } = useSession()
 const loading = status === "loading"
    return (
        <div className="header-layout">
            <h1>Header Tag</h1>
            <u>
               {!session && !loading && <li>
                    <Link href="/api/auth/signin">
                        <div onClick={(e) => {
                            e.preventDefault()
                            signIn(Github)
                        }}>sign-in</div>
                    </Link>
                </li>}
                {session && <li>
                    <Link href="/api/auth/signout">
                        <div onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}>

                            sign-out
                        </div>
                    </Link>
                </li>}
                {session && <li>
                    <Link href="/dashboard">
                        <div>

                            dashboard
                        </div>
                    </Link>
                </li>}
                {session && <li>
                    <Link href="/blog">
                        <div>

                            blog
                        </div>
                    </Link>
                </li>}
            </u>
        </div>
    )
}

export default Header