import React, { Component } from 'react';
import AlbumComponent from "./AlbumComponent";
import { Row } from 'reactstrap';

class ArtistComponent extends Component {
    state = {
        search: "",
        artists: [],
        albums: []
    }

    refreshData() {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.props.artist, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "90a4cce2e8msh71a30f294ae0070p198be9jsnb52964849910"
            }
        })
            .then(response => {
                response.json()
                    .then((response) => {
                        console.log(response);
                        this.setState({ artists: response.data });
                    });
            })

            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount = () => {
        this.refreshData();
    }

    componentWillUpdate(prevState, currState) {
        if (prevState.artist !== currState.artist) {
        this.refreshData();
        }
    }
    render() {
        const artistsPresent = this.state.artists.map(album => {
            return (
                <AlbumComponent album={album}></AlbumComponent>

            )
        }
        );
        return (
            <Row>
                {artistsPresent}
            </Row>

        );
    }
}

export default ArtistComponent;