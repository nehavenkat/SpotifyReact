import React, { Component } from 'react';
import SideBar from './SideBar';
import ArtistComponent from "./ArtistComponent";
import NavBar from './NavBar';
import { Container, Col, Row } from 'reactstrap';
import SearchComponent from './SearchComponent';

class HomeComponent extends Component {
    state = {
        search: "Madonna"
    }
    changeSearch(input) {
        console.log(input);
        this.setState({search: input}); /*to get the output in console for what we are searching*/
    }
    render() {
        return (
            <>
                <Row>
                    <Col className="col-2">

                    </Col>
                    <Col className="col-8">
                        <NavBar />

                    </Col>
                </Row>
                <Row>
                    <Col className="col-2">
                        <SideBar />

                    </Col>
                    <Col className="col-8">
                    <SearchComponent changeSearch={this.changeSearch.bind(this)}  />
                    <h4 className="mt-5">Artists</h4> 
                    <ArtistComponent artist={this.state.search} />


                    </Col>
                </Row>
            </>




        )
    }
}

export default HomeComponent;