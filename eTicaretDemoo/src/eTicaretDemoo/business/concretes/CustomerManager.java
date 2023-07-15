package eTicaretDemoo.business.concretes;

import java.util.List;

import eTicaretDemoo.business.abstracts.CustomerCheckService;
import eTicaretDemoo.business.abstracts.CustomerService;
import eTicaretDemoo.business.abstracts.VerificationService;
import eTicaretDemoo.dataAccess.abstracts.CustomerDao;
import eTicaretDemoo.entities.concretes.Customer;

public class CustomerManager implements CustomerService{
CustomerCheckService customerCheckService;
VerificationService mailVerificationService;
CustomerDao customerDao;

	public CustomerManager(CustomerCheckService customerCheckService, VerificationService mailVerificationService,
		CustomerDao customerDao) {
	super();
	this.customerCheckService = customerCheckService;
	this.mailVerificationService = mailVerificationService;
	this.customerDao = customerDao;
}

	@Override
	public void SingUp(Customer customer) {
		 if(customerCheckService.IsValid(customer)==true) {
			System.out.println(customer.getName()+"Kullanýcý baþrýyla sisteme kaydedildi."); 
			mailVerificationService.sendToVerifyMail(customer.getEmail());
			customerDao.add(customer);
		
		 }
		
	}

	@Override
	public void SingIn(Customer customer) {
		//bu kodu çalýþtýrarak doðrulama mailine týklamýþýz gibi düþünüyoruz.
	mailVerificationService.verifyMail(customer.getEmail());
	if(customerDao.getPassword(customer.getPassword())&&customerDao.getEmail(customer.getEmail())
			&& mailVerificationService.checkVerifyAccount(customer.getEmail())==true) {
		System.out.println("Kullanýcý giriþi baþarýyla yapýldý.");
	}else if (mailVerificationService.checkVerifyAccount(customer.getEmail())==false) {
		System.out.println("Mail adresinizi doðrulamanýz gerekiyor. ");
			
	}else {
		System.out.println("Kullanýcý bilgileri yanlýþ, lütfen kontrol ediniz.");
	}
		
	}
	
	@Override
	public List<Customer> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
