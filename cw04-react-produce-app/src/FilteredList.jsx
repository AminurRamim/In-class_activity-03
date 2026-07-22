import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All"
        };
    }

    onSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    onFilter = (eventKey) => {
        this.setState({ type: eventKey });
    }

    filterItem = (item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .search(this.state.search.toLowerCase()) !== -1;
        const matchesType = this.state.type === "All"
            || item.type === this.state.type;
        return matchesSearch && matchesType;
    }

    render() {
        const filteredItems = this.props.items.filter(this.filterItem);

        return (
            <div className="filtered-list">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.onSearch}
                />

                <DropdownButton title="Filter" onSelect={this.onFilter}>
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                    <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
                </DropdownButton>

                <List items={filteredItems} />
            </div>
        );
    }
}

export default FilteredList;