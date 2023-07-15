package interfaces;

public class Customer {
	private int id;
	private String firstName;
	private String lastName;
	
   public Customer() {
		// TODO Auto-generated constructor stub
	
		
	}

public Customer(int id, String firstName, String lastName) {
	//super();//eğer onu inherit eden bir sınıf varsa onun parametresiz constructerını da calıstırır demek ama su anda bu sınfın bir base i yok o yuzden gereksiz
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

}