package com.photo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.photo.model.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

}
