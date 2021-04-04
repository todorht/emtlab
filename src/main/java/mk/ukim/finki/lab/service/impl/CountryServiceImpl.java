package mk.ukim.finki.lab.service.impl;

import mk.ukim.finki.lab.model.Country;
import mk.ukim.finki.lab.model.exceptions.CountryNotFoundException;
import mk.ukim.finki.lab.repository.CountryRepository;
import mk.ukim.finki.lab.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> findAll() {
        return this.countryRepository.findAll();
    }

    @Override
    public Optional<Country> findById(Long id) {
        return this.countryRepository.findById(id);
    }

    @Override
    public Optional<Country> findByName(String name) {
        return this.countryRepository.findByName(name);
    }

    @Override
    public Optional<Country> save(String name, String continent) {
        if (this.countryRepository.findByName(name).isPresent())
            return this.countryRepository.findByName(name);
        else return Optional.of(new Country(name,continent));

    }

    @Override
    public Optional<Country> edit(Long id, String name, String continent) {
        Country country = this.countryRepository.findById(id).orElseThrow(()->new CountryNotFoundException(id));
        country.setName(name);
        country.setContinent(continent);
        this.countryRepository.save(country);
        return Optional.of(country);
    }

    @Override
    public void deleteById(Long id) {
        this.countryRepository.deleteById(id);
    }
}
