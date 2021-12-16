import { Directive , TemplateRef, ViewContainerRef, Input} from '@angular/core';
import { Session } from '../public/components/login/models/session.model';

@Directive({
  selector: '[appNavClient]'
})
export class NavClientDirective {


  constructor( private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  a:boolean;

  @Input() set appNavClient(session:Session) {

    console.log(session)
      // if( session.getUser()!=null){
      //   this.viewContainer.createEmbeddedView(this.templateRef);
      // }
  }
    

}


