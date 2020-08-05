package com.ems.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.entity.Employee;
import com.ems.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1")
@Validated
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	/**
	 * Get all employees
	 */
	@GetMapping(path = "/employees")
	public ResponseEntity<List<Employee>> getAllEmployees() {
		return employeeService.findAllEmployees();
	}

	/**
	 * Create employee
	 */
	@PostMapping(path = "/employees")
	public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}

	/**
	 * Get employee by id
	 */
	@GetMapping(path = "/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		return employeeService.findEmployeeById(id);
	}

	/**
	 * Update employee by id
	 */
	@PutMapping(path = "/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @Valid @RequestBody Employee employeeDetails) {
		return employeeService.updateEmployee(id, employeeDetails);
	}

	/**
	 * Delete employee by id
	 */
	@DeleteMapping(path = "/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		return employeeService.removeEmployee(id);
	}
}
