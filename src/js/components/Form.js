import React, { Component } from "react";
import { connect } from "react-redux";
import User_id from "uuid";
import { addArticle } from "../actions/index";

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = User_id();
        this.props.addArticle1({ title, id });
        this.setState({ title: "" });
    }
    render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <rlabel htmlFor="title">Title</rlabel>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addArticle1: article => dispatch(addArticle(article))
    };
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;