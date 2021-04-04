package mk.ukim.finki.lab.service;

import mk.ukim.finki.lab.model.Country;

import java.util.List;
import java.util.Optional;

public interface CountryService {

    List<Country> findAll();

    Optional<Country> findById(Long id);

    Optional<Country> findByName(String name);

    Optional<Country> save(String name, String continent);

    //Optional<Book> save(ProductDto productDto);

    Optional<Country> edit(Long id, String name, String continent);

    //Optional<Book> edit(Long id, ProductDto productDto);

    void deleteById(Long id);

}
