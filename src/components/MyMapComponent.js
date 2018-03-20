import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 40.229935, lng: -111.666515 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.229935, lng: -111.666515 }} />}
  </GoogleMap>
))
export default MyMapComponent