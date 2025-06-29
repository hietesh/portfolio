import { SERVICES } from "../config/services"
import type { services } from "../types/services"

const Services = () => {
  return (
    <section id='services' className="portfolio">
        <h2>Services</h2>

        <div className="flex flex-wrap gap-10">
           {
             SERVICES.map( (item : services) => {
                return (
                  <div className={`
                    shadow-xl 
                    ${item.color} 
                    rounded-2xl 
                    p-10 
                    flex-[1_0_30%]
                    text-center
                    space-y-5
                    `
                  } key={item.img}>
                    <figure>
                      <img src={item.img} alt="img" className="m-auto"/>
                    </figure>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
             })
           }
           <div className="w-[100%] text-gray-500 mt-3 text-center">Looking for a custom job? <a className="text-cta" href='#contacts'>Click here</a> to contact me! 👋</div>
        </div>
    </section>
  )
}

export default Services