import { axiosPost } from './utils';
import { Author } from '../dto';

export function getAuthorList() {
    const query =
        `
        query {
            authors {
                id
                first_name
                family_name
                date_of_birth
                date_of_death
                
                name
                lifespan
            }
        }
        `

    return axiosPost(query);
}

export function getAuthorDetail(id: number) {
    const query =
    `
    query RetrieveAuthorById($id: Int!) {
        author(id: $id) {
            id
            first_name
            family_name
            date_of_birth
            date_of_death
            
            name
            lifespan
        }
    }
    `

    const variables = {
        id
    }

    return axiosPost(query, variables)
}

export function createAuthor(author: Author) {
    const query = 
    `
    mutation CreateAuthor(
        $first_name: String!,
        $family_name: String!
        $date_of_birth: String,
        $date_of_death: String
    ) {
        newAuthor(
            first_name: $first_name, 
            family_name: $family_name,
            date_of_birth: $date_of_birth,
            date_of_death: $date_of_death
        ) {
            id
            first_name
            family_name
            date_of_birth
            date_of_death
            
            name
            lifespan
        }
    }
    `

    const variables = {
        first_name: author.first_name,
        family_name: author.family_name,
        date_of_birth: author.date_of_birth,
        date_of_death: author.date_of_death
    };

    return axiosPost(query, variables);
}

export function updateAuthor(id: number, author: Author) {
    const query =
    `
    mutation UpdateAuthor(
        $id: Int!,
        $first_name: String,
        $family_name: String
        $date_of_birth: String,
        $date_of_death: String
    ) {
        updateAuthor(
            id: $id,
            first_name: $first_name, 
            family_name: $family_name,
            date_of_birth: $date_of_birth,
            date_of_death: $date_of_death
        ) {
            id
            first_name
            family_name
            date_of_birth
            date_of_death
            
            name
            lifespan
        }
    }
    `

    const variables = {
        id: id,
        first_name: author.first_name,
        family_name: author.family_name,
        date_of_birth: author.date_of_birth,
        date_of_death: author.date_of_death
    }

    return axiosPost(query, variables)
}

export function deleteAuthor(id: number) {
    const query =
    `
    mutation DeleteAuthor(
        $id: Int!
    ) {
        deleteAuthor(id: $id)
    }
    `

    const variables = {
        id
    }

    return axiosPost(query, variables)
}