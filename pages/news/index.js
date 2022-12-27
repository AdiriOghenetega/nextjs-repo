import Link from "next/link"

function NewsArticles({articles}){
    return (
        <div>
            <h1>News Articles</h1>
            {articles.map(article=>{
                return <div key={article.id}>
                <Link href={`/news/${article.category}`}>
                 <h2>{article.title}</h2>
                </Link>
                </div>
            })}
        </div>
    )
}

export default NewsArticles

export async function getServerSideProps(){
    const response = await fetch("http://localhost:4000/news")
    const data = await response.json()

    return {
        props:{
            articles : data
        }
    }
}