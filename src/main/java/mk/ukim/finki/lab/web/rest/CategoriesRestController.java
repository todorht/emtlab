package mk.ukim.finki.lab.web.rest;

import mk.ukim.finki.lab.model.enums.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/categories")
public class CategoriesRestController {

    @GetMapping
    public List<String> findAll(){
        return Stream.of(Category.values())
                .map(Category::name)
                .collect(Collectors.toList());
    }
}
