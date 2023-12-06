import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ToastrService } from 'ngx-toastr';

import Typewriter from 't-writer.js';

import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})

export class LoginComponentComponent implements AfterViewInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required,]);
  hide = true;
  loading = false;

  @ViewChild('typewriter')
  typewriterElement!: ElementRef;

  ngAfterViewInit() {
    const target = this.typewriterElement.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 40,
      deleteSpeed: 1,
      animateCursor: 'none'
    })
    writer
      .strings(
        400,
        "Somos profesionales en el desarrollo y aplicación de Inteligencia Artificial y Ciencia de Datos.",
        "Enfocados a brindar soluciones a diferentes sectores de industria y servicios.",
        "Más de 30 años de experiencia en la aplicación de técnicas y metodologías apoyados por científicos y especialistas en diferentes áreas.",
        "Contamos con un gran conocimiento comercial y una red de empresarios de TIC con presencia en más de 150 ciudades del país.",
      )
      .start()
  }

  constructor(private router: Router, public loaderService: LoaderService, private toastr: ToastrService) { }

  datosLogin = { email: '', password: '' };
  home() {
    if (!this.datosLogin.email || !this.datosLogin.password) {
      this.toastr.error('Campos vacíos, verifique los datos');
    } else if (this.datosLogin.password.length <= 7) {
      this.toastr.warning('Contraseña corta, debe tener al menos 8 caracteres');
    } else if (!this.isValidEmail(this.datosLogin.email)) {
      this.toastr.error('Correo electrónico no válido');
    } else if (!this.isValidPassword(this.datosLogin.password)) {
      this.toastr.error('Contraseña incorrecta, debe tener al menos, una letra mayuscula, minuscula y un caracter especial');
    } else {
      this.loaderService.isLoading.next(true);
      setTimeout(() => {
        this.router.navigate(['/home']);
        this.loaderService.isLoading.next(false);
      }, 3000);
    }
  }
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const allowedDomains = ['com', 'org', 'net', 'edu', 'gov',];
    const [, domainPart] = email.split('@');

    if (!emailRegex.test(email)) {
      return false;
    }
    const topLevelDomain = domainPart.split('.')[1];
    if (!allowedDomains.includes(topLevelDomain)) {
      return false;
    }
    return true;
  }

  isValidPassword(password: string): boolean {
    const may = /[A-Z]/.test(password);
    const min = /[a-z]/.test(password);
    const num = /[0-9]/.test(password);
    const ce = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    return may && min && num && ce;
  }

  customers() {
    this.loaderService.isLoading.next(true);
    setTimeout(() => {
      this.router.navigate(['/customers']);
      this.loaderService.isLoading.next(false);
    }, 3000);
  }
}

