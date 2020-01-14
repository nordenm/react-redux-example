import { ADD_ARTICLE } from "../actions/action-types";
import { RESET_ARTICLES } from "../actions/action-types"

const initialState = {
    articles: [], lastId: 0
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat({ title: action.payload, id: state.lastId + 1 }),
            lastId: state.lastId + 1
        })
    }
    else if (action.type === RESET_ARTICLES) {
        return Object.assign({}, state, {
            articles: initialState.articles,
            lastId: initialState.lastId
        })
    }
    return state;
}

export default rootReducer;