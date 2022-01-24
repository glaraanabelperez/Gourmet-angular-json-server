import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { Meal } from './models/meals.model';
import { ListMealService } from './service/meal.service';

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.scss']
})
export class ListMealsComponent implements OnInit {
  
  @Input() action:string;
  @Output() meal: EventEmitter<Meal> = new EventEmitter();
  
  public meals:Meal[]=[];
  public session: any=null;

  constructor(
    private _mealsService:ListMealService, 
    private _storageService:StorageService,
    ) { }

  ngOnInit(): void {
    this._storageService.permissions$.subscribe(result => this.session=result.isAdmin)
    this.get();
  }

  public delete(){
    console.log("OKBORRAR");
  }

  public edit(m){
    // this.editMeal.emit(m);
  }

  public get(){
    this._mealsService.getMelas().subscribe(res=>{
      if(res.length>0){
        console.log(res)
        this.meals=res.slice();
      }else{
        this.meals=null;
      }
    });
  }

  public send(m){
    console.log(m)
    this.meal.emit(m);
  }


}
