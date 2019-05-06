export interface AuthorSend {
    id: number,
    first_name: string,
    family_name: string,
    date_of_birth: string,
    date_of_death: string
}

export interface AuthorRecieve {
    id: number,
    family_name: string,
    first_name: string,
    date_of_birth: string,
    date_of_death: string,

    name: string,
    lifespan: number
}
