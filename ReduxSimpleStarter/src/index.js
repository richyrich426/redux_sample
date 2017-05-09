import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = "AIzaSyCGRuy7pO7BBwjwP5h3VyePUMYuZW_wR3s";

// Create a new comonent. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
             });
            // es6 example when return data and set state key value is the same
            // this.setState({ videos: videos})
        });
    }

    render() {
        //throttling
        //can only call this function every 300 milliseconds
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={ this.state.videos } />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
