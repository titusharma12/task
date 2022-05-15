import React, { Component } from 'react'
import NewsItem from './NewsItem.js';
import { Link } from 'react-router-dom';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      items: [],
      loading: false,
    }
  }

  async componentDidMount() {
    console.log("cdm");
    fetch(`https://assessment.api.vweb.app/rides`).then((res) => res.json()).then((json) => {
      this.setState({
        items: json,
        loading: true
      });
    })
  }

  render() {
    console.log("render");
    const { loading, items } = this.state;
    if (!loading) return <div><h1>Please wait for sometime</h1></div>
    return (
      <div className="container-fluid my-3">
        <div className="d-flex">
          <Link style={{ margin: '10px 10px 10px 10px', color: 'white', fontWeight:'800',}} to="/nr">Nearest rides</Link>
          <Link style={{ margin: '10px 10px 10px 10px', color: 'white', textDecoration: 'none',fontWeight: '800'}} to="/ur">Upcoming rides(4)</Link>
          <h5 className="flex-grow-1" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>Past rides(2)</h5>
          <h5 style={{ margin: '10px 10px 10px 10px', color: 'white' }}>Filters</h5>
        </div>
        {/* {this.state.loading && <Spinner />} */}
        <div className="row">{
          items.map((element) => (
            <div className="col-md-12">
              <NewsItem id={element.id} origin_station_code={element.origin_station_code} station_path={element.station_path} destination_station_code={element.destination_station_code} date={element.date} map_url={element.map_url} city={element.city} state={element.state}/>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default News