import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul className="list">
                {this.props.items.map(item => {
                    return (
                        <li key={item.name}>
                            {item.name} ({item.type})
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default List;