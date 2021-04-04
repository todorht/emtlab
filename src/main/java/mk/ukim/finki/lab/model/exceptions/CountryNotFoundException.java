package mk.ukim.finki.lab.model.exceptions;

import mk.ukim.finki.lab.model.Country;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CountryNotFoundException extends RuntimeException{

    public CountryNotFoundException(Long id) {
        super(String.format("Country with id: %d was not found", id));
    }
}