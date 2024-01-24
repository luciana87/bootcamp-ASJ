package com.bootcamp.videos.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "videos")
public class VideoModel {
	
	@Id
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
    private String url;
    
    private String category;
    
    private String title;
    
    private String description;
    
    private int views;
    
    private int likes;
    
    private int dislikes;
    
    private int stars;
    
    private int starsVotes;
    
    public VideoModel() {
    	
    }
    

	
	public VideoModel(Integer id, String url, String category, String title, String description, int views, int likes,
			int dislikes, int stars, int starsVotes) {
		this.id = id;
		this.url = url;
		this.category = category;
		this.title = title;
		this.description = description;
		this.views = views;
		this.likes = likes;
		this.dislikes = dislikes;
		this.stars = stars;
		this.starsVotes = starsVotes;
	}



	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getViews() {
		return views;
	}
	public void setViews(int views) {
		this.views += views;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes += likes;
	}
	public int getDislikes() {
		return dislikes;
	}
	public void setDislikes(int dislikes) {
		this.dislikes += dislikes;
	}

	public int getStars() {
		return stars;
	}

	public void setStars(int stars) {
		this.stars += stars;
	}

	public int getStarsVotes() {
		return starsVotes;
	}

	public void setStarsVotes(int starsVotes) {
		this.starsVotes += starsVotes;
	}
    
    
    
}
