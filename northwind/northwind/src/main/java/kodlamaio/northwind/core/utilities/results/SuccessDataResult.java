package kodlamaio.northwind.core.utilities.results;

public class SuccessDataResult<T> extends DataResult<T> {

	
	public SuccessDataResult(T data, String message) {
		super(data,true, message);
		//mesaj ve data dondurmek istediğimizde
	}

	public SuccessDataResult(T data) {
		super(data,true);//sadece data dondurmek istediğmizde
	}
	
	public SuccessDataResult(String message) {
		super(null,true,message); //sadece mesaj dondurmek istediğimzde
	}
	
	public SuccessDataResult() {
		super(null, true);
	}

	
}
