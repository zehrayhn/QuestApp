package kodlamaio.northwind.business.abstracts;

import java.util.List;

//import org.springframework.data.jpa.repository.Query;

import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.entities.concretes.Product;

public interface ProductService {

	DataResult<List<Product>> getAll();
	DataResult<List<Product>> getAll(int pageNo, int pageSize);
	DataResult<List<Product>> getAllSorted();
	Result add(Product product);

	//select*from products where product_name=abc(parametreyle gelecek olan) 	
	DataResult<Product> getByProductName(String productName);
		
	DataResult<Product> getByProductNameAndCategory_CategoryId(String productName, int categoryId);
		
	DataResult<List<Product>> getByProductNameOrCategory_CategoryId(String productName, int categoryId);
		
		//select*from products where category_id in(1,2,3,4)
  //  DataResult<List<Product>> getByCategoryIn(List<Integer> categories);
		
    DataResult<List<Product>> getByProductNameContains(String productName);
		
	DataResult<List<Product>> getByProductNameStartsWith(String productName);
		 
	DataResult<List<Product>> getByNameAndCategory_CategoryId(String productName, int categoryId);

}

