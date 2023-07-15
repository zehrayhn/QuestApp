package nLayeredDemo.business.concretes;

import java.util.List;

import nLayeredDemo.business.abstracts.ProductService;
import nLayeredDemo.core.LoggerService;
import nLayeredDemo.dataAccess.abstracts.ProductDao;
import nLayeredDemo.dataAccess.concretes.HibernateProductDao;
import nLayeredDemo.entities.concretes.Product;

public class ProductManager implements ProductService {
 
	private ProductDao productDao;
	private LoggerService loggerService;
	
	public ProductManager(ProductDao productDao,LoggerService loggerService) {
		super();
		this.productDao = productDao;
		this.loggerService=loggerService;//mikroservis mimarisi
	}
	@Override
	public void add(Product product) {
		//i� kodlar� yaz�l�r.
		if(product.getCategoryId()==1){
			System.out.println("Bu kategoride �r�n kabul edilmiyor.");
			return;
		}
	//	HibernateProductDao  dao=new HibernateProductDao();
	//	dao.add(product);//bu �ekilde yaparsak kod �al���r ama alternatif sistemi dahil edemeyiz. Hibernatedao ya ba��ml� kla�r�z. 
	//ayr�ca unit testi uygulayamay�z cunku business ve dataAccess birbirine ba�lanm�� olur.
	//bunun i�in dependency injections yapar�z. yani productdao yu constuctr ile enjekte ederiz.
		this.productDao.add(product);
	    this.loggerService.logToSystem("�r�n eklendi."+product.getName());
	}

	

	@Override
	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
