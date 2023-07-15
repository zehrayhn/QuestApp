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
		//iþ kodlarý yazýlýr.
		if(product.getCategoryId()==1){
			System.out.println("Bu kategoride ürün kabul edilmiyor.");
			return;
		}
	//	HibernateProductDao  dao=new HibernateProductDao();
	//	dao.add(product);//bu þekilde yaparsak kod çalýþýr ama alternatif sistemi dahil edemeyiz. Hibernatedao ya baðýmlý klaýrýz. 
	//ayrýca unit testi uygulayamayýz cunku business ve dataAccess birbirine baðlanmýþ olur.
	//bunun için dependency injections yaparýz. yani productdao yu constuctr ile enjekte ederiz.
		this.productDao.add(product);
	    this.loggerService.logToSystem("ürün eklendi."+product.getName());
	}

	

	@Override
	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
