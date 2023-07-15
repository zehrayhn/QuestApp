package eTicaretDemoo;

import eTicaretDemoo.business.abstracts.CustomerCheckService;
import eTicaretDemoo.business.concretes.CustomerCheckManager;
import eTicaretDemoo.business.concretes.CustomerManager;
import eTicaretDemoo.business.concretes.MailVerificationManager;
import eTicaretDemoo.dataAccess.concretes.HibernateCustomerDao;
import eTicaretDemoo.entities.concretes.Customer;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
 Customer customer=new Customer();
 customer.setId(1);
 customer.setName("Zehra");
 customer.setLastName("");
 customer.setEmail("zehrayhn@outlook.com");
 customer.setPassword("123234");
 
 Customer customer2=new Customer();
 customer2.setId(1);
 customer2.setName("Zehra");
 customer2.setLastName("Ayhan");
 customer2.setEmail("zehrayhn@outlook.com");
 customer2.setPassword("123234");
 Customer customer4=new Customer();
 customer4.setId(1);
 customer4.setName("Zehra");
 customer4.setLastName("Ayhan");
 customer4.setEmail("zehrayhn@outlook.com");
 customer4.setPassword("123234");
 
 CustomerManager customerManager=new CustomerManager(new CustomerCheckManager(), new MailVerificationManager(), new HibernateCustomerDao());
 
 customerManager.SingUp(customer2);
 customerManager.SingUp(customer);
		 
	}

}
