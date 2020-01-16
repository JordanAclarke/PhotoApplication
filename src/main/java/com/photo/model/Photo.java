package com.photo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Photo")
public class Photo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "photo_link")
	private String photoLink;
	
	@Column(name = "caption")
	private String caption;
	
	private String quotes;
	
	private int hidden;
	
	public Photo() {
		
	}

	public Photo(String photoLink, String caption, String quotes) {
		super();
		this.photoLink = photoLink;
		this.caption = caption;
		this.quotes = quotes;
		this.hidden = this.id;
	}

	public String getPhotoLink() {
		return photoLink;
	}

	public void setPhotoLink(String photoLink) {
		this.photoLink = photoLink;
	}

	public String getPhotoDescription() {
		return caption;
	}

	public void setPhotoDescription(String photoDescription) {
		this.caption = photoDescription;
	}

	public String getQuotes() {
		return quotes;
	}

	public void setQuotes(String quotes) {
		this.quotes = quotes;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public int getId() {
		return id;
	}

	
	
	
	
	
}
