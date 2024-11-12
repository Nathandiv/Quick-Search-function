import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule,CommonModule,BrowserModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  searchText:any;
  heroes = [
    {id:11,name:'Mr Hlungwani',country:'SA'},
    { id: 12, name: 'Ms Mokoena', country: 'SA' },
  { id: 13, name: 'Mr Smith', country: 'USA' },
  { id: 14, name: 'Ms Patel', country: 'IN' },
  { id: 15, name: 'Dr Chen', country: 'CN' },
  { id: 16, name: 'Mr Okafor', country: 'NG' },
  { id: 17, name: 'Ms Nakamura', country: 'JP' },
  { id: 18, name: 'Dr Lopez', country: 'MX' },
  { id: 19, name: 'Mr Singh', country: 'IN' },
  { id: 20, name: 'Ms Carter', country: 'CA' }
  ]

  constructor(){}

  ngOnInit(): void {
    
  }

}
