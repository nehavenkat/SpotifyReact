import React, {Component} from 'react';

class SearchComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <input onChange={(input)=> this.props.changeSearch(input.target.value)}  className="spotify-searchbox" placeholder="search"></input>
                </div>
            </div>
        );
    }
}

export default SearchComponent;
