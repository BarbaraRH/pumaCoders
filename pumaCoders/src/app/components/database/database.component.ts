import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  volunteers = [
    { name: "Karina Sande", image: "", email: "ksande@gmail.com", password: "123456", city: "Valparaiso", activity: "Biologa", workPlace: "Universidad de Chile. Facultad de Ciencias", STEM: "Ciencia", subSTEM: "Biología, Biología Marina", linkedin: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur laborum fugiat deserunt laudantium ipsum, consequuntur maiores labore quam magni provident minus consectetur, tempore amet cumque, quod eveniet dolores voluptate?", calendar: [] },
    { name: "Ximena Reyes", image: "", email: "ximreyes@gmail.com", password: "123456", city: "Santiago", activity: "Científica de datos", workPlace: "Google", STEM: "Tecnología", subSTEM: "Data Mining, Estadística", linkedin: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur laborum fugiat deserunt laudantium ipsum, consequuntur maiores labore quam magni provident minus consectetur, tempore amet cumque, quod eveniet dolores voluptate?", calendar: [] },
    { name: "Mireya González", image: "", email: "miragonz@gmail.com", password: "123456", city: "Antofagasta", activity: "Ingeniera en Minas", workPlace: "Antofagasta Minerals", STEM: "Ingeniería", subSTEM: "optimización de taludes", linkedin: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur laborum fugiat deserunt laudantium ipsum, consequuntur maiores labore quam magni provident minus consectetur, tempore amet cumque, quod eveniet dolores voluptate?", calendar: [] }
  ]

  schools = [
    { schoolName: "Colegio Los Nogales", teacher: "Vicente Tapia", email: "tapiav@gmail.com", password: "123456", levels: "3 medio, 4 medio", city: "Quilpue", calendar: [] },
    { schoolName: "Colegio Condores", teacher: "Sonia Carrera", email: "sacarrera@gmail.com", password: "123456", levels: "3 medio", city: "Curicó", calendar: [] },
    { schoolName: "Colegio Santa Marta", teacher: "Mario Castro", email: "castroml@gmail.com", password: "123456", levels: "2 medio, 3 medio", city: "Santiago", calendar: [] }
  ]



  constructor() { }

  ngOnInit() {
  }


  /* newVolunteer: any = {
    name: "",
    image: "",
    email: "",
    city: "",
    activity: "",
    workPlace: "",
    STEM: "",
    subSTEM: "",
    linkedin: "",
    description: "",
    calendar: []
  } */

  /* newSchool: any = {
    schoolName: "",
    teacher: "",
    email: "",
    levels: "",
    city: "",
    calendar: []
  } */


  //registrarse voluntarias
  add(name: any, email: any, password: any) {
    (this.volunteers).push({
      name: name,
      image: "",
      email: email,
      password: password,
      city: "",
      activity: "",
      workPlace: "",
      STEM: "",
      subSTEM: "",
      linkedin: "",
      description: "",
      calendar: []
    });
    console.log(this.volunteers);
  }


  //registrarse colegios
  addSchool(name: any, email: any, password: any) {
    (this.schools).push({
      schoolName: "",
      teacher: name,
      email: email,
      password: password,
      levels: "",
      city: "",
      calendar: []
    });
    console.log(this.schools);
  }

  //loguearse
  testhtml: any = "";
  login(emailL: any, passwordL: any) {
    for (let i = 0; i < (this.volunteers).length; i++) {
      if (this.volunteers[i].email === emailL && this.volunteers[i].password === passwordL) {
        this.testhtml = `<p>${this.volunteers[i].name}</p>
        <p>${this.volunteers[i].description}</p>
        `
      }
    }
    for (let i = 0; i < (this.schools).length; i++) {
      if (this.schools[i].email === emailL && this.schools[i].password === passwordL) {
        this.testhtml = `<p>${this.schools[i].schoolName}</p>
        <p>${this.schools[i].teacher}</p>
        `
      }
    }
  }

}
