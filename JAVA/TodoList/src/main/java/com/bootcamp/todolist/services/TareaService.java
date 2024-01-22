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
	
	public TareaService (TareaRepository tareaRepository) {
		this.tareaRepository = tareaRepository;
	}
	
	public TareaEntity createTarea (TareaEntity tarea) {
		TareaEntity tareaEntity = tareaRepository.save(tarea);
		return tarea;
		
	}

	public Optional<TareaEntity> getById(Integer id) {
		Optional<TareaEntity> tarea = this.tareaRepository.findById(id);
		return tarea;
	}
	

	public List<TareaEntity> getTareas(){
		return tareaRepository.findAll();		
	}

	public void deleteTarea(Integer id) {
		this.tareaRepository.deleteById(id);

	}

	public void updateTarea(Integer id, TareaEntity tarea) throws Exception {
        Optional<TareaEntity> tareaOptional = tareaRepository.findById(id);
        if (tareaOptional.isEmpty()){
            throw new Exception("Proveedor no encontrado.");
        }
        
        TareaEntity tareaAReemplazar = tareaOptional.get();
        tareaAReemplazar.setName(tarea.getName());
        tareaAReemplazar.setText(tarea.getText());
        tareaAReemplazar.setStatus(tarea.isStatus());
        tareaAReemplazar.setDeleted(tarea.isDeleted());
        tareaAReemplazar.setCreated(tarea.getCreated());
        
        tareaRepository.save(tareaAReemplazar);
    }

}
