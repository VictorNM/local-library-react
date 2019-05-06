export interface BookSend {
    id: number,
    title: string,
    author_id: number,
    summary: string,
    isbn: string,
    genres_id: number[]
}

export interface BookRecieve {
    id: number,
    title: string,
    author: {
        id: number,
        name: string,
    },
    summary: string,
    isbn: string,
    genres: {
        id: number,
        name: string
    }[]
}