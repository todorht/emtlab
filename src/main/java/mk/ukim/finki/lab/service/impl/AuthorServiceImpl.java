package mk.ukim.finki.lab.service.impl;

import mk.ukim.finki.lab.model.Author;
import mk.ukim.finki.lab.model.Country;
import mk.ukim.finki.lab.model.exceptions.AuthorNotFoundException;
import mk.ukim.finki.lab.model.exceptions.CountryNotFoundException;
import mk.ukim.finki.lab.repository.AuthorRepository;
import mk.ukim.finki.lab.repository.CountryRepository;
import mk.ukim.finki.lab.service.AuthorService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }

    @Override
    public Optional<Author> findById(Long id) {
        return this.authorRepository.findById(id);
    }

    @Override
    public Optional<Author> findByName(String name) {
        return this.authorRepository.findByNameLike(name);
    }

    @Override
    @Transactional
    public Optional<Author> save(String name, String surname, Long country_id) {
        Country country = this.countryRepository.findById(country_id).orElseThrow(()-> new CountryNotFoundException(country_id));
        Author author = new Author(name,surname,country);
        this.authorRepository.save(author);
        return Optional.of(author);
    }

    @Override
    @Transactional
    public Optional<Author> edit(Long id, String name, String surname, Long country_id) {
        Country country = this.countryRepository.findById(country_id)
                .orElseThrow(()-> new CountryNotFoundException(country_id));
        Author author = this.authorRepository.findById(id).orElseThrow(()->new AuthorNotFoundException(id));

        author.setName(name);
        author.setSurname(surname);
        author.setCountry(country);
        this.authorRepository.save(author);

        return Optional.of(author);
    }

    @Override
    public void deleteById(Long id) {
        this.authorRepository.deleteById(id);
    }
}
