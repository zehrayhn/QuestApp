package nLayeredDemo;

import java.util.function.ToDoubleBiFunction;

import nLayeredDemo.business.abstracts.ProductService;
import nLayeredDemo.business.concretes.ProductManager;
import nLayeredDemo.core.JLoggerManagerAdapter;
import nLayeredDemo.dataAccess.concretes.AbcProductDao;
import nLayeredDemo.dataAccess.concretes.HibernateProductDao;
import nLayeredDemo.entities.concretes.Product;

public class Main {

	public static void main(String[] args) {
       
	//bir projede entityler hariç new liyorsak anlamallyýz ki sýkýnýtý yaþayacaðýz.
        //ToDo: Spring Ioc ile çözülecek.
		ProductService productService=new ProductManager(new AbcProductDao(),new JLoggerManagerAdapter());
		Product product=new Product(1,2,"Elma",12,50);
		productService.add(product);
	}

}
 