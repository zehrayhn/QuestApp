package oopIntro;

//import java.util.Iterator;

//import org.jcp.xml.dsig.internal.SignerOutputStream;

public class Main {

	public static void main(String[] args) {
		
		Product product1= new Product(1,"lenova v14",15000,"16 gb ram",12);
		
		Product product2= new Product();
		product2.setId(2);
		product2.setName("lenova v15");
		product2.setDetail("16gbram");
		product2.setDiscount(10);
		product2.setUnitPrice(16000);
		
		//
		
		System.out.println(product2.getUnitPriceAfterDiscount());
		
		//Product product3= new Product();
	
		
		//Product[] products= {product1,product2,product3};
		
		//for (Product product : products) {
		//	System.out.println( product.name);
		//}
			
		
		//System.out.println(products.length);
		 
		Category category1=new Category();
		category1.id=1;
		category1.name="bilgisayar";
		Category category2=new Category();
		category2.id=1;
		category2.name="ev/bahçe"; 
	
		ProductManager productManager=new ProductManager();
		productManager.addToCart(product1); 
		productManager.addToCart(product2);
		//productManager.addToCart(product3 ); 
	}
	


}