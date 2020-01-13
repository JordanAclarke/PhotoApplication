package com.photo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.domain.EntityScan;

@Entity
@Table
public class Photo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "photo_link")
	private String photoLink;
	@Column(name = "photo_name")
	private String photoName;
	@Column(name = "photo_description")
	private String photoDescription;
	
	private String quotes;
	
	public Photo() {
		
	}

	public Photo(String photoLink, String photoName, String photoDescription, String quotes) {
		super();
		this.photoLink = photoLink;
		this.photoName = photoName;
		this.photoDescription = photoDescription;
		this.quotes = quotes;
	}

	public String getPhotoLink() {
		return photoLink;
	}

	public void setPhotoLink(String photoLink) {
		this.photoLink = photoLink;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getPhotoDescription() {
		return photoDescription;
	}

	public void setPhotoDescription(String photoDescription) {
		this.photoDescription = photoDescription;
	}

	public String getQuotes() {
		return quotes;
	}

	public void setQuotes(String quotes) {
		this.quotes = quotes;
	}
	
	
	
	
	
}
