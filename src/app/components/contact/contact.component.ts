import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;
    const formData = new FormData();
    formData.append('name', this.contactForm.value.name);
    formData.append('email', this.contactForm.value.email);
    formData.append('subject', this.contactForm.value.subject);
    formData.append('message', this.contactForm.value.message);

    // Replace email with provided string from FormSubmit
    this.http.post('https://formsubmit.co/ajax/7d98f9ae0dcc12ce3dfdbc92afed10de', formData)
      .subscribe({
        next: (response) => {
          this.messageAlert("Enviado exitosamente", 'success');
          this.contactForm.reset();
          this.submitted = false;
          this.isLoading = false;
        },
        error: (err) => {
          this.messageAlert("Error al enviar el correo", 'error');
          this.isLoading = false;
        }
      });
  }

  messageAlert(message: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') {
    Swal.fire({
      icon: icon,
      title: message,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
        toast.style.zIndex = '9999 !important';
        toast.style.top = '70px';
      }
    });
  }

}
