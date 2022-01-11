package com.employeePortal.demo.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.employeePortal.demo.entities.EmployeeLogin;

@Repository
public class Test {

	@Autowired
	EntityManager output;
	
	Query query;
		public List<EmployeeLogin> getDetails() {
			
			 List<EmployeeLogin> list= null;
			 
			try {
				
			
				String a="select emp from EmployeeLogin emp ";
				
				query=output.createQuery(a);
				list=query.getResultList();
				
				
				
				 return list;
			}catch(Exception e)
			{
				System.out.println("Error"+e);
			}
			
			return list;
			
		
			
		}
}
