package com.shreyash.employeesystemapi.service.impl;

import com.shreyash.employeesystemapi.entity.EmployeeEntity;
import com.shreyash.employeesystemapi.payload.EmployeeDto;
import com.shreyash.employeesystemapi.repository.EmployeeRepository;
import com.shreyash.employeesystemapi.service.EmployeeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    private ModelMapper modelMapper;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employeeDto,employeeEntity);

        EmployeeEntity savedEmployee = employeeRepository.save(employeeEntity);
        EmployeeDto newDto = new EmployeeDto();
        BeanUtils.copyProperties(savedEmployee,newDto);
        return newDto;
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
        List<EmployeeEntity> allEmployeesEntity = employeeRepository.findAll();
        List<EmployeeDto> allEmployeesDto = allEmployeesEntity
                .stream()
                .map(emp -> new EmployeeDto(
                        emp.getId()
                        ,emp.getFirstName()
                        ,emp.getLastName()
                        ,emp.getEmailId()))

                .collect(Collectors.toList()); // Added collect method to collect the stream into a list
        return allEmployeesDto;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        employeeRepository.delete(employeeEntity);
        Map<String,Boolean> response = new HashMap<>();
        return true;
    }
}
