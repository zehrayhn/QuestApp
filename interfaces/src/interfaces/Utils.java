package interfaces;
//util=araç
//JAVA DA CLASSLAR STATİC OLAMAZ! (ÜST CLASS STATİC OLAMAZ CLASSIN İÇİNDE YENİ BİR CLASS OLUŞTURURSAK YENİ CLASSI STATİC YAPABİLİRİZ.)
public class Utils {
     public static void RunLogger(Logger[] loggers, String message) {
    	 for (Logger logger : loggers) { 
    		   logger.log(message);
    		
    	}
     }
}
