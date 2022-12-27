import useSWR from "swr"
import style from "/styles/dashboard.module.scss"
import Header from "@/layout/head"
import { SessionProvider } from "next-auth/react"
import { getSession } from "next-auth/react"
import {useState,useEffect} from "react"
import { signIn } from "next-auth/react"

const fetcher = async()=>{
    const response = await fetch("http://localhost:4000/dashboard/")
    const data = await response.json()
    return data
}

function Dashboard(){
    const {data,isLoading} = useSWR("dashboard",fetcher)

    const [loading,setLoading]= useState(true)

useEffect(()=>{
    const securePage = async () =>{
        const session = await getSession()
        if(!session){
        signIn()
        }else{
            setLoading(false)
        }
    }
    securePage()
},[])

if(loading){
    return <h1>Loading...</h1>
}

 

    if(isLoading){
        return "loading"
    }
    if(isObjectEmpty(data)) return <p>there was an error fetching the data</p>
    
    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

if(!(isObjectEmpty(data))){
    return(
        <div className={style.main}>
            <h1 style={{color:"red"}}>DASHBOARD</h1>
            <h2>Posts - {data.posts}</h2>
            <h4>Likes - {data.likes}</h4>
            <h4>Comments - {data.comments}</h4>
            <h4>Shares - {data.shares}</h4>
        </div>
    )
}
}

Dashboard.getLayout = function myLayout(page,session){
    return<SessionProvider session={session}>
     <>
    <Header />
        {page}
    </>
    </SessionProvider>
}

export default Dashboard