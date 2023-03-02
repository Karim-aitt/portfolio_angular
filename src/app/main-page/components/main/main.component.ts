import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  flag_language!: Observable<boolean>;
  flag: boolean = true;


  constructor(private ss: ServiceService){}

  ngOnInit(): void {
    this.flag_language = this.ss.getFlagLanguage();
    this.flag_language.subscribe(value => this.flag = value);

  }
}
