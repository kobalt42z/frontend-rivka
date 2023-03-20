export const BASE_URL = 'http://localhost:3333';
const URLS_PATHS = {
    AUTH: {
        LOGIN:  BASE_URL + '/auth/login',
        REGISTER: BASE_URL+'/auth/register'
    },
    PRODUCTS: {
        FIND: BASE_URL+'/products',
        SLIST: BASE_URL+'/products/slist',
        CREATE: BASE_URL+'',
        UPDATE: BASE_URL+'',
        DELET: BASE_URL+'',
        FIND_BY_CAT: BASE_URL+'/products/byCategory/'
    }
}

const QUERYS = {
    PAGE : "page="
}



export const { AUTH, PRODUCTS } = URLS_PATHS
export const {PAGE}=QUERYS
