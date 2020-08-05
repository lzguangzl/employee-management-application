package com.ems.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.ems.entity.Employee;

public interface EmployeeService {

	ResponseEntity<List<Employee>> findAllEmployees();

	ResponseEntity<Employee> addEmployee(Employee employee);

	ResponseEntity<Employee> findEmployeeById(Long id);

	ResponseEntity<Employee> updateEmployee(Long id, Employee employeeDetails);

	ResponseEntity<Map<String, Boolean>> removeEmployee(Long id);

}
