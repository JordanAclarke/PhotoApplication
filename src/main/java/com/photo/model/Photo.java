package com.photo.model;

public class Photo {

	private String photoLink;
	private String photoName;
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
