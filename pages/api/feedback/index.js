import {comments} from "../../../data"
import {nanoid} from "nanoid"

export default function handler(req,res){
    
    if(req){
        const {method,body,query}= req
        
        if(method === "GET"){
            res.status(200).json(comments)
        }else if(method === "POST"){
            const comment = body.comment
            const newComment ={
                id: Date.now(),
                text: comment
            }
            comments.push(newComment)
            res.status(200).json(newComment)
        }
    }else{
        res.status(200).json(comments)
    }
}