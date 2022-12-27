import {useState} from "react"
import style from "../../styles/feedback.module.css"


function FeedBack(){

const [feedBackData,setFeedBackData]= useState([])
const [addedComment,setAddedComment] = useState('')
const [edited,setEdited]=useState("")

const loadFeedBack = async ()=>{
    const response = await fetch("/api/feedback")
    const data = await response.json()
setFeedBackData(data)
}

const addFeedBack=async ()=>{
    const response = await fetch("/api/feedback",{
        method: "POST",
        body: JSON.stringify({comment:addedComment})
        ,
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const data = await response.json()
    console.log(data)
    loadFeedBack()
}
const deleteFeedBack = async (commentID)=>{
    const response = await fetch(`/api/feedback/${commentID}`,{
        method: "DELETE"
    })
    const data = await response.json()
    console.log(data)
    loadFeedBack()
}


    return (
        <div class={style.main}>
       <h2>feedback</h2>
       <button onClick={loadFeedBack}>Load Feedback</button>
       <textarea placeholder="add comment" value={addedComment} onChange={(e)=> setAddedComment(e.target.value) } />
       <button onClick={addFeedBack}>Post</button>
       {feedBackData.map(feedback=>{
        return <div key={feedback.id}>
            <p>{feedback.id}{feedback.text}</p>
            <button onClick={()=>deleteFeedBack(feedback.id)}>delete comment</button>
        </div>
       })}
        </div>
    )
}

export default FeedBack