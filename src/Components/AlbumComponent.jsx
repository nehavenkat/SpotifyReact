import React, { Component } from 'react';
import { Col } from 'reactstrap';

class AlbumComponent extends Component {
    render() {
        return (
            
                <Col md="2">
                    <div>

                        <img className="image" src={this.props.album.album.cover} alt="" height="90" width="90" />

                    </div>
                    <div className="title">
                        {this.props.album.album.title}
                    </div>
                </Col>
            
        );
    }
}

export default AlbumComponent;