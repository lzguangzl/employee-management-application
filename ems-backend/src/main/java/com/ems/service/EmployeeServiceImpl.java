package com.ems.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ems.entity.Employee;
import com.ems.exception.ResourceNotFoundException;
import com.ems.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public ResponseEntity<List<Employee>> findAllEmployees() {
		List<Employee> employees =  employeeRepository.findAll();
		if(employees.size() == 0) {
			return ResponseEntity.noContent().build();
		}
		return new ResponseEntity<>(employees, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Employee> addEmployee(Employee employee) {
		Employee savedEmployee = employeeRepository.save(employee);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
	}

	@Override
	public ResponseEntity<Employee> findEmployeeById(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
		return ResponseEntity.ok(employee);
	}

	@Override
	public ResponseEntity<Employee> updateEmployee(Long id, Employee employeeDetails) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmail(employeeDetails.getEmail());
		employee.setSalary(employeeDetails.getSalary());

		Employee updatedEmployee = employeeRepository.save(employee);

		return ResponseEntity.ok(updatedEmployee);
	}

	@Override
	public ResponseEntity<Map<String, Boolean>> removeEmployee(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
		employeeRepository.delete(employee);

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}

}
