import { getSession } from "next-auth/react";

const handler = async (req,res)=>{
    const session = await getSession({req:req})
    if(!session){
        res.status(403).json({error: "unauthenticated access request"})
    }else{
        res.status(200).json({message: "access granted",session})
    }
}

export default handler