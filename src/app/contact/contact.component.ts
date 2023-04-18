import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  id!: string;

  model = {
    name: "",
    checkAdult: false,
    department: "",
    comment: ""
  }

  constructor( private readonly route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  // onSubmit(values: any): void { When receive values
  onSubmit(form: NgForm): void { // When it receives a complete form
    console.log('Form values: ', form);
  }

}
