import Image from "next/image";
import land1 from '../public/cta-illustration.svg'
import land2 from '../public/hero-back-illustration.svg'
import land3 from '../public/pricing-illustration.svg'

import f1 from '../public/feature-icon-01.svg'
import f2 from '../public/feature-icon-02.svg'
import f3 from '../public/feature-icon-03.svg'
import f4 from '../public/feature-icon-04.svg'
import f5 from '../public/feature-icon-05.svg'
import f6 from '../public/feature-icon-06.svg'
export default function Home() {
  return (
    <>
    
    <div className="flex w-full justify-center relative">
      <div className="flex items-end justify-center flex-col w-1/2">
        <div className="flex items-start justify-center flex-col mr-10 w-[400px]">
        <h1 className="flex-left text-6xl">Urdailyblog</h1>
        <p className="flex-left mt-4 mb-4 text-xl">#1 blog creating platform. Provide fast and full-stack API for your experience</p>
        <div className="flex">
          <button type="button" className="btn btn-outline btn-secondary mr-4">Get started</button>
          <button type="button" className="btn btn-outline btn-primary">Tutorial</button>
        </div>
        </div>
      </div>
      <div className="landscope relative w-1/2 h-screen">
        <Image src={land3} alt='' className="relative"></Image>
        <Image src={land2} alt='' className="absolute top-0 z-20"></Image>
        <Image src={land1} alt='' className="absolute top-28 right-40 -rotate-90"></Image>
        <Image src={land1} alt='' className="absolute top-12 right-50 -rotate-45"></Image>
        <Image src={land1} alt='' className="absolute bottom-12 left-40 rotate-45"></Image>
      </div>
    </div>

    <div className="diagonal bg-secondary-content">
      <div className="unique">
        <div className="card w-96 bg-base-100 shadow-xl text-center">
          <figure><Image src={f1} alt="" /></figure>
            <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl text-center">
          <figure><Image src={f2} alt="" /></figure>
            <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl text-center">
          <figure><Image src={f3} alt="" /></figure>
            <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl text-center">
          <figure><Image src={f4} alt="" /></figure>
            <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl text-center">
          <figure><Image src={f5} alt="" /></figure>
            <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl text-center">
          <figure><Image src={f6} alt="" /></figure>
            <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
