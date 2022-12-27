import {useRouter} from "next/router"

function PostDetails({posts}){
  const router = useRouter()

  if(router.isFallback){
    return "loading"
  }
  return (
      <div>
          <h1>post detail</h1>
          {
           <p key={posts.id}>{posts.body}</p>
          }
      </div>
  )
}

export default PostDetails

export async function getStaticPaths(){

  // const response =  await fetch("https://jsonplaceholder.typicode.com/posts")
  // const data =  await response.json()

  // const paths = data.map(path=>{
  //   return {
  //       params : {id:`${path.id}`}
  //     }
    
  // })
  return {
    paths : [
      {
        params : {id: "1" }
      },
      {
        params : {id: "2" }
      },
      {
        params : {id: "3" }
      }
    ],
    fallback : true
  }
}

export async function getStaticProps(context){

  const {params} = context

  const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data =  await response.json()

if(!data.id){
  return {
    notFound : true
  }
}

  return {
    props:{
      posts : data
    }
  }
}