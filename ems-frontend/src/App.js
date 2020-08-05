import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// components
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeUpdate from "./components/EmployeeUpdate";
import EmployeeView from "./components/EmployeeView";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={EmployeeList} />
            <Route exact path='/employees' component={EmployeeList} />
            <Route exact path='/employees/add' component={EmployeeCreate} />
            <Route
              exact
              path='/employees/update/:id'
              component={EmployeeUpdate}
            />
            <Route exact path='/employees/view/:id' component={EmployeeView} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
