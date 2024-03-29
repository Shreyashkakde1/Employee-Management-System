package com.shreyash.employeesystemapi.repository;

import com.shreyash.employeesystemapi.entity.EmployeeEntity;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {
}
