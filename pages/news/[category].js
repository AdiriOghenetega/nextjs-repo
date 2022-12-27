function ArticleDetails({details}){
    return (
        <div>
<h1>Details</h1>
{details.map(detail=>{
    return <div key={detail.id}>
<h2>{detail.title}</h2>
<p>{detail.description}</p>
<p>{detail.author}</p>
    </div>
})}
        </div>
    )
}

export default ArticleDetails

export async function getServerSideProps(context){

    const {params,query,res,req} = context
  console.log(req.headers.cookie)
    res.setHeader("Set-Cookie",["name=Tega"])
    console.log(query)

    const response = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const data = await response.json()
    return{
        props:{
            details: data
        }
    }
}

