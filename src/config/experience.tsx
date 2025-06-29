import type { experience_item } from "../types/experience-item";

// Fill in the order with latest experice first
export const EXPERIENCE_ITEMS : experience_item[] = [
    {
        id: 1,
        designation : 'Frontend Developer',
        organization : 'Go Payments Pvt Ltd ',
        duration : {
            start : 'Oct 2023',
            end : 'Present'
        },
        description : [ 
            'Migrated 2 existing Fintech Projects from vue-bootstrap to VUETIFY to overcome the vulnerablity reported by the SYNK security scans.',
            'Developed an internally used Component UI Library and hosted it on the private GITHUB PACKAGES, to be used in future projects instead of relying on the third party library.',
            'Developing a B2B Agent Portal which utilises internal component library, which provide payment utility interface to the small & mid size business for transactions.',
            'Migrating the current JSP, jQuery, Ajax based portal to Modern Vue & Typescript Components using Composition API with script setup based syntax.'
        ]
    },
    {
        id: 2,
        designation : 'Frontend Developer',
        organization : 'Uplers Pvt Ltd ',
        duration : {
            start : 'Jan 2022',
            end : 'Oct 2023'
        },
        description : [
            'Worked on the talent side of the portal where we showcase the relevant JOBS openings according to the profile assesment done.',
            'Whole journey of the talent is maintained in the portal from initial screening to the deployment of the talent to the client.',  
            'Developed various responsive landing pages in the portal to generate leads of talent as well the client who is looking for a talent for thier businness.'
        ]
    },
    {
        id: 3,
        designation : 'Developer',
        organization : 'KGL Publishing Pvt Ltd ',
        duration : {
            start : 'April 2021',
            end : 'Dec 2021'
        },
        description : [
            'Developing the front end of e-learning courses using HTML, CSS ,JS & storyline articulate and other properitory tools.'
        ]
    }
]