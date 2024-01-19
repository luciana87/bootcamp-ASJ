package com.bootcamp.todolist.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.todolist.entities.TareaEntity;
import com.bootcamp.todolist.services.TareaService;

@RestController
@RequestMapping("/tareas")
public class TareaController {
	
	private TareaService tareaService;
	
	public TareaController (TareaService tareaService) {
		this.tareaService = this.tareaService;
	}
	
	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		//return new ResponseEntity<>("Probando metodo de TareasEntity", HttpStatus.OK);
		return ResponseEntity.ok("Envío lo que tenga que devolver, en este caso un String");
	}

	@GetMapping("/{id}")
	public ResponseEntity<TareaEntity> getTareaById(@PathVariable Integer id) {
		TareaEntity tarea = tareaService.getById(id);
		return ResponseEntity.status(HttpStatus.FOUND).body(null);
		
	}

	@GetMapping()
	public ResponseEntity<List<TareaEntity>> getTareas() {
		List<TareaEntity> tareas = tareaService.getTareas();
		return ResponseEntity.ok(null);
		
	}
	
	@PostMapping()
	public ResponseEntity<String> createTarea(@RequestBody TareaEntity tarea) {
		return new ResponseEntity<>("Tarea creada con éxito", HttpStatus.CREATED);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<TareaEntity> updateTarea(@PathVariable Integer id, @RequestBody TareaEntity tarea) {
	
		return null;
	}
	
	@DeleteMapping("/{id}")
	public String deleteTarea(@PathVariable Integer id) {

		return null;
	}
	
}
