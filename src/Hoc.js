import React, { Component } from 'react';
import { Datacontext } from './Contextapi'

import {InfoWindow,Map,  Marker, GoogleApiWrapper} from 'google-maps-react';
export class Hoc extends Component {
   render() {
  console.log(this.context.data,'=====')
      return (
         <Map
           google={this.props.google} 
         zoom={14} style={{width:'60%',height:'50%',margin:'1em auto'}}
         initialCenter={{
            lat:this.context.data.latitude,
            lng:this.context.data.longitude,
         }}
         >
             <Marker 
                  onClick={this.onMarkerClick}
                  name={'Current location'} 
             />
            {/* <InfoWindow onClose={this.onInfoWindowClose}>                              */}
                {/* <div>
                  <h1>{this.state.selectedPlace.name}</h1> 
                </div>  */}
             {/* </InfoWindow>  */}
          </Map>
      );
   }
}
Hoc.contextType=Datacontext;
export default GoogleApiWrapper({
       apiKey: ('AIzaSyA0KwRmG-6xLCHYDqFb1JnqGBmdvO5C64E')
})(Hoc)

// AIzaSyCQS_K50DzvhNKKVIdzIHI5OIVLhCETUYM