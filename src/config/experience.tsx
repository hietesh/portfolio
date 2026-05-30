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
            'Developed an internally used Component UI Library (GO-UI) and hosted it on the private GITHUB PACKAGES, to be used in future projects instead of relying on the external UI library.',
            'Migrating the legacy JSP, jQuery, Ajax based portal to Modern Vue and Typescript Components using Composition API with script setup based syntax.',
            'Collaborated with product managers, designers and backend engineers to deliver payment and transaction management workflows for small and medium-sized businesses for a b2b Agent Portal.',
            'Designed centralized application state management using PINIA and JWT based session authentication.',
            'Reduced redundant API requests through client side caching and state persistence , improving application responsiveness and reducing backend load.',
            'Migrated two production fintech applications from Vue Bootstrap to Vuetify to address security vulenerablities indentified through Synk scans while improving UI maintainablity and long term support.'
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
            'Conversion of designs in (FIGMA / Adobe Illustrator) to responsive web pages using BEM Methodology using SCSS',
            'Collaborated with backend teams to integrate REST APIs, handle authentication workflows and implement scalable frontend data flows.',  
            'Developed features across the candidate lifecycle. from initial screening through deployment & engagement management.',
            'Developed / maintained / revamped multiple responsive landing pages which contributed to lead generation across talent acquisition and client acquisition which contributed to 15k - 20k monthly visits.',
            'Optimised the Web Vitals of the pages with a score of 90+ in LCP, INP, CLS for a improving user experience and search visiblity'
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
            'Developed e-learning courses using html, css, javascript and storyline articulate and other properitory tools.'
        ]
    }
]