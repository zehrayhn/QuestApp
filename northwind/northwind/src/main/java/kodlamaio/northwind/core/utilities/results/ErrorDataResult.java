package kodlamaio.northwind.core.utilities.results;

public class ErrorDataResult<T> extends DataResult<T>{

	public ErrorDataResult(T data, String message) {
		super(data,false, message);
		//mesaj ve data dondurmek istediğimizde
	}

	public ErrorDataResult(T data) {
		super(data,false);//sadece data dondurmek istediğmizde
	}
	
	public ErrorDataResult(String message) {
		super(null,false,message); //sadece mesaj dondurmek istediğimzde
	}
	
	public ErrorDataResult() {
		super(null, false);
	} 
	
}
