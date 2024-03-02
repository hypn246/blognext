import home from '../public/home.png'
import upload from '../public/upload.png'
import contact from '../public/contact.png'
import about from '../public/about.png'
import blog from '../public/blog.png'
import Image from 'next/image'
import Link from 'next/link'
const linkIcon=[upload, contact, about,blog]
const Navbar=()=>{
  return(
    <>
    <nav className='flex flex-row justify-between items-center'>
        <div className='flex justify-start'><h1>dsafads</h1></div>
        <div className='flex items-center justify-center'>
            <Link href='/'><Image src={home} alt="home" /></Link>
            <Link href='/upload'><Image src={upload} alt="home" /></Link>
            <Link href='/blog'><Image src={blog} alt="home" /></Link>
            <Link href='/about'><Image src={about} alt="home" /></Link>
            <Link href='/contact'><Image src={contact} alt="contact" /></Link>
        </div>
        <div className='flex justify-end'><h1>dsafads</h1></div>
    </nav>
    </>
  )
}
export default Navbar