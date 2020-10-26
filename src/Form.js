import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = (event) => {
        this.props.addElement(this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div className="form__group field">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input type="text" className="form__field" placeholder="Task" name="name" id='name' required value={this.state.value} onChange={this.handleChange}/>
                    <label htmlFor="name" className="form__label">Task</label>
                    <input className="form__submit" type="submit" value="+"/>
                </form>
            </div>
        )
    }
}