package kodlamaio.northwind.business.concretes;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.northwind.business.abstracts.ProductService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import kodlamaio.northwind.core.utilities.results.SuccessResult;
import kodlamaio.northwind.dataAccess.abstracts.ProductDao;
import kodlamaio.northwind.entities.concretes.Product;

@Service // service anotasyonu ekledik. bu class projede servis görevi görecek anlamına geliyor. yani business görevini görecek olan kısımdır demek oluyor.
public class ProductManager implements ProductService {

	private ProductDao productDao; //productdao da jparepositroy de interface
	//autowired=gidiyo projeyi tarıyor. projede productdao ya karşılık gelen sınıf varsa onu yerleştiriyo. injectiıon u bu sekilde yapıyor.
	@Autowired //bu genellikle bir bağımlılık oluşturur. o projede genellikle tek bir instance dan gidebilirsiniz.
	public ProductManager(ProductDao productDao) {
		super();
		this.productDao = productDao;
	}
	
	//public List<Product> getAll(){
	//return this.productDao.findAll(); bu işlemi alttakine cevirdik.
//}
	
	
	
	@Override
	public DataResult<List<Product>>  getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Product>>
		(this.productDao.findAll(), "Data listelendi");

	}

	@Override
	public Result add(Product product) {
	this.productDao.save(product);//save metodu ile ekleme ve güncellemeleri yapabiliyoruz.
		return new SuccessResult("Üürn eklendi");
	}

	@Override
	public DataResult<Product> getByProductName(String productName) {
		return new SuccessDataResult<Product>(this.productDao.getByProductName(productName), "Data listelendi");
	}
	

@Override
public DataResult<Product> getByProductNameAndCategory_CategoryId(String productName, int categoryId) {
	return new SuccessDataResult<Product>
	(this.productDao.getByProductNameAndCategory_CategoryId( productName,categoryId), "Data listelendi");
}
	
	


	
	@Override
	public DataResult<List<Product>> getByProductNameOrCategory_CategoryId(String productName, int categoryId) {
		return new SuccessDataResult<List<Product>>
		(this.productDao.getByProductNameOrCategory_CategoryId(productName, categoryId), "Data listelendi");
	}

	@Override
	public DataResult<List<Product>> getByProductNameContains(String productName) {
		return new SuccessDataResult<List<Product>>
		(this.productDao.getByProductNameContains(productName), "Data listelendi");
	}

	@Override
	public DataResult<List<Product>> getByProductNameStartsWith(String productName) {
		return new SuccessDataResult<List<Product>>
		(this.productDao.getByProductNameStartsWith(productName), "Data listelendi");
	}
	
   //YETOO

	@Override
	public DataResult<List<Product>> getByNameAndCategory_CategoryId(String productName, int categoryId) {
		return new SuccessDataResult<List<Product>>
		(this.productDao.getByNameAndCategory_CategoryId(productName, categoryId), "Data listelendi");
	}

	@Override
	public DataResult<List<Product>> getAll(int pageNo, int pageSize) {
		
		Pageable pageable=PageRequest.of(pageNo-1, pageSize);
		
		return new SuccessDataResult<List<Product>>(this.productDao.findAll(pageable).getContent());//findall(pageable pageable) metotu ile sayfalndırma işlemini yaparız kolaylıkla. bu metotun kullanımı için yukarıdki işlemleri yapmamız gerekir.
                                                                                                  //pageable nin dönüş tipi farklı oldu için getContent dönüştürücüsünü ekledik	
	}

	@Override
	public DataResult<List<Product>> getAllSorted() {
		Sort sort=Sort.by(Sort.Direction.DESC,"productName");
		return new SuccessDataResult<List<Product>>
		(this.productDao.findAll(sort),"Başarılı");
	}

	

}
