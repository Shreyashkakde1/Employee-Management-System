package com.shreyash.employeesystemapi.service;

import com.shreyash.employeesystemapi.payload.EmployeeDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);
    List<EmployeeDto> getAllEmployee();
}
