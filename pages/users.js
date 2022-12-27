import User from "../components/user"

function Users({users}){
    return (
        <div>
         <h1>List of Users</h1>
         {process.env.NEXT_PUBLIC_DESCRIPTION}
         {users.map(user=>{
            return <User user={user} />
         })}
        </div>
    )
}

export default Users

export async function getStaticProps(){
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
console.log(username,password)
    const response =  await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return {
        props: {
            users : data
        }
    }
}