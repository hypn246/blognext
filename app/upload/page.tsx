import { prisma } from '@/src/lib/db/prisma'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
export const metadata={
  title:'Create your blog'
}
async function addBlog(formData:FormData) {
  "use server"
  const title=formData.get('title')?.toString()
  const content=formData.get('content')?.toString()
  const type=formData.get('type')?.toString()
  const thumbnail=formData.get('thumbnail')
  if (!title||!content||!type){
    throw Error("Missing requirement")
  }
  await prisma.blogNext.create({
    data:{title, content, type},
  });

  redirect('/blog');
}
function Upload() {
  return (
    <main >
      <div>
        <h1 className='text-lg font-bold m-4'>upload</h1>
      </div>
      <form action={addBlog} className='flex flex-col justify-center'>
        <input 
        required
          className='input input-bordered mb-4 w-full'
          type="text" 
          name='title'
          placeholder='name'
        />
        <textarea 
        required
        name='content'
          className='textarea textarea-bordered mb-4 w-full h-[200px]'
          placeholder='content'
        />
        <select name="type" id="" className='select mb-4'>
          <option value="">-----Select type-----</option>
          <option value="review">Review</option>
          <option value="diary">Diary</option>
          <option value="introduce">Introduce</option>
        </select>
        <input 
        type="file" 
        className='file-input file-input-bordered file-input-secondary w-full mb-4 cursor-pointer'
        />
        <button 
        type="submit" 
        className='btn btn-outline btn-secondary'>Upload</button>
      </form>
    </main>
  )
}

export default Upload