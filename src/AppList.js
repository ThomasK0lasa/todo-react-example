import React from 'react';
import './AppList.css';
import AppListItem from './AppListItem';

class AppList extends React.Component {
    render() {
        if (this.props.elements.length > 0) {
            return (
                <ul>
                    {this.props.elements.map(item =>
                        <AppListItem key={item._id} id={item._id} name={item.name} done={item.done} updateElement={this.props.updateElement} removeElement={this.props.removeElement}/>)}
                </ul>
            );
        } else {
            return (
                <p>Seems that You don't have any pending tasks. Use form to add new ones. :)</p>
            )
        }
    }
}

export default AppList;