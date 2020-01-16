import React from "react";
import { connect } from "react-redux";
import { addArticle, resetArticles, editArticle } from "../actions/index";
import {isEmpty} from "lodash";

const mapDispatchToProps = {
    addArticle, resetArticles, editArticle
}

const mapStateToProps = state => {
    return { object: state.titleEditing };
}

class ConnectedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            edit: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (!isEmpty(props.object) && !state.edit) {
            return { id: props.object.id, title: props.object.title, edit:true }
        } else {
            return state;
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        if (!this.state.edit) {
            event.preventDefault();
            const { title } = this.state;
            this.props.addArticle(title);
            this.setState({title: "", edit:false});
        }
        else {
            event.preventDefault();
            const editedArticle = { id: this.state.id, title: this.state.title };
            this.props.editArticle(editedArticle);
            this.setState({title: "", edit:false});
        }

        this.setState({id: "", title: "", edit:false});
    }

    handleReset = (event) => {
        event.preventDefault();
        this.props.resetArticles();
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="center_div">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-light" type="submit">Save article</button>&nbsp;
                <button className="btn btn-light" type="button" onClick={this.handleReset}>Reset articles</button>
            </form>
        );
    }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;