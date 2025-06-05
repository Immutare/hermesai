import axios from 'axios'; 

export interface IQueryRequest {
    request: string;
    response: string;
    datecreated: Date;
}

export function postQuery(request: string): Promise<any> {
    console.log(request)
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/api',
        timeout: 60000,
    });

	return axiosInstance.post('/queries', {
        request
    });;
}


export function getQueries(): Promise<any> {
    return fetch('localhost:3000');
}

