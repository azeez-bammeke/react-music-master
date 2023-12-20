import React, {Component} from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";


const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
    state = { artist: null, tracks: []};

    componentDidMount() {
        this.searchArtist("davido");
    }

    searchArtist = (artistQuery) => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(data => {
                const {artists} = data;
                if (artists.total > 0) {
                    const artist = artists.items[0];
                    this.setState({artist})

                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(topTrack => {
                            this.setState({tracks: topTrack.tracks})
                        })
                        .catch(error => alert(error.message));
                }

            })
            .catch(error => alert(error.message))
    }


    render() {
        return (
            <div>
                <h2>Music Master</h2>
               <Search searchArtist = { this.searchArtist }/>
                <Artist artist={this.state.artist}/>
                <Tracks tracks={this.state.tracks}/>
            </div>
        );
    }
}

export default App;