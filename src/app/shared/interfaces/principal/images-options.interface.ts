export interface Questions {
    number: number
    text: string
    responses: Responses[]
}

export interface Responses {
    value: string
    selected: boolean    
}