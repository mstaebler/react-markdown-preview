import React from "react";
import marked from "marked";

export default class Markdown extends React.Component{
constructor(){
    super();
    this.state = { value: '*emphasis*' };
	}
	onChange(e) {
  this.setState({ value: e.target.value });
	}
	markUp() {
		return { __html: marked(this.state.value, { sanitize: true }) };
	}
	render() {
		return (
			<div className="main">
				<textarea className="input" type="text" onChange={this.onChange.bind(this)} defaultValue={this.state.value} />
				<div className="output" dangerouslySetInnerHTML={this.markUp()} />
			</div>
	    );
	}
}
