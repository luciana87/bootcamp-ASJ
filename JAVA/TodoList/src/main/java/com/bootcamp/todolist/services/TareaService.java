package com.bootcamp.todolist.services;

import java.lang.foreign.Linker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.todolist.entities.TareaEntity;
import com.bootcamp.todolist.repositories.TareaRepository;

@Service
public class TareaService {
	
	private TareaRepository tareaRepository;
	
	public TareaService () {}
	
	public TareaService (TareaRepository tareaRepository) {
		this.tareaRepository = tareaRepository;
	}
	
	public void createTarea () {}

	public TareaEntity getById(Integer id) {
		Optional<TareaEntity> tareaObtenida = tareaRepository.findById(id);
		if(tareaObtenida.isPresent()) {
			
		}
		return null;
	}
	

	public List<TareaEntity> getTareas(){
		return tareaRepository.findAll();		
	}

}
