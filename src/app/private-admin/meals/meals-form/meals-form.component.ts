import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Meal } from 'src/app/shared/meals/models/meals.model';
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

  constructor(
    private readonly formBuilder : FormBuilder ,  
    private toastr: ToastrService,
    private _serviceMeals:ListMealService
    ) { 

  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    console.log(this.elementToEdit)
    if(this.elementToEdit!=null){
      this.setEditElement(this.elementToEdit);
      this.enableEditing=true;
    }
  }

  get f(){return this.formMeals.controls;}

  public cleanForm(){
    this.formMeals.reset();
    this.enableEditing=false;
    this.elementToEdit=null;
  }

  public onSubmit(){
    this.submitted=true;
    if(this.enableEditing){
         this.edit();            
     }else{
         this.insert();
     }
     this.submitted=false;
     this.cleanForm();
  }

  public initForm(){
    this.formMeals = this.formBuilder.group({
      type : ["", [Validators.required, Validators.maxLength(40)]],
      title : ["", [Validators.required, Validators.maxLength(40)]],
      description : ["", [Validators.required, Validators.maxLength(120)]],
    });
  }

  public insert(){
    let meals:Meal={
          id: null,
          type : this.formMeals.get('type').value,
          title: this.formMeals.get('title').value,
          description: this.formMeals.get('description').value,
          state:"available"
        };
    this._serviceMeals.insert(meals).subscribe(
        () => {
            this.toastr.success('iNGRESO EXITOSO');
          },
      (err) => {
          this.toastr.error(`Oops!! NO SE PUDO HACER EL INGRESO: ${err.status}, Mensaje: ${err.error.Message}`)
          })
  }

  edit(){
    let meals:Meal={
          id: this.elementToEdit.id,
          type : this.formMeals.get('type').value,
          title: this.formMeals.get('title').value,
          description: this.formMeals.get('description').value,
          state:"available"
    };    
    this._serviceMeals.editMeals(meals).subscribe(
      () => {
          this.toastr.success('INGRESO EXITOSO');
          this._serviceMeals.reloadMenus();
      },
      (err) => {
          this.toastr.error(`Oops!! NO SE PUDO HACER EL INGRESO: Error: ${err.status}, Mensaje: ${err.error.Message}`)
      })     
    this.enableEditing=false;
  }

  setEditElement(meal:Meal) :void{
    console.log(meal)
    this.formMeals.controls['type'].setValue(meal.type ? meal.type : '');
    this.formMeals.controls['title'].setValue(meal.title ? meal.title : '');
    this.formMeals.controls['description'].setValue(meal.description ? meal.description : '');
    window.scrollTo(0,0);
  }

}
