import axios from 'axios';

const ENDPOINT = "http://localhost:8000/graphql/v1";

export function axiosPost(query: string, variables: any = {}) {
    return axios({
        method: "post",
        url: ENDPOINT,
        data: {
            query,
            variables
        }
    })
}