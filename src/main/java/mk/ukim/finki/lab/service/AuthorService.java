package mk.ukim.finki.lab.service;

import mk.ukim.finki.lab.model.Author;
import mk.ukim.finki.lab.model.Country;

import java.util.List;
import java.util.Optional;

public interface AuthorService {

    List<Author> findAll();

    Optional<Author> findById(Long id);

    Optional<Author> findByName(String name);

    Optional<Author> save(String name, String surname, Long country_id);

    //Optional<Book> save(ProductDto productDto);

    Optional<Author> edit(Long id, String name, String surname, Long country_id);

    //Optional<Book> edit(Long id, ProductDto productDto);

    void deleteById(Long id);

}
