import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, promotion: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: false, promotion: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, promotion: false, id: 3 },
      ],
      term: '',
      filter: ''
    }
    this.maxId = 4;
  }

  onDeleteEmployees = (id) => {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id),
    }))
  }

  onAddEmployees = (name, salary) => {
    const newCardsEmployees = {
      name,
      salary,
      increase: false,
      promotion: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      const newData = [...data, newCardsEmployees]
      return {
        data: newData
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  searchEmployees = (items, term) => {
    if (term.length === 0) {
      return items
    }


    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({
      term: term
    })
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'promotion':
        return items.filter(item => item.promotion);
      case 'moreThen1000':
        let newItems = items.filter(item => item.salary > 1000);
        console.log(items);
        return newItems
      default:
        return items
    }
  }

  onFilterPost = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {
    const { data, term, filter } = this.state;
    const counterEmployees = this.state.data.length;
    const increaseEmployees = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmployees(data, term), filter);
    return (
      <div className="app">
        <AppInfo
          counterEmployees={counterEmployees}
          increaseEmployees={increaseEmployees} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilterPost={this.onFilterPost} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.onDeleteEmployees}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.onAddEmployees} />
      </div>
    )
  }
}

export default App;
