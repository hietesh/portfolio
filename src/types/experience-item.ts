export type experience_item = {
    id: number,
    designation : string,
    organization : string,
    duration : {
        start : string,
        end : string
    },
    description : string[]
} 