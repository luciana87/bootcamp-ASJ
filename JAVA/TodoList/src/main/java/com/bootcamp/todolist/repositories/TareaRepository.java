package com.bootcamp.todolist.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.todolist.entities.TareaEntity;

public interface TareaRepository extends JpaRepository<TareaEntity, Integer>{
	
	@Query(value = "SELECT * FROM tareas WHERE text LIKE %:texto%", nativeQuery = true)
	List<TareaEntity> myQuery(@Param("texto") String texto);
}
