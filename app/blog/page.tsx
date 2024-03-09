import { Cards } from '@/components/Cards'
import { prisma } from '@/src/lib/db/prisma'
import { error } from 'console'

async function Blog() {
  const blogs = await prisma.blogNext.findMany({
    orderBy: {createdAt: "desc"}
  })
  try{
    return (
      <div className='outer'>
        {blogs.map((item, index)=>{
          return(<Cards blog={item} key={index}/>)
          })}
      </div>
    )
  }
  catch{
    console.log(error)
  }
}

export default Blog