import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PledgeInputArea extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick(e) {
		if (this.node.contains(e.target)) {
			return;
		}
		this.props.handleClickOutside();
	}


	render() {
		return (
			<div ref={node => {this.node = node}}>
				<div id="pledge-amount-container">
						<span id="pledge-amount-currency-symbol" className={this.props.activeInputArea || this.props.hoverInputArea ? 'pledge-component highlight' : 'pledge-component no-highlight'}>$</span>
						<input type="text" id="pledge-amount-chosen" className={this.props.activeInputArea || this.props.hoverInputArea ? 'pledge-component highlight' : 'pledge-component no-highlight'} value={this.props.starting ? this.props.starting : ''} placeholder="Pledge any amount" onMouseEnter={this.props.handleInputTextMouseEnter} onMouseLeave={this.props.handleInputTextMouseLeave} onChange={this.props.handleInputChange} onClick={this.props.handleInputTextClick}/>
				</div>
			</div>
		)
	}
}

export default PledgeInputArea;