package com.bootcamp.videos.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.videos.models.VideoModel;
import com.bootcamp.videos.services.VideoService;

@RestController
@RequestMapping(path = "/videos")
@CrossOrigin(origins = "http://localhost:4200")
public class VideoController {

	@Autowired
	VideoService videoService;
	
	@GetMapping()
	public ResponseEntity<List<VideoModel>> getVideos(){
		return new ResponseEntity<List<VideoModel>>(videoService.getVideos(),HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<VideoModel>> getVideoById(@PathVariable Integer id){
		return new ResponseEntity<Optional<VideoModel>>(videoService.getVideoById(id),HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<VideoModel> postVideo(@RequestBody VideoModel video) {
		return new ResponseEntity<VideoModel>(videoService.postVideo(video),HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteVideo(@PathVariable Integer id) {
		videoService.deleteVideo(id);
		return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
	}
	
	@PatchMapping("/likes/{id}")
	public ResponseEntity<VideoModel> addLike(@PathVariable Integer id, @RequestBody Integer cant) {
		return new ResponseEntity<VideoModel>(videoService.addLike(id, cant),HttpStatus.OK);
	}
	
	@PatchMapping("/dislikes/{id}")
	public ResponseEntity<VideoModel> addDislike(@PathVariable Integer id, @RequestBody Integer cant) {
		return new ResponseEntity<VideoModel>(videoService.addDislike(id, cant),HttpStatus.OK);
	}
	
	@PatchMapping("/views/{id}")
	public ResponseEntity<VideoModel> addView(@PathVariable Integer id, @RequestBody Integer cant) {
		return new ResponseEntity<VideoModel>(videoService.addView(id, cant),HttpStatus.OK);
	}
	
	@PatchMapping("/stars/{id}")
	public ResponseEntity<VideoModel> addStars(@PathVariable Integer id, @RequestBody Integer cant) {
		return new ResponseEntity<VideoModel>(videoService.addStars(id, cant),HttpStatus.OK);
	}
}
