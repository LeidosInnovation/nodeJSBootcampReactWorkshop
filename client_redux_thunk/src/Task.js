import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
	constructor() {
		super();
		
		this.handleClickDelete = this.handleClickDelete.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.selected !== nextProps.selected;
	}
  
	handleSelect() {
		console.log("checked: " + this._select.checked);
		this.props.updateTask(this.props.id, this.props.title, this._select.checked);
	}
	
	handleClickDelete(event) {
		event.preventDefault();
		this.props.deleteTask(this.props.id);
	}
	
	render() {
		return (<span className="Task"><div className="col-md-1">
            <input name="select" type="checkbox" ref={(el) => this._select = el} checked={this.props.selected} onChange={this.handleSelect} />
        </div>  
        <div className="col-md-7">
            {this.props.title}
        </div>
        <div className="col-md-4">
            <input type="button" onClick={this.handleClickDelete} value="Delete" className="btn btn-danger"/>
        </div>
        <br/><br/></span>);
	}
}

export default Task;