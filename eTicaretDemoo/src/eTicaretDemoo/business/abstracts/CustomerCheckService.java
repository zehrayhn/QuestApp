package eTicaretDemoo.business.abstracts;

import eTicaretDemoo.entities.concretes.Customer;

public interface CustomerCheckService {
    boolean CheckFirstName(Customer customer);
    boolean CheckLastName(Customer customer);
    boolean CheckPassword(Customer customer);
    boolean CheckEmail(Customer customer);
    boolean uniqueEmail(Customer customer);
    boolean IsValid(Customer customer);
}
