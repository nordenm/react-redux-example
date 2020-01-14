import { ADD_ARTICLE, RESET_ARTICLES } from "./action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function resetArticles() {
    return { type: RESET_ARTICLES }
}