package mk.ukim.finki.lab.model.dto;

import lombok.Data;
import mk.ukim.finki.lab.model.enums.Category;

@Data
public class BookDto {

    private String name;

    private Category category;

    private Long author;

    private int availableCopies;

    public BookDto(String name, Category category, Long author, int availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}
