import React, { Component, Fragment } from "react";
import EmployeeService from "../services/EmployeeService";

class EmployeeList extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    EmployeeService.getEmployees()
      .then((res) => {
        this.setState({ employees: res.data });
      })
      .catch((err) => console.log(err));
  }

  addEmployee = () => {
    this.props.history.push("/employees/add");
  };

  viewEmployee = (id) => {
    this.props.history.push(`/employees/view/${id}`);
  };

  editEmployee = (id) => {
    this.props.history.push(`/employees/update/${id}`);
  };

  deleteEmployee = (id) => {
    if (window.confirm("Are you sure you wish to delete this employee?")) {
      EmployeeService.deleteEmployee(id).then((res) => {
        this.setState({
          employees: this.state.employees.filter(
            (employee) => employee.id !== id
          ),
        });
      });
    }
  };

  render() {
    const { employees } = this.state;
    return (
      <Fragment>
        <h2 className='text-center mt-2'>Employee List</h2>
        <div className='row'>
          <button className='btn btn-primary mb-2' onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered table-responsive-sm text-center'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.salary}</td>
                    <td>
                      <button
                        className='btn btn-info'
                        onClick={() => this.viewEmployee(employee.id)}
                      >
                        View
                      </button>
                      <button
                        className='btn btn-warning ml-md-2'
                        onClick={() => this.editEmployee(employee.id)}
                      >
                        Update
                      </button>
                      <button
                        className='btn btn-danger ml-md-2'
                        onClick={() => this.deleteEmployee(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
export default EmployeeList;
