import avatar from '../assets/avatar-1.svg';
import resume from '../assets/resume.pdf';
import { ABOUT_SKILLS } from '../config/about-skills';
import type { about_skills } from '../types/about-skills';

const About = () => {
  return (
    <section id='about' className="portfolio">
        <div className='container'>
          <h2>About</h2>

          <div className="flex gap-12 flex-wrap justify-center items-center">
            <figure>
                <img 
                  src={avatar}  
                  alt='Avatar'
                />
            </figure>
            <div className='bg-white shadow-xl p-8 rounded-2xl flex flex-wrap items-center gap-8 flex-1'>
              <div className='flex-[1_0_50%]'>
                <p className='text-pretty'>I am Hitesh Pagare, frontend developer from Mumbai, India. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>
                <a href={resume} download='Resumes' className='btn mt-6'>Download Resume</a>
              </div>  
              <div className='flex-[1_0_auto] space-y-4'>
                  {
                    ABOUT_SKILLS.map( ( item : about_skills ,index : number )  => {
                      return (
                        <div key={index}>
                          <div className='flex mb-2'>
                            <p className='flex-1 text-sm'>{item.skill}</p>
                            <p className='text-sm'>{item.percent}%</p>
                          </div>
                          <div className='bg-gray-200 h-[8px] rounded-lg'>
                            <div className={`${item.color} h-[inherit] rounded-lg` } style={{ width: `${item.percent}%` }}></div>
                          </div>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About