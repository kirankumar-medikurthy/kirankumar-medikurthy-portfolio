package kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.repository;

import kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Service
public interface ServiceRepository extends JpaRepository<Service,Integer> {
}
