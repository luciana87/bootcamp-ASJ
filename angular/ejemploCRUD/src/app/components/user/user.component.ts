
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: UserServiceService) { }

  userList: any = [];


  ngOnInit(): void {
    // console.log(this.service.getUsers());
    this.getList();
  }

  //RESET formulario
  resetForm(form: any) {
    form.reset(); // Reset limpia los inputs del form
    this.service.dataUser = {
      id: -1
    };
  }

  //OBTENER la lista de usuaios.
  getList() {
    this.service.getUsers2().subscribe((respuesta) => { //Me devuelve la petición a la API y la muestra. La lista de los usuarios
      console.log("Respuesta del GET" + respuesta);
      this.userList = respuesta.data;
    });

  }

  //CREAR nuevo usuario
  create(form: NgForm) {

    if (form.value.id != -1) { //si es diferente a -1 quiere decir que obtuve un user para modificar

      //actualizo
      this.service.updateUser(form.value).subscribe((respuesta) => {
        console.log("Respuesta del PUT" + respuesta);
        this.resetForm(form);
        this.getList();
        return

      });
    } else {

      //CREO UNO NUEVO: Forma larga: validación de datos capturados en el formulario
      if (!form.valid) {
        console.log("Formulario inválido.");
        return;

      } else {
        const usuario = {
          name: form.value.name,
          job: form.value.job
        }
        this.service.createUser(usuario).subscribe((respuesta) => {
          console.log("Respuesta del POST" + respuesta);
          this.resetForm(form);
          this.getList(); // Para que se vea el nuevo usuario en la lista.
        });
      }
    }
  }




  //Forma corta:
  // this.service.createUser(form.value).subscribe ((respuesta) => {
  //   console.log(respuesta);

  // })





  // ELIMINAR:
  delete(id: any) {
    // alert("Usuario eliminado " + id);
    let confirmacion = confirm("¿Desea eliminar el usuario #" + id + " ?")
    if (confirmacion) {
      this.service.deleteUser(id).subscribe((respuesta) => {
        console.log("Respuesta de eliminar. Se eliminó", respuesta);

      })
    }
    //acá tengo que llamar al servicio para que el servicio lo elimine
  }


  //EDITAR:
  update(user: any) {
    console.log(user);

    this.service.dataUser = {
      id: user.id,
      name: user.first_name,
      job: user.job //hardcodeado?
    }
  }

}
