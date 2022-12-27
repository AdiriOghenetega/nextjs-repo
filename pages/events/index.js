import {useState} from "react"
import {useRouter} from "next/router"

function Events({events}){
    const [cat,setCat]=useState('')
    const [display,setDisplay]=useState(events)
    const router = useRouter()

    const fetcher = async (n) =>{
        const response = await fetch(`http://localhost:4000/events?category=${n}`)
        const data = await response.json()
        setDisplay(data)
        console.log(data)
    }

    function handleChange(e){
        setCat(e.target.value)
        
    }

    function handleClick(){
        fetcher(cat)
        router.push(`/events?category=${cat}`,undefined,{shallow:true})
        console.log("fetched",cat)
    }

    return (
        <div>
        <label htmlFor="category">Category</label>
        <input type="text" placeholder="filter by category" onChange={handleChange}  />
        <button onClick={handleClick}>filter</button>
       <h1>Events</h1>
       {
        display.map(event =>{
            return <div key={event.id}>
                <h1>{event.name}</h1>
                <h3>{event.theme}</h3>
                <h3>{event.dresscode}</h3>
                <h3>{event.category}</h3>
            </div>
        })
       }
        </div>
    )
}
export default Events

export async function getServerSideProps(context){
const {query} = context
const {category} = query

const filter= category ? `category=${category}` : null

    const response = await fetch(`http://localhost:4000/events?${filter}`)
    const data = await response.json()

    return{
        props:{
            events : data
        }
    }
}