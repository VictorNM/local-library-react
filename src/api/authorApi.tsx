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