import React, { Component, Fragment } from "react";
import EmployeeService from "../services/EmployeeService";

class EmployeeView extends Component {
  state = {
    id: this.props.match.params.id,
    firstName: "",
    lastName: "",
    email: "",
    salary: 0,
  };

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id)
      .then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
          salary: employee.salary,
        });
      })
      .catch((err) => {
        this.props.history.push("/404");
      });
  }

  cancel = () => {
    this.setState({ firstName: "", lastName: "", email: "", salary: 0 });
    this.props.history.push("/employees");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <Fragment>
        <div className='container my-2'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3'>
              <h3 className='text-center mt-2'>View Employee</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label htmlFor='' className='col-form-label'>
                      First Name
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      className='form-control'
                      placeholder='First Name'
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      disabled='disabled'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='' className='col-form-label'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      className='form-control'
                      placeholder='Last Name'
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      disabled='disabled'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='' className='col-form-label'>
                      Email
                    </label>
                    <input
                      type='text'
                      name='email'
                      className='form-control'
                      placeholder='Email'
                      value={this.state.email}
                      onChange={this.handleChange}
                      disabled='disabled'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='salary' className='col-form-label'>
                      Salary
                    </label>
                    <input
                      type='text'
                      name='salary'
                      className='form-control'
                      placeholder='Salary'
                      value={this.state.salary}
                      onChange={this.handleChange}
                      disabled='disabled'
                    />
                  </div>
                  <button className='btn btn-danger' onClick={this.cancel}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default EmployeeView;
