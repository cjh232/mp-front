import axios from 'axios';

function productListApi (category) {

    const encodedCategory = encodeURIComponent(category);

    const url = `http://localhost:8000/products/list/`

    return axios.request({
        method: 'post',
        url: url,
        withCredentials: true,
        data: {
            category,
            brand: [],
            color: [],
            size: []
        }
    });
}

function categoryApi (category) {
    const url = `http://localhost:8000/products/categories/${category}/`

    return axios.request({
        method: 'get',
        url: url,
        withCredentials: true,
    })
}

function filterProductsApi (filters) {
    const url = `http://localhost:8000/products/list/`

    return axios.request({
        method: 'post',
        url: url,
        withCredentials: true,
        data: filters
    })
}

async function productDetailsApi (productId) {

    const url = `http://localhost:8000/products/details/${productId}`

    let res = await axios.request({
        method: 'get',
        url: url,
        withCredentials: true,
    });

    return res.data
}

export {
    productListApi,
    categoryApi,
    filterProductsApi,
    productDetailsApi
}