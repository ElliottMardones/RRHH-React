import React, { Component } from 'react';

class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <div className="HomeContent" style={{'display':((this.state.isVisible)?'block':'none')}}>
                Hola mundo!!
            </div>
        );
    }
}

export default HomeContent;
