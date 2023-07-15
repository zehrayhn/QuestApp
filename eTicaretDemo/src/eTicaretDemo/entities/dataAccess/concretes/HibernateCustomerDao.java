package eTicaretDemo.entities.dataAccess.concretes;

import java.util.List;

import eTicaretDemo.entities.concretes.Customer;
import eTicaretDemo.entities.dataAccess.abstracts.CustomerDao;

public class HibernateCustomerDao implements CustomerDao {

	@Override
	public void add(Customer customer) {
		System.out.println("Hibernate ile eklendi"+customer.getName());
		
	}

	@Override
	public void delete(Customer customer) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(Customer customer) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Customer get(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Customer> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
