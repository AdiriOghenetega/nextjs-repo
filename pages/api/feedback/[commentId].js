import {comments} from "../../../data"
import {nanoid} from "nanoid"

export default function handler(req,res){
    const {method,body,query}= req

    console.log(query)
    const {commentId} = req.query
       const selectedComment= comments.find(commentID=> commentID.id === parseInt(commentId))
    if(req){
        
        if(method === "GET"){
            res.status(200).json(selectedComment)
        }else if(method === "POST"){
            const newComment ={
                id: nanoid(),
                text: body
            }
            comments.push(newComment)
            res.status(201).json(newComment)
        }else if(method === "DELETE"){
           const commentIndex = comments.indexOf(selectedComment)
           comments.splice(commentIndex,1)

          res.status(200).json(selectedComment)
        }
    }else{
        res.status(200).json(selectedComment)
    }

} 