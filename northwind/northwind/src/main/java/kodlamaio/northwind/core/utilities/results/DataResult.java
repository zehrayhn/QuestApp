package kodlamaio.northwind.core.utilities.results;

public class DataResult<T> extends Result{
//burada sadece success ve mesaj bilgisi değil bir de data dondurucez.
//data ne olabilir?employee,employee listesi, ürün olabilir, ürün listesi vs.
//yani birden fazla veri tipiyle calısabildiğimiz noktada genericlerle calışıyoruz.(<T>)
	
	private T data;
	public DataResult(T data, boolean success, String message) {
		super(success, message);
		//succes ve mesaj bilgisini ayrıca set etmemize gerek yok cunku benim base imde bu ikisini set eden conscructor var.
		//super, base sınıfın constructorlarını calıştırmaya yarıyor.
		//yani burada sadece t data yı set ederiz
		
	    this.data=data;
	} 

	public DataResult(T data, boolean success) {
		super(success);		
	    this.data=data;
	}
 
	public T getData() {
		return this.data;
	}
}
