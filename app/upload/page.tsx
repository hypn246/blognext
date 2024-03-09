import FormSubmit from '@/components/FormSubmit'
import { prisma } from '@/src/lib/db/prisma'
import { File } from 'buffer'
import { redirect } from 'next/navigation'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export const metadata={
  title:'Create your blog'
}
async function AddBlog(formData:FormData) {
  "use server"
  const title=formData.get('title')?.toString()
  const content=formData.get('content')?.toString()
  const type=formData.get('type')?.toString()
  ////đa tạ stackoverflow câu này
  const author=formData.get('author') as string
  // i succeeded save thumbnail but in url not local directory. However, I forgot how to
  // use it again and I had to google it. So last 3 documents are url thumbnail with don't 
  // require specific directory for the code to work. Waste a midnight 8-3-2024

  // many thanks to ethanmick.com
  const file: File | null = formData.get('thumbnail') as unknown as File
  if (!file) {
    throw new Error('No file uploaded')
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = join('./public/', 'upload', file.name)
  await writeFile(path, buffer)

  const thumbnail=file.name
  // ///check requirement
  if (!title||!content||!type||!author||!thumbnail){
    throw Error("Missing requirement")
  }
  await prisma.blogNext.create({
    data: {title, author, type, content, thumbnail}
  });
  redirect("/blog")
}
function Upload() {
  return (
    <>
      <div>
        <h1 className='text-lg font-bold m-4'>upload</h1>
      </div>
      <form action={AddBlog} 
      className='flex flex-col justify-center'>
        <input 
        required
          className='input input-bordered mb-4 w-full'
          type="text" 
          name='title'
          placeholder='Name'
        />
        <input 
        required
          className='input input-bordered mb-4 w-full'
          type="text" 
          name='author'
          placeholder='Author'
        />
        <input 
        required
          className='input file-input input-bordered mb-4 w-full'
          type="file" 
          name='thumbnail'
          placeholder='thumbnail'
        />
        <textarea 
        required
        name='content'
          className='textarea textarea-bordered mb-4 w-full h-[200px]'
          placeholder='Content'
        />
        <select name="type" id="" className='select mb-4'>
          <option value="">-----Select type-----</option>
          <option value="review">Review</option>
          <option value="diary">Diary</option>
          <option value="introduce">Introduce</option>
        </select>
        {/* <input 
        type="file" 
        className='file-input file-input-bordered file-input-secondary w-full mb-4 cursor-pointer'
        /> */}
        <FormSubmit 
        className='btn-outline'>Upload
        </FormSubmit>
      </form>
    </>
  )
}

export default Upload