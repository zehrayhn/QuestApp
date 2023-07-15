package interfaces;

public class EmailLogger implements Logger{

	@Override
	public void log(String message) {
			System.out.println("Emaile loglandı: "+message);
			
		
		
	}
	
		
	
}
