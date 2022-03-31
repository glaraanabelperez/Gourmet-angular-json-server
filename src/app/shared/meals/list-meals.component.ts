import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { DateService } from '../date/service/dateOrders.service';
import { Meal } from './models/meals.model';
import { ListMealService } from './service/meal.service';

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.scss'],
})
export class ListMealsComponent implements OnInit {
  
  @Input() action:string;
  @Input() _reload: boolean;
  @Output() meal: EventEmitter<Meal> = new EventEmitter();

  public meals:Meal[]=[];
  public session: any=null;
  isLoadingResults=false;

  constructor(
    private _mealsService:ListMealService, 
    private _storageService:StorageService,
    private _serviceDate:DateService,
    private toastr: ToastrService,
    ) { 
      this.suscripcionAdmin();
      this.suscripcionReload();
      this.get();
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this._reload){
      this.get();
    }
  }

  public deleteMeal(id_meal:number){
    this.isLoadingResults=true;
    this._mealsService.deleteMeals(id_meal).subscribe(
      (res)=>{
        this.isLoadingResults=false;
        this.toastr.success("LOS DATOS SE BORRARON CON EXITO");
        this.get();
    },
      (error) =>{
        this.isLoadingResults=false;
        this.toastr.error('ERROR EN EL SERVIDOR',error);
      }
    );
  }

  public get(){
    this.isLoadingResults=true;
    this._mealsService.getMelas().subscribe(
      res=>{
      if(res.length>0){
        this.isLoadingResults=false;
        this.meals=res.slice();
      }else{
        this.isLoadingResults=false;
        this.meals=null;
      }
    },
      error =>{
        this.isLoadingResults=false;
        this.toastr.error('ERROR EN EL SERVIDOR',error)
      }
    );
  }

  public send(m){
    this.meal.emit(m);
  }

  public suscripcionAdmin(){
    this._storageService.permissions$.subscribe(result => {
      if(result){
        this.session=result?result.isAdmin:false;
      }
    })
  }

  public suscripcionReload(){
    this._serviceDate.reload$.subscribe(result => {
      if(result){
        this.get();
      }
    })
  }

}
