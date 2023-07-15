package eTicaretDemoo.business.abstracts;

import java.util.List;

import eTicaretDemoo.entities.concretes.Customer;

public interface CustomerService {
void SingUp(Customer customer);
void SingIn(Customer customer);
List<Customer> getAll();
}
