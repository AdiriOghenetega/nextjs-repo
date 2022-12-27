import {comments} from "../../data"
import Head from "next/head"

function Details({detail}){
    return (
        <div>
        <Head>
    <title>hello world</title>
    <meta name="description" conntent="Contains examples of all nextjs core concepts" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </Head>
       <h1>Feedback Details</h1>
       <p>{detail.text}</p>
        </div>
    )
}

export default Details

export async function getStaticPaths(){
    return {
        paths:[
           { params:{
            feedbackID : "1"
            }}
        ]
        ,
        fallback: "blocking"
    }
}

export async function getStaticProps(context){
    const {params} = context
    const {feedbackID} = params
    

    const selectedComment= comments.find(comment=> comment.id === parseInt(feedbackID))

   //it is recommended not to call an internal api for re-rendering because it induces delay,instead access the data directly as shown above . But for external api, you can use the below code
    // const response = await fetch(`http://localhost:3000/api/feedback/${params.feedbackID}`)
    // const data = await response.json()
console.log(context)

    return {
        props:{
            detail: selectedComment
        }
    }
}