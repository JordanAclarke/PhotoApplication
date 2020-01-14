package com.photo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.photo.model.*;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Integer> {

}
