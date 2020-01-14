package com.photo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.photo.model.Photo;
import com.photo.repository.PhotoRepository;

@Service
public class PhotoService {
	
	@Autowired
	private PhotoRepository pr;
	
	public void getPhoto(int id) {
		pr.findById(id);
	}
	
	public Photo addPhoto(Photo photo) {
		pr.save(photo);
		return photo;
	}
	public void deletePhoto(Photo photo) {
		pr.delete(photo);
	}

	

}
