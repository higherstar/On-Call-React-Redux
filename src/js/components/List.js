import React from "react";
import { connect } from "react-redux";

const ConnectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const mapStateToProps = state => {
    return { articles: state.articles };
};

export default connect(mapStateToProps)(ConnectedList);