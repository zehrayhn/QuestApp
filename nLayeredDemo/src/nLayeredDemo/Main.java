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
       
	//bir projede entityler hari� new liyorsak anlamally�z ki s�k�n�t� ya�ayaca��z.
        //ToDo: Spring Ioc ile ��z�lecek.
		ProductService productService=new ProductManager(new AbcProductDao(),new JLoggerManagerAdapter());
		Product product=new Product(1,2,"Elma",12,50);
		productService.add(product);
	}

}
 