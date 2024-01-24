package com.bootcamp.videos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.videos.models.VideoModel;

public interface VideoRepository extends JpaRepository<VideoModel, Integer> {

}
