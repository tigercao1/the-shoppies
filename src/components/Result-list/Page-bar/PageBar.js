import React, { Component } from 'react';
import './PageBar.scss';

class PageBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: this.props.currPage
        };
        this.updatePageNum = this.updatePageNum.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    componentDidUpdate(prevState) {
        if (prevState.currPage !== this.props.currPage) {
            this.setState({
                currPage: this.props.currPage
            });
        }
    }

    updatePageNum(e) {
        let num = parseInt(e.target.value)
        this.props.updatePageNum(num);
    }

    prevPage() {
        this.props.updatePageNum(this.state.currPage - 1);
    }

    nextPage() {
        this.props.updatePageNum(this.state.currPage + 1);
    }

    render() {
        return (
            <div className="page-bar">
                <button className="page-button" disabled={this.props.numOfPages === null || this.state.currPage === 1} onClick={this.prevPage}>Prev</button>
                {this.props.numOfPages ? 
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
                    </div> :
                    <div></div>
                }
                
                <button className="page-button" disabled={this.props.numOfPages === null || this.state.currPage === this.props.numOfPages} onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default PageBar