import { useRouter } from "next/router"

function Review(){
    const router = useRouter()
const {id,reviewId}= router.query
    return (
      <div>
        <h1>review Page {reviewId} for blog {id} </h1>
      </div>
    )
  }
  export default Review