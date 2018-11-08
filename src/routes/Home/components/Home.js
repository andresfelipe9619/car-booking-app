import React, { Component } from "react";
// import { View, Text } from "react-native";
import MapContainer from "./MapContainer";
import { Container } from "native-base";
export default class Home extends Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }
  render() {
    console.log("the props", this.props);

    return (
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.props.region.latitude && (
          <MapContainer region={this.props.region} />
        )}
      </Container>
    );
  }
}
