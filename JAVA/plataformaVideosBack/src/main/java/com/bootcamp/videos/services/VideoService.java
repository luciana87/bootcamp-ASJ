package com.bootcamp.videos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.videos.models.VideoModel;
import com.bootcamp.videos.repositories.VideoRepository;

@Service
public class VideoService {

	@Autowired
	VideoRepository videoRepository;
	
	public List<VideoModel> getVideos() {
		return videoRepository.findAll();
	}
	
	public Optional<VideoModel> getVideoById(Integer id) {
		return videoRepository.findById(id);
	}
	
	public VideoModel postVideo(VideoModel video) {
		return videoRepository.save(video);
	}
	
	public void deleteVideo(Integer id) {
		videoRepository.deleteById(id);
	}
	
	public VideoModel addLike(Integer id, Integer cant) {
		VideoModel v = videoRepository.findById(id).get();
		if (v != null) {
			v.setLikes(cant);
			return videoRepository.save(v);
		}
		return null;
	}
	
	public VideoModel addDislike(Integer id, Integer cant) {
		VideoModel v = videoRepository.findById(id).get();
		if (v != null) {
			v.setDislikes(cant);
			return videoRepository.save(v);
		}
		return null;
	}
	
	public VideoModel addView(Integer id, Integer cant) {
		VideoModel v = videoRepository.findById(id).get();
		if (v != null) {
			v.setViews(cant);
			return videoRepository.save(v);
		}
		return null;
	}
	
	public VideoModel addStars(Integer id, Integer cant) {
		VideoModel v = videoRepository.findById(id).get();
		if (v != null) {
			v.setStars(cant);
			v.setStarsVotes(1);
			return videoRepository.save(v);
		}
		return null;
	}
}
