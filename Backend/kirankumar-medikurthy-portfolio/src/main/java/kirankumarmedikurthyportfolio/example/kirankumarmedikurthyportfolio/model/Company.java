package kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String company_name;

    @Column
    private String company_logo;

    @Column
    private String company_url;

    @Column
    private String designation;

    @Column
    private String company_description;

    @Column
    private String number_of_years;

    @Column
    private List<String> achievements;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompany_name() {
        return company_name;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public String getCompany_logo() {
        return company_logo;
    }

    public void setCompany_logo(String company_logo) {
        this.company_logo = company_logo;
    }

    public String getCompany_url() {
        return company_url;
    }

    public void setCompany_url(String company_url) {
        this.company_url = company_url;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getCompany_description() {
        return company_description;
    }

    public void setCompany_description(String company_description) {
        this.company_description = company_description;
    }

    public String getNumber_of_years() {
        return number_of_years;
    }

    public void setNumber_of_years(String number_of_years) {
        this.number_of_years = number_of_years;
    }

    public List<String> getAchievements() {
        return achievements;
    }

    public void setAchievements(List<String> achievements) {
        this.achievements = achievements;
    }
}
