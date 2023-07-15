package eTicaretDemoo.core;

import java.util.ArrayList;
import java.util.List;

import eTicaretDemoo.business.abstracts.VerificationService;

public class GoogleLoginAdapter implements VerificationService{
List<String> verificatedEmails= new ArrayList<String>();

@Override
public void verifyMail(String email) {
	verificatedEmails.add(email);
	System.out.println(email+"baþarýyla doðrulandý");
	
}

@Override
public void sendToVerifyMail(String email) {

	System.out.println(email+ "kullanýcýsýna doðrulama mail'i gönderildi");
	
}

@Override
public boolean checkVerifyAccount(String email) {
	if(verificatedEmails.contains(email));
	System.out.println(email+"baþarýyla doðruladný.");
	return false;
}

}
