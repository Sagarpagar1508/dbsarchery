import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-coach-appointment',
  templateUrl: './coach-appointment.component.html',
  styleUrls: ['./coach-appointment.component.css']
})
export class CoachAppointmentComponent {


//   form: FormGroup=this.fb.group({
//     to_name:'Admin',
//     from_name:'',
//     from_Number:'',
//     query:'',
//     date:'',
//     message:'',
//     reply_to:'',
//   });
//   constructor(private fb:FormBuilder){}
  
// async send(){
//   let response =await emailjs.send("service_w1ucd7q","template_7qtc7wl",{
//     from_name: this.form.value.from_name,
//           to_name: this.form.value.to_name,
//           from_Number: this.form.value.from_Number,
//           date: this.form.value.date,
//          query: this.form.value.query,
//         message: this.form.value.message,
   
//     }, 'JGBEy0ZlWTAVlCZz4');
//     alert('Message has been sent.')
//     this.form.reset();
//   }
  


form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form here
    this.form = this.fb.group({
      to_name: ['Admin'],  // Predefined value
      from_name: ['', Validators.required],
      from_Number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      query: ['', Validators.required],
      date: ['', Validators.required],
      message: ['', Validators.required],
      reply_to: ['']
    });
  }

  ngOnInit(): void {
    // Form is already initialized in the constructor
  }

  async send(): Promise<void> {
    if (this.form.invalid) {
      // Mark all controls as touched to show validation messages
      this.form.markAllAsTouched();
      return;
    }

    try {
      let response = await emailjs.send(
        'service_w1ucd7q',
        'template_7qtc7wl',
        {
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_Number: this.form.value.from_Number,
          date: this.form.value.date,
          query: this.form.value.query,
          message: this.form.value.message,
        },
        'JGBEy0ZlWTAVlCZz4'
      );

      alert('Message has been sent.');
      this.form.reset();  // Optionally reset the form here
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message.');
    }
  }

}
