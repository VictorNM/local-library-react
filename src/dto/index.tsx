export interface Genre {
    id: number,
    name: string
}

export interface Author {
    id: number,
    family_name: string,
    first_name: string,
    date_of_birth: string,
    date_of_death: string,

    name: string,
    lifespan: number
}

export interface Book {
    id: number,
    title: string,
    author: Author,
    summary: string,
    isbn: string,
    genres: Genre[]
}