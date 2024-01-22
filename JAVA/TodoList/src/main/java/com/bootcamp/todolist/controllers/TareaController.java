package com.bootcamp.todolist.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.data.projection.TargetAware;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:4200")
public class TareaController {
	
	private TareaService tareaService;
	
	public TareaController (TareaService tareaService) {
		this.tareaService = tareaService;
	}
	
	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		return ResponseEntity.ok("Envío lo que tenga que devolver, en este caso un String");
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<TareaEntity>> getTareaById(@PathVariable Integer id) {
		return ResponseEntity.ok(tareaService.getById(id));
	}

	@GetMapping()
	public ResponseEntity<List<TareaEntity>> getTareas() {
		return ResponseEntity.ok(tareaService.getTareas());
		
	}
	
	@PostMapping("/crear")
	public ResponseEntity<TareaEntity> createTarea(@RequestBody TareaEntity tarea) {
		return new ResponseEntity<>(tareaService.createTarea(tarea),HttpStatus.CREATED);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateTarea(@PathVariable Integer id, @RequestBody TareaEntity tarea) {
		try {
			this.tareaService.updateTarea(id,tarea);
			return new ResponseEntity(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}
	   
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTarea(@PathVariable Integer id) {
		tareaService.deleteTarea(id);
		return ResponseEntity.ok("Se eliminó correctamente");
	}
	
}
