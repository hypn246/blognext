import { blogNext } from "@prisma/client" 
import Link from "next/link"

interface BlogsProps{
    blog:blogNext
}
  export function Cards({blog}:BlogsProps) {
    let convert=blog.content
  return (
    <>
        <Link href={"/detail/"+blog.id} 
        className="outer card bg-base-100 hover:shadow-sm transition m-5">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
            <img src={`/upload/`+blog.thumbnail} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{((convert).length<=80) ? convert : ((convert).slice(0, 99).concat("..."))}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
          </Link>
    </>
    )
  }