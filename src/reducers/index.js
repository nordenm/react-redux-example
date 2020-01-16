import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE, EDIT_STORE } from "../actions/action-types";

const initialState = {
    articles: [], lastId: 0, titleEditing: {}
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat({ title: action.payload, id: state.lastId + 1 }),
            lastId: state.lastId + 1
        })
    }
    else if (action.type === RESET_ARTICLES) {
        return Object.assign({}, state, initialState)
    }
    else if (action.type === DELETE_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.filter(el => el.id !== action.payload)
        })
    }
    else if (action.type === EDIT_STORE) {
        return Object.assign({}, state, {
            articles: state.articles,
            lastId: state.lastId,
            titleEditing: action.payload
        });
    }
    else if (action.type === EDIT_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.map(x => x.id === action.payload.id ? {id: x.id, title: action.payload.title} : {id: x.id, title: x.title}),
            lastId: state.lastId,
            titleEditing: {}
        });
    }
    return state;
}

export default rootReducer;