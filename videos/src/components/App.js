import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyAnM_1T-nwe8QRVzeVejjnUFumV5ay2p8Q';

class App extends React.Component{
    state = {videos : [], selectedVideo: null};
    componentDidMount(){
        this.onFormSubmit('northern lights');
    };
    onFormSubmit =async (term) => {
        const response = await youtube.get('search/',{
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        }

        );

        this.setState({videos : response.data.items, selectedVideo: response.data.items[0]});

    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };
    
    render(){
        return(<div><SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video = {this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
                 </div>
            </div>
        </div>
        </div>);
    }
}

export default App;