import { prisma } from '@/src/lib/db/prisma'
import Image from 'next/image'

interface paramProp{
    params:{
        id:string,
    }
}
// 
async function Detail({params: {id}} : paramProp) {
    const blogs = await prisma.blogNext.findUnique({
        where:{id}
      })
      if(!blogs) return<h1>oh shit</h1>
      return (
    <>
    <div className="hero glass min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <Image 
        className='card shadow-xl'
        width={400}
        height={400}
        src={`/upload/${blogs.thumbnail}`} 
        alt=""></Image>
        <div>
        <h1 className="text-5xl font-bold">{blogs.title}</h1>
        <p className="py-6">{blogs.content}.</p>
        <button className="btn mr-5 btn-success btn-outline">Edit</button>
        <button className="btn btn-error btn-outline">Delete</button>
        </div>
    </div>
    </div>
      
    </>
  )
}

export default Detail