import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE } from "./action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function resetArticles() {
    return { type: RESET_ARTICLES }
}

export function deleteArticle(payload) {
    console.log(payload);
    return { type: DELETE_ARTICLE, payload: payload.id}
}