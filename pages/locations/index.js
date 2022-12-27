import Link from "next/link"

function Locations({addresses}){
   
    return (
        <div>
        <h1>User Locations</h1>
        {addresses.map(address =>{
            return <div key={address.id}>
            <Link href={`/locations/${address.id}`}>
            <p>{address.address.zipcode}</p>
          </Link>
            <hr/>
            </div>
        })}
        </div>

    )
}

export default Locations

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return {
        props:{
            addresses : data
        }
    }
}