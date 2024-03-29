package com.shreyash.employeesystemapi.controller;

import com.shreyash.employeesystemapi.payload.EmployeeDto;
import com.shreyash.employeesystemapi.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("employees")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto employee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> allEmployee = employeeService.getAllEmployee();
        return new ResponseEntity<>(allEmployee,HttpStatus.OK);
    }
}
