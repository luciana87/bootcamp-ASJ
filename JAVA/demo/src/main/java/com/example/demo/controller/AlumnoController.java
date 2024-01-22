package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Alumno;

@RestController
@RequestMapping("/alumnos")
public class AlumnoController {
	
	 static List<Alumno> alumnos = new ArrayList<Alumno>(
			List.of(new Alumno(1, "Bob", "Patiño", 9.5),
					new Alumno(2, "Moe", "Sczyslak", 4),
					new Alumno(3, "Troy", "McLure", 2.6),
					new Alumno(4, "Edna", "Krabaples", 8.7))
		);
	
	
	@GetMapping("/listar")
	public List<Alumno> getAlumnos() {
		return alumnos;
	}
	
	@GetMapping("/{id}")
	public Alumno findAlumno(@PathVariable int id) {
		Alumno alumnoEncontrado = null;
		for (Alumno alumno : alumnos) {
			if(alumno.getId() == id) alumnoEncontrado = alumno;
		}
		return alumnoEncontrado;
	}
	
	@DeleteMapping("/{id}")
	public String deleteAlumnoById(@PathVariable int id) {
		String msjString = "Alumno no encontrado";
		Alumno alumnoEncontrado = null;
		for (Alumno alumno : alumnos) {
			if (alumno.getId() == id) {
				alumnoEncontrado = alumno;
				msjString = "Alumno "+alumno.getNombre()+" Eliminado correctamente.";
			}
		}
		this.alumnos.remove(alumnoEncontrado);
		return msjString;	
	}
	
	@PostMapping("/")
	public Alumno createAlumno(@RequestBody Alumno alumno) {
		alumno.setId(this.alumnos.size()+1);
		this.alumnos.add(alumno);
		return alumno;
	}
	 
	@PutMapping("/{id}")
	public Alumno updateAlumnById(@PathVariable int id, @RequestBody Alumno alumno) {
		for(int i = 0; i < this.alumnos.size(); i++) { 
			if (this.alumnos.get(i).getId() == id) {
				this.alumnos.remove(i);  
				this.alumnos.add(i, alumno); 
				return alumno;
			} 
		} 
		return null; 
	} 
	
/*	@PutMapping("/alumnos/modificar")
	public List<Alumno> updateAlumno(@RequestBody Alumno alumno) {
		for (int i = 0; i < this.alumnos.size(); i++) {
			if(alumno.getId() == this.alumnos.get(i).getId()) {
				this.alumnos.set(i, alumno);
			}
		}
		return this.alumnos;
	}
*/
}
