package mk.ukim.finki.lab.model.exceptions;


public class UserNameExistsException extends RuntimeException{
    public UserNameExistsException(String username){
        super(String.format("User with username: %s already exists", username));
    }
}
