import React, { Component } from 'react';
import './PageBar.scss';

class PageBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: this.props.currPage || 1
        };
        this.updatePageNum = this.updatePageNum.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    updatePageNum(e) {
        let num = parseInt(e.target.value)
        this.setState({currPage: num});
        this.props.updatePageNum(num);
    }

    prevPage() {
        this.setState({
            currPage: this.state.currPage - 1
        }, () => {
            this.props.updatePageNum(this.state.currPage);
        });
    }

    nextPage() {
        this.setState({
            currPage: this.state.currPage + 1
        }, () => {
            this.props.updatePageNum(this.state.currPage);
        });
    }

    render() {
        return (
            <div className="page-bar">
                { this.state.currPage !== 1 ? <button className="page-button" onClick={this.prevPage}>Prev</button> : <div></div>}
                <div className="page-num">
                    <select className="page-num-selection" onChange={this.updatePageNum} value={this.state.currPage}>
                        {
                            Array.from(Array(this.props.numOfPages), (e, i) => {
                                return <option
                                    key={i+1}
                                    value={i+1}
                                >{i+1}</option>
                            })
                        }
                    </select>
                    <span> / {this.props.numOfPages}</span>
                </div>
                { this.state.currPage !== this.props.numOfPages ? <button className="page-button" onClick={this.nextPage}>Next</button> : <div></div>}
            </div>
        )
    }
}

export default PageBar