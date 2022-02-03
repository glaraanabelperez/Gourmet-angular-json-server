import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';
import { Meal } from 'src/app/shared/meals/models/meals.model';
import { MealsRequest } from 'src/app/shared/meals/models/mealsRequest';
import { ListMealService } from 'src/app/shared/meals/service/meal.service';

@Component({
  selector: 'app-meals-form',
  templateUrl: './meals-form.component.html',
  styleUrls: ['./meals-form.component.scss']
})
export class MealsForm implements OnInit {

  @Input() elementToEdit: Meal;
  
  public formMeals : FormGroup;
  public enableEditing: boolean=false;
  public submitted=false;
  mostrarForm: boolean;

  constructor(
    private readonly formBuilder : FormBuilder ,  
    private toastr: ToastrService,
    private _serviceMeals:ListMealService,
    private _servideDate:DateService
    ) { 

  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    if(this.elementToEdit!=null){
      this.setEditElement(this.elementToEdit);
      this.mostrarForm=true;
    }
  }

  get f(){return this.formMeals.controls;}

  public cleanForm(){
    this.formMeals.reset();
    this.mostrarForm=false;
  }

  public onSubmit(){
    this.submitted=true;
    if(this.elementToEdit!=null){
         this.edit();            
     }else{
         this.insert();
     }
     this.submitted=false;
     this.cleanForm();
  }

  public btnNewMeals(){
    this.mostrarForm=true;
  }

  public initForm(){
    this.formMeals = this.formBuilder.group({
      type : ["", [Validators.required, Validators.maxLength(19)]],
      title : ["", [Validators.required, Validators.maxLength(40)]],
      description : ["", [Validators.required, Validators.maxLength(120)]],
    });
  }

  public insert(){
    let meals:MealsRequest={
          type : this.formMeals.get('type').value,
          title: this.formMeals.get('title').value,
          description: this.formMeals.get('description').value,
        };
    this._serviceMeals.insert(meals).subscribe(
        () => {
            this.toastr.success('iNGRESO EXITOSO');
            this.cleanForm();
            this._servideDate.reloadMenus();
          },
      (err) => {
          this.toastr.error(`Oops!! NO SE PUDO HACER EL INGRESO: Mensaje: ${err}`)
          })
  }

  public edit(){
    let meals:MealsRequest={
          type : this.formMeals.get('type').value,
          title: this.formMeals.get('title').value,
          description: this.formMeals.get('description').value,
    };    
    this._serviceMeals.editMeals(this.elementToEdit.id, meals).subscribe(
      () => {
          this.toastr.success('INGRESO EXITOSO');
          this.cleanForm();
          this._servideDate.reloadMenus();
      },
      (err) => {
          this.toastr.error(`Oops!! NO SE PUDO HACER EL INGRESO: Error: ${err.status}, Mensaje: ${err.error.Message}`)
      })     
  }

  public setEditElement(meal:Meal) :void{
    this.mostrarForm=true;

    this.formMeals.controls['type'].setValue(meal.type ? meal.type : '');
    this.formMeals.controls['title'].setValue(meal.title ? meal.title : '');
    this.formMeals.controls['description'].setValue(meal.description ? meal.description : '');
    window.scrollTo(0,0);
  }

}
