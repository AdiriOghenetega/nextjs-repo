import {useRouter} from "next/router"

function AddressDetails({details}){
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading</h1>
    }
    return (
        <div>
        
             <p>{details.address.street}</p>
             <p>{details.address.city}</p>
             <p>{details.address.suite}</p>
           
        </div>
    )
}

export default AddressDetails

export async function getStaticPaths(){
    return {
        paths: [
           {
            params : {
                userId : "1"
            }
           }
        ],
        fallback : true
    }
}

export async function getStaticProps(context){

    const {params} = context

    console.log(context)

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await response.json()

    if(!data.id){
        return {
            notFound : true
        }
    }

    return {
        props:{
            details : data
        },
        revalidate : 1 ,
    }
}