import axios from 'axios'

export const commentService = {
    query,
    getById,
    remove,
    save,
    getEmptyComment
}
const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? '/api/comment'
        : 'http://localhost:3030/api/comment/'

async function query(filterBy = {}, pageSize) {
    const { data } = await axios.get(BASE_URL, {
        params: { filterBy, pageSize },
    })
    return data
}

async function getById(commentId) {
    const { data } = await axios.get(BASE_URL + commentId)
    return data
}

async function remove(commentId) {
    const { data } = await axios.delete(BASE_URL + commentId)
    return data
}

async function save(comment) {
    if (comment._id) {
        const { data } = await axios.put(BASE_URL + comment._id, comment)
        return data
    } else {
        const { data } = await axios.post(BASE_URL, comment)
        return data
    }
}

function getEmptyComment() {
    return {
        email: '',
        txt: ''
    }
}

