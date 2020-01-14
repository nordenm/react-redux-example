import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, resetArticles } from "../actions/index";

const mapDispatchToProps = {
    addArticle, resetArticles
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle(title);
        this.setState({ title: "" });
    }

    handleReset = (event) => {
        event.preventDefault();
        this.props.resetArticles();
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit} class="center_div">
                <div class="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                        class="form-control"
                    />
                </div>
                <button class="btn btn-light" type="submit">Add article</button>&nbsp;
                <button class="btn btn-light" type="button" onClick={this.handleReset}>Reset articles</button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;