import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE } from "../actions/action-types";

const initialState = {
    articles: [], lastId: 0
}

function rootReducer(state = initialState, action) {
    console.log(action);
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
    else if (action.type === DELETE_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.filter(el => el.id !== action.payload)
        })
    }
    return state;
}

export default rootReducer;