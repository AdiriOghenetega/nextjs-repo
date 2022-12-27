function User({user}){
    return (
        <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.phone}</p>
            </div>
    )
}

export default User