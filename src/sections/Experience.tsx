import { EXPERIENCE_ITEMS } from "../config/experience"
import type { experience_item } from "../types/experience-item"

const Experience = () => {
  return (
    <section id='experience' className="portfolio">
      <h2>Experience</h2>
      <div className="bg-white rounded-lg shadow-2xs px-7 pb-8 pt-5 space-y-6">
         {
            EXPERIENCE_ITEMS.map( (item : experience_item ) => {
                return (
                  <div key={item.id}>
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                      <h3 className="font-bold">{item.organization}</h3>
                      <p className="text-sm">{item.duration.start} - {item.duration.end}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{item.designation}</p>
                    <ul className="text-sm list-disc pl-3 space-y-1">
                      { 
                        item.description.map( (desc : string,index : number) => {
                            return (
                              <li key={index}>{desc}</li>
                            );
                          }
                        )
                      }
                    </ul>
                  </div>
                )
            })
         }
      </div>
    </section>
  )
}

export default Experience