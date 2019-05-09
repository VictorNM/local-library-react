import { axiosPost } from './utils';
import { Genre } from '../dto';

export function getGenreList() {
    const query =
        `query {
            genres {
                id
                name
            }
        }`

    return axiosPost(query);
}

export const createGenre = (Genre: Genre) => {
    const query =
        `mutation CreateGenre(
            $name: String!
        ) {
            newGenre(
                name: $name
            ) {
                id
                name
            }
        }
        `
    const variables = {
        name: Genre.name,
    }

    return axiosPost(query, variables);
}

export const getGenreDetail = (id: number) => {
    const query =
        `
        query RetrieveGenreById($id: Int!) {
            genre(id: $id) {
                id
                name
                books {
                    id
                    title
                    author {
                        name
                    }
                }
            }
        }
        `
    const variables = {
        id: id
    }

    return axiosPost(query, variables);
}

export const updateGenre = (id: number, genre: Genre) => {
    const query =
        `
        mutation UpdateGenre(
            $id: Int!,
            $name: String
          ) {
            updateGenre(
              id: $id,
              name: $name
            ) {
              id
              name
            }
          }
        `

    const variables = {
        id,
        name: genre.name
    }
    
    return axiosPost(query, variables);
}

export function deleteGenre(id: number) {
    const query =
    `
    mutation DeleteGenre(
        $id: Int!
      ) {
        deleteGenre(id: $id)
      }
    `

    const variables = {
        id
    }

    return axiosPost(query, variables)
}