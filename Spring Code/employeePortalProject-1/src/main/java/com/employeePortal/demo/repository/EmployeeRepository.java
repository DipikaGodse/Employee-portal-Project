package com.employeePortal.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employeePortal.demo.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
