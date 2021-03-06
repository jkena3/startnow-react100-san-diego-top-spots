import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {//get request for json info
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container-fluid' background='blue'>
          <div className='jumbotron'>
            <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego, California.</p>
          </div>


          {
            this.state.topspots.map(topspot => (//maps topspots array into new array
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} />
            ))
          }
        </div>
      </div>
    );

  }
}

