import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCGRuy7pO7BBwjwP5h3VyePUMYuZW_wR3s";

// Create a new comonent. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // es6 example when return data and set state key value is the same
            // this.setState({ videos: videos})
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
