import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class GalleryComp extends Component {
    state={url: `http://www.omdbapi.com/?apikey=11ceef91&s=Pirates`}
    componentDidMount() {
        fetch((this.state.url))
        .then(response => response.json())
        .then(json => this.setState({data: json}))
        .catch(err => console.log(err))
    };
    
        render() {
        return (
            console.dir(this.state.data),
            this.state.data && (
            <>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                    <img className="p-2 img-fluid" src={this.state.data.Search[0].Poster} alt=""/>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                    <img className="p-2 img-fluid" src={this.state.data.Search[1].Poster} alt=""/>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                    <img className="p-2 img-fluid" src={this.state.data.Search[2].Poster} alt=""/>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                    <img className="p-2 img-fluid" src={this.state.data.Search[3].Poster} alt=""/>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                    <img className="p-2" src={this.state.data.Search[4].Poster} alt=""/>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                    <img className="p-2" src={this.state.data.Search[5].Poster} alt=""/>
                </Col>
            </>)
        )
  }
}
