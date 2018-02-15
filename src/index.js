import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAXF780eBaw89euQewtLuAPOpzNm8tuUug';

// create a new component to produce some html
// props are passed by this.props in the class components
class App extends Component{
	constructor(props) {
		super(props);
	  this.state = {
	  	videos: [],
        selectedVideo:null
	  	};
	  	this.videoSearch('surfboards');
	}
    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
	    this.setState({
	    	videos: videos,
	    	selectedVideo:videos[0]
	    });	    
      });

    }
  render() {
  	//debounce returns a function that can only be called after 300ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

   return (
	  <div>
	  <SearchBar onSearchTermChange={videoSearch} />
	  <VideoDetail video={this.state.selectedVideo} />
	  <VideoList
       onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
	   videos={this.state.videos} />
	  </div> 
    );
  }
}

// display to the DOM
ReactDom.render(<App />, document.querySelector('.container'));