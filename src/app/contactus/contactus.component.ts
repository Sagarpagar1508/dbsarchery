import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  


  form: FormGroup=this.fb.group({
    to_name:'Admin',
    from_name:'',
    from_email:'',
    query:'',
    subject:'',
    message:'',
    reply_to:'',
  });
  constructor(private fb:FormBuilder){}
  
async send(){
  let response =await emailjs.send("service_w1ucd7q","template_v3xb177",{
    from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
         subject: this.form.value.subject,
         query: this.form.value.query,
        message: this.form.value.message,
   
    }, 'JGBEy0ZlWTAVlCZz4');
    alert('Message has been sent.')
    this.form.reset();
  }
  



}
