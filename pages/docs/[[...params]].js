import { useRouter } from "next/router"
import Link from "next/link"

function Docs({cakeType ="choco"}){

    const router = useRouter()

    const {params = []} = router.query

    const display = ()=>{
        if(params.length > 2){
            return <h1>docs for {params[0]} considering {params[1]} and {params[2]} as a factor</h1>
        }else if(params.length === 2){
            return <h1>docs for {params[0]} considering {params[1]} as a factor</h1>
        }else if(0 < params.length < 2){
            return <div>
            <h1>docs</h1>
            <ul>
        <li>
          <Link href="/docs/cakes/sugar">
            
             cakes
          
          </Link>
        </li>
        <li>
          <Link href="/docs/cakes/strawberry">
           
             strawberry
            
          </Link>
        </li>
        <li>
          <Link href={`/docs/cakes/${cakeType}`}>
           
             {cakeType}
            
          </Link>
        </li>
      </ul>
            </div>
        }
    }

    function handleClick(){
        router.push("/")
    }

    return (
        <div>
        <button onClick={handleClick}>Home</button>
         {display()}
        </div>
    )
}

export default Docs