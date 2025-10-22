import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import data from 'src/app/user.json';



interface USER {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = data;
  // clickedRows = new Set<PeriodicElement>();


  userForm!: FormGroup

  city: any[] = [];
  state: any[] = [];
  Country: any[] = [];
  checked: any[] = [];
  masterSelected: boolean | undefined;
  Contries = [
    { 'id': '1', 'name': 'India' },
    { 'id': '2', 'name': 'usa' },

  ]
  states = [{ 'id': '1', 'name': 'TamilNadu' },
  { 'id': '1', 'name': 'kerala' },
  { 'id': '1', 'name': 'karnataka' },
  { 'id': '2', 'name': 'california' },
  { 'id': '2', 'name': 'ccc' },


  ]
  cities = [{ 'id': '1', 'name': 'Erode' },
  { 'id': '1', 'name': 'salem' },
  { 'id': '1', 'name': 'Covai' },
  { 'id': '2', 'name': 'em' },
  { 'id': '2', 'name': 'ur' },
  { 'id': '2', 'name': 'nad' },

  ]
  /*Data: Array<any> = [
    { 'name': 'Pear', 'id': '1',value:'pear' ,Selected:false },
    { 'name': 'Plum', 'id': '2' ,value:'plum', Selected:false},
    { 'name': 'Kiwi','id': '3',value:'KiWi', isSelected:false },
    { 'name': 'Apple', 'id': '4',value:'Apple' ,isSelected:false},
    { 'name': 'Lime', 'id': '5',value:'Lime',isSelected:false }
  ];*/
  selectedAll: boolean = true;
  title: string;
  names: { name: string; selected: boolean; }[];
  Data: any;
  users: any;



  user: any
  constructor(private FormBuilder: FormBuilder) {
    this.userForm = this.FormBuilder.group({
      checkArray: this.FormBuilder.array([])
    })
    

    this.title = "Select all/Deselect all checkbox - Angular 2";
    this.names = [
      { name: 'Prashobh', selected: false },
      { name: 'Abraham', selected: false },
      { name: 'Anil', selected: false },
      { name: 'Sam', selected: false },
      { name: 'Natasha', selected: false },
      { name: 'Marry', selected: false },
      { name: 'Zian', selected: false },
      { name: 'karan', selected: false },
    ]

  }


  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      console.log(this.names[i].selected)
      this.names[i].selected = this.selectedAll;
      console.log(this.names[i].selected)
    }
  };
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function (item: any) {
      return item.selected == true;
    })
  }


  ngOnInit(): void {
    this.user = data;
    console.log(this.user)
    this.userForm = this.FormBuilder.group(
      {

        firstName: [null, [Validators.required]],

        password: [null, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")],
        email: [null, [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        PhoneNumber: [null, [Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]],

        Country: [null,],
        city: [null,],
        state: [null,],
        items: [null,],
        check: [null,],
        selectAll: [null,],
        selected: [null,]








      }
    )





  };

  submit() {
    console.log(this.userForm.value);
  }

  onChangeCountry(event: Event) {

    this.states = this.cities.filter(x =>
      x.id == this.userForm.get('State')?.value)
    console.log(this.states)

    this.state = this.states.filter(x =>
      x.id == this.userForm.get('Country')?.value
    );
    console.log(this.state)
  }
  onChangeState(event: Event) {

    this.city = this.cities.filter(x =>
      x.id == this.userForm.get('state')?.value
    );
    console.log(this.city)

  }







  onCheckboxChange(event: Event) {
    this.userForm.get('names')?.value



    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
      //this.Data.map(this.selectedAll[i])
      // if(this.Data[i].isSelected)
      // this.Data.map(this.selectedAll[i]);
    }
    this.selectedAll = this.Data.every(function (item: any) {
      return item.selected == true;

    });
    console.log(this.Data)
  }














}
