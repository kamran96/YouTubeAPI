import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/serchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';




const API_KEY = 'AIzaSyDOc0UhlculaFjirJ6ZAMDKdMkK9I4Etp0';

const Wrapper = styled.div`
  .mv-10{
    margin: 10px auto;
  }
`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={videos: [],
    selectedVideo: null
  },

  this.videoSearch('surfboards')
    
  
}

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]

      })
    });
  }
  render(){
    return(
      <Container>
        <Wrapper>

        <Row>
          <Col md={{ size: 8, offset:2}} className="text-center">
            <Search className="mv-10 input-group" onSearchTermChange={term=> this.videoSearch(term)}/>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <VideoDetail videos ={this.state.selectedVideo} />
          </Col>
          <Col md={5}>
            <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
            videos={this.state.videos} />
          </Col>
        </Row>
        </Wrapper>
      </Container>
    )
  }



}

ReactDom.render(<App/>, document.querySelector('.container'));