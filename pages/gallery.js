import Image from "next/image"
import Image6 from "../public/6.jpg"


function Gallery(){
    return (
        <div>
       <h1>Gallery</h1>
       <Image src={Image6} alt="static image" placeholder="blur" width="200" height="150" />
       {[1,2,3,4,5].map(path=>{
        return <div key={path}>
            <Image src={`/${path}.jpg`} width="200" height="150" placeholder="blur"
  blurDataURL={`/${path + 1}.jpg`} alt="dynamic image" />
        </div>
       })}
        </div>
    )
}
export default Gallery