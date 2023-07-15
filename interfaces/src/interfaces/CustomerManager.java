package interfaces;

public class CustomerManager {
	private Logger[] loggers;
	
	public CustomerManager(Logger[] loggers) {
		this.loggers = loggers;
	}
	
	//lossly-tightly coupled
	public void add(Customer customer) {
   System.out.println("Müşteri eklendi "+customer.getFirstName());
   //this.logger.log(customer.getFirstName());tekli loglama yaparken
   
  // for (Logger logger : loggers) {
	 //  logger.log(customer.getFirstName());
	//Utils utils=new Utils();
	//burada sürekli newlwmwk istemediğimiz için sınfımızı static yaparız.
	Utils.RunLogger(loggers, customer.getFirstName());
}

	

	public void delete(Customer customer) {
		System.out.println("Müşteri silindi "+customer.getFirstName());
		//this.logger.log(customer.getFirstName());
	
		// for (Logger logger : loggers) {
			 //  logger.log(customer.getFirstName());
		//aynı kod satırını sürekli yazmamak için utils sınıfı oluşturduk ve şimdi onu cagırarak for u kullanmıs olacagız.
		Utils.RunLogger(loggers, customer.getFirstName());
		}
	}
	


