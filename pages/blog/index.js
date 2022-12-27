import Link from "next/link"
import { getSession } from "next-auth/react"

function Blog({sessionData}){
    return (
      <div>
        <h1>Blog Page</h1>
        {/* {
          posts.map(post=>{
            return <ul >
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>
            
            {post.title}
          
          </Link>
        </li>
      </ul>
          })
        } */}
        {sessionData}
        
      </div>
    )
  }
  export default Blog

  // export async function getStaticProps(){

  //   const response =  await fetch("https://jsonplaceholder.typicode.com/posts")
  //   const data =  await response.json()
  //   return {
  //     props:{
  //       posts : data.slice(0,3)
  //     }
  //   }
  // }
  export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
      return {
        redirect:{
          destination : `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
          permanent:false
        }
      }
    }

    return{
      props:{
        sessionData : session ? "personalized blog content":"public blog content"
      }
    }
  }