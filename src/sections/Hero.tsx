import avatar from '../assets/avatar-1.svg';
import TypeWriter from '../components/TypeWriter';
import { DESIGNATIONS } from '../config/designation-text';
import { SOCIAL_LINKS } from '../config/social-links';
import { useDVH } from '../hooks/useDVH';
import type { nav_item } from '../types/nav-item';


const Hero = () => {
  const height : string = useDVH();
  
  return (
    <section id='home' 
      className="relative text-center  bg-primary border-l-1 border-gray-100"
      style={{ height }}
    >
        <div className='flex gap-3 flex-col items-center justify-center h-[inherit]'>
          <figure>
            <img 
              src={avatar}
              alt='Avatar'
              className='m-auto'
            />
          </figure>
          <h1 className='text-3xl font-medium mt-5 text-white'>Hitesh Pagare</h1>
          <div className='flex gap-5 justify-between my-4'>
             {
                  SOCIAL_LINKS.map( (item : nav_item ) => { return  (
                    <a key={item.name} href={item.url} target="_blank"><item.icon className='text-white'/></a>
                   ) } )
             }
          </div>
          <p className='text-white text-sm'>I'm a <TypeWriter texts={DESIGNATIONS}/>
          </p>
          <a href="#contacts" className='btn mt-6'>Hire Me</a>
        </div>
        
        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-2 text-white'>
          <a href='#about' className='flex flex-col gap-2 mb-4'>
            <span className='text-sm'>Scroll Down</span>
            <div className='relative h-[30px] w-[18px] border-white border-2 rounded-2xl m-auto'>
              <span className='absolute top-1 left-0.5 bg-white h-[10px] w-[10px] rounded-full bounce-full'></span>
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero 