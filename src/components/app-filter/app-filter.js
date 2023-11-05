import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onFilterPost = (e) => {
        const filter = e.currentTarget.getAttribute("data-filter")
        e.target.className = 'btn btn-light'
        this.setState({
            filter: filter
        })
        this.props.onFilterPost(filter)
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                    className="btn btn-light"
                    onClick={this.onFilterPost}>
                    Все сотрудники
                </button>
                <button type="button"
                    className="btn btn-outline-light"
                    data-filter="promotion"
                    onClick={this.onFilterPost}>
                    На повышение
                </button>
                <button type="button"
                    className="btn btn-outline-light"
                    data-filter="moreThen1000"
                    onClick={this.onFilterPost}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;