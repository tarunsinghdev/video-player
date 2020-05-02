import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyAbp5qg5btpZcTNG5hZm8Aw6zJwL83u294";

class App extends React.Component {
  state = { videos: [], selectedVideo: "" };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div
        className="ui center aligned container "
        style={{ marginTop: "10px" }}
      >
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
