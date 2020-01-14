import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

const mapDispatchToProps = {
    deleteArticle
}

const mapStateToProps = state => {
    return { articles: state.articles };
}

const ConnectedList = ({articles, deleteArticle}) => (
    <ul>
        {articles.map(el => (
            <li class="center_div list-group-item" key={el.id}>{el.id} | {el.title}<button className="btn btn-light" onClick={()=>{deleteArticle(el)}}>Delete</button></li>
        ))}
    </ul>
)

const List = connect(mapStateToProps,mapDispatchToProps)(ConnectedList);

export default List;