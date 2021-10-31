import { Component } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'my-app',
   templateUrl: 'app.component.html'
})
export class AppComponent {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = new FormGroup({
            textbox: new FormControl()
         });
    }
}