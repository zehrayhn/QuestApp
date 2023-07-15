package inheritance;

public class Main {

	public static void main(String[] args) {
		
		IndividualCustomer engin=new IndividualCustomer();
		engin.customerNumber= "123";
		CorporateCustomer hepsiburada=new CorporateCustomer();
        hepsiburada.customerNumber="23456";
        
        SendikaCustomer abc=new SendikaCustomer();
        abc.customerNumber="9999"; 
        
        CustomerManager customerManager=new CustomerManager();
        //customerManager.add(hepsiburada);
        //customerManager.add(engin);
        //customerManager.add(abc);
        //yukarıdaki command satırında tek tek yazmak yerine diziler yardımıyla tek satırda ekleme işlemini yaptık.
        Customer[] customers = {engin,abc,hepsiburada};
        customerManager.addMultiple(customers);
        
	}

}
