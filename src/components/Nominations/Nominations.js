import React, { Component } from 'react';
import './Nominations.scss';
import ListItem from './Nomination-list-item/ListItem'

class Nominations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nominations: this.props.nominations || []
        }

    }

    componentDidUpdate(prevState) {
        if (prevState.nominations.length !== this.props.nominations.length) {
            this.setState({
                nominations: this.props.nominations
            });
        }
    }

    render() {
        return (
            <div className="nominations">
                <p>Nominations</p>
                {
                    this.state.nominations.length > 0 ?
                    this.state.nominations.map((item, i) => {
                        return (<ListItem
                            key={i}
                            title={item.title}
                            year={item.year}
                            id={item.id}
                            onRemove={this.props.onRemove}
                        ></ListItem>)
                    }) :
                    <div className="placeholder">Nominate your favorite movies</div>
                }
            </div>
        )
    }
}

export default Nominations