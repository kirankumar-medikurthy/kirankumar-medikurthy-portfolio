package kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.service.serviceimpl;


import kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.model.Project;
import kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.repository.ProjectRepository;
import kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceServiceImpl {
    @Autowired
    ServiceRepository serviceRepository;
    @Override
    public kirankumarmedikurthyportfolio.example.kirankumarmedikurthyportfolio.model.Service create(Project project){
        return serviceRepository.save(project);
    }

    @Override
    public List<Project> getAllProjects() {
        return serviceRepository.findAll();
    }

    @Override
    public Project getProjectById(Integer id) {
        return serviceRepository.findById(id).get();
    }

    @Override
    public  Project update(Project project) {
        return serviceRepository.save(project);
    }

    @Override
    public String deleteProject(Integer id) {
        serviceRepository.deleteById(id);
        return " project details are deleted successfully from the database";
    }
}
