package mk.ukim.finki.lab.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long author_id;

    private String name;
    private String surname;

    @OneToOne
    private Country country;

    public Author(String name, String surname, Country country) {
        this.name = name;
        this.surname = surname;
        this.country = country;
    }

    public Author() {

    }
}
