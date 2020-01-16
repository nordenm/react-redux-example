import React from "react";
import { connect } from "react-redux";
import { deleteArticle, editStore } from "../actions/index";

const mapDispatchToProps = {
    deleteArticle, editStore
}

const mapStateToProps = state => {
    return { articles: state.articles };
}

class ConnectedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            showArticles: this.props.articles
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            showArticles: props.articles
        })
    }

    render() {
        const filas = this.props.articles.map(el => (
            <li style={{display: "flex", justifyContent: "space-between"}} className="center_div list-group-item" key={el.id}>
                <div style={{display: "inline-block"}}>
                    {el.id} | {el.title}
                </div>
                <div style={{display: "inline-block"}}>
                        <button className="btn btn-light" onClick={() => { this.props.deleteArticle(el.id) }}>Delete</button>&nbsp;
                        <button className="btn btn-light" onClick={() => { this.props.editStore(el) }}>Edit</button>
                </div>
            </li>
        ));

        return (
            <ul>
                {filas}
            </ul>
        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;