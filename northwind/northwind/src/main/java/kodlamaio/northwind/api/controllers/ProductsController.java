package kodlamaio.northwind.api.controllers;

import java.security.PublicKey;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.northwind.business.abstracts.ProductService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import kodlamaio.northwind.entities.concretes.Product;

@RestController //SEN BİR CONTROLLERSIN DEMEK
@RequestMapping("/api/products") //dış dunyadan bu domaine sahip biri istekte bulunursa o isteği bu controller karşılayacak demektir.
//istekler temel olarak iki türlüdür. bir,bana veri demek; bir de şu veriyi değiştir dediğimiz istek türleri vardır.
//veri istediğimiz zaman buna get request deniyor. 
public class ProductsController {
//ıos,android,web,angular gibi arayuzlerle anlaşabilmek için api controller kurarız. 
	//veri istediğimiz zaman buna get request deniyor. o yuzden tepesine getmapping yazıyoruz.
	
	private ProductService productService;
	
	@Autowired//productservice lazım der projeye gider kim productservice'i implemente etmiş =>productmanager implemente etmiş. bizim yerimize produtmanager'i new leyerek newlenmiş referans tipi prantez içindeki productServiceye yerleştiriyor. 
	public ProductsController(ProductService productService) {
	super();
	this.productService = productService;
}

	@GetMapping("/getall") //bu domainde bi istekte bulunulunursa 
	public DataResult<List<Product>> getAll(){//bu calısacak
          return this.productService.getAll();
}
	
	@PostMapping("/add")
	public Result add(@RequestBody Product product) {
		return this.productService.add(product);
	}
	
	@GetMapping("/getByProductName")
	public DataResult<Product> getByProductName(@RequestParam String productName){//requestParam yapılan isteği parametre olarak dondurecek.
		 return this.productService.getByProductName(productName);
	}
	
	@GetMapping("/getByProductNameAndCategoryId")
	public DataResult<Product> getByProductNameAndCategory_CategoryId(@RequestParam("productName") String productName , @RequestParam("categoryId") int categoryId){
		return this.productService.getByProductNameAndCategory_CategoryId(productName, categoryId);
	}
	
	@GetMapping("/getByProductNameContains")
	public DataResult<List<Product>> getByProductNameContains(@RequestParam String productName){
		return this.productService.getByProductNameContains(productName);
	}
	
	@GetMapping("/getAllByPage")
	public DataResult<List<Product>> getAll(int pageNo, int PageSize){
		 return this.productService.getAll(pageNo,PageSize);
	}
	
	@GetMapping("/getAllDesc")
	public DataResult<List<Product>> getAllSorted() {
		return this.productService.getAllSorted();
	}
	
	@GetMapping("/getByProductNameOrCategoryId")
	public DataResult<List<Product>> getByProductNameOrCategory_CategoryId(String productName, int categoryId){
		return this.productService.getByProductNameOrCategory_CategoryId(productName, categoryId);
	}
	
	
}

