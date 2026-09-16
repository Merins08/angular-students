import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  students:any[] = [{"name": "Bumbuz", "city": "Saluzzo", "gender": "M", "present": true}, 
                    {"name": "Tesio", "city": "Bagge", "gender": "M", "present": false},
                    {"name": "Mossello", "city": "Monasterolo di Savigliano", "gender": "M", "present": true},
                    {"name": "Parola", "city": "Centallo", "gender": "F", "present": true}
  ];
}
