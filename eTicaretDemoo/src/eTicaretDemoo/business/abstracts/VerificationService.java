package eTicaretDemoo.business.abstracts;

public interface VerificationService {
    void verifyMail(String email);
    void sendToVerifyMail(String email);
    boolean checkVerifyAccount(String email);
}
