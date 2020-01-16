import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE, EDIT_STORE } from "./action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function resetArticles() {
    return { type: RESET_ARTICLES }
}

export function deleteArticle(payload) {
    return { type: DELETE_ARTICLE, payload: payload }
}

export function editStore(object) {
    return { type: EDIT_STORE, payload: object };
}

export function editArticle(object) {
    return { type: EDIT_ARTICLE, payload: object };
}