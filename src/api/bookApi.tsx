import { axiosPost } from './utils';
import { Book } from '../dto';

export function getBookList() {
    const query =
        `query {
            books {
                id
                title
                author {
                    id
                    name
                }
                summary
                genres {
                    id
                    name
                }
                isbn
            }
        }`

    return axiosPost(query);
}

export const getBookDetail = (id: number) => {
    const query =
        `
        query RetrieveBookById($id: Int!) {
            book(id: $id) {
                id
                title
                author {
                    id
                    name
                }
                summary
                isbn
                genres {
                    id
                    name
                }
            }
        }
        `
    const variables = {
        id: id
    }

    return axiosPost(query, variables);
}

export const updateBook = (id: number, book: Book) => {
    const query =
        `
        mutation UpdateBook(
            $id: Int!,
            $title: String,
            $author_id: Int,
            $summary: String,
            $isbn: String,
            $genre_ids: [Int]
          ) {
            updateBook(
                id: $id,
                title: $title,
                author_id: $author_id,
                summary: $summary,
                isbn: $isbn,
                genre_ids: $genre_ids
            ) {
                id
                title
                author {
                    id
                    name
                }
                summary
                isbn
                genres {
                    id
                    name
                }
            }
          }
        `

    const variables = {
        id,
        title: book.title,
        author_id: book.author.id,
        summary: book.summary,
        isbn: book.isbn
    }
    
    return axiosPost(query, variables);
}
/** 
export const createBook = (Book: Book) => {
    const query =
        `mutation CreateBook(
            $name: String!
        ) {
            newBook(
                name: $name
            ) {
                id
                name
            }
        }
        `
    const variables = {
        name: Book.title,
    }

    return axiosPost(query, variables);
}

export function deleteBook(id: number) {
    const query =
    `
    mutation DeleteBook(
        $id: Int!
      ) {
        deleteBook(id: $id)
      }
    `

    const variables = {
        id
    }

    return axiosPost(query, variables)
}
*/