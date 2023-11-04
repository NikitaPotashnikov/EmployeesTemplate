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
    }
    this.maxId = 4;
  }

  deleteEmployees = (id) => {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id),
    }))
  }

  addEmployees = (name, salary) => {
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

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item;
      })
    }))
  }

  onTogglePromotion = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, promotion: !item.promotion }
        }
        return item;
      })
    }))
  }

  render() {
    const counterEmployees = this.state.data.length;
    const increaseEmployees = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo
          counterEmployees={counterEmployees}
          increaseEmployees={increaseEmployees} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteEmployees}
          onToggleIncrease={this.onToggleIncrease}
          onTogglePromotion={this.onTogglePromotion} />
        <EmployeesAddForm onAdd={this.addEmployees} />
      </div>
    )
  }
}

export default App;
