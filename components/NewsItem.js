import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { id, origin_station_code, station_path, destination_station_code, date, map_url, state, city } = this.props;
    return (
      <div className="my-3">
        <div className="d-flex m-2" style={{ color: 'white', backgroundColor: 'black' }}>
            <img className="m-2" style={{ width: '15%', borderRadius: '12px'}} src={map_url} alt="..." />
          <div className="m-5 flex-grow-1" style={{ backgroundColor: 'black'}}>
            <h5>Ride Id: {id}</h5>
            <h5>Origin Station: {origin_station_code}</h5>
            <h5>station path: {station_path}</h5>
            <h5>Date: {date}</h5>
          </div>
          <div>
            <a rel="noreferrer" href={city} target="_blank" className="btn btn-sm btn-dark m-3" style={{ borderRadius: '20px'}}>City Name</a>
            <a rel="noreferrer" href={state} target="_blank" className="btn btn-sm btn-dark m-3" style={{ borderRadius: '20px'}}>State Name</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
