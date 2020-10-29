import React from 'react';
import './AppForm.css';

class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.addElement(this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div className="form__group field">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form__field" placeholder="Task" name="name" id="name" required value={this.state.value} onChange={this.handleChange} />
                    <label htmlFor="name" className="form__label">Task</label>
                    <input className="form__submit" type="submit" value="+" />
                </form>
            </div>
        );
    }
}

export default AppForm;