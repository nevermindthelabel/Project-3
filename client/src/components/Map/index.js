import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapModal from '../MapModal';
import './style.css';

const MapMarker = ({ incident }) => {
  return (
    <div
      style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      {incident}
    </div>
  );
};

export default class TrafficMonMap extends Component {
  state = {
    center: {
      lat: null,
      lng: null
    },
    zoom: 4,
    incidents: [
      {
        lat: 33.714037,
        lng: -112.1370484,
        incident: 'incident'
      },
      {
        lat: 33.514037,
        lng: -112.1570484,
        incident: 'incident'
      }
    ]
  };

  getLatLng = ({ lat, lng }) => {
    console.log(lat, lng);
    const newIncident = {
      lat: lat,
      lng: lng,
      incident: 'incident'
    };
    this.setState(
      {
        incidents: [...this.state.incidents, newIncident]
      },
      console.log(this.state.incidents, newIncident)
    );
  };

  componentDidMount() {
    if (!navigator.geolocation) {
      this.setState({
        center: {
          lat: 33.448376,
          lng: -112.074036
        }
      });
    }
    navigator.geolocation.getCurrentPosition(
      position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        console.log(`getCurrentPosition - Success ${lat} and ${lng}`);
        this.setState({
          center: {
            lat: lat,
            lng: lng
          },
          zoom: 12
        });
      },
      error => {
        console.error(JSON.stringify(error));
        this.setState({
          center: {
            lat: 33.448376,
            lng: -112.074036
          }
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          onClick={this.getLatLng}
          bootstrapURLKeys={{
            key: 'AIzaSyDRG4JgxJL_uGmz65iH88bayDb_4hVd93s'
          }}
          layerTypes={['TrafficLayer']}
          center={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <MapMarker lat={33.448376} lng={-112.074036} incident={'traffic backup'} />
          <MapMarker lat={33.7133568} lng={-112.13701119999999} incident={'stuff'} />
          {this.state.incidents.map((incident, index) => {
            return (
              <MapMarker
                lat={incident.lat}
                lng={incident.lng}
                incident={incident.incident}
                key={index}
              />
            );
          })}
        </GoogleMapReact>
        <MapModal />
      </div>
    );
  }
}
