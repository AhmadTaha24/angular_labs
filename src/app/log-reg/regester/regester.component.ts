import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent {

  regesterSubmit(){}
  regesterForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    username: new FormControl(null,[Validators.required, Validators.pattern('^\\S*$'    )]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')])
    
  })
}
