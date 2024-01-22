package com.bootcamp.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bootcamp.todolist.entities.TareaEntity;

public interface TareaRepository extends JpaRepository<TareaEntity, Integer>{
	

}
