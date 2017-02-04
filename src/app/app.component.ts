import {
  Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, ComponentRef,
  ComponentFactory, OnInit
} from '@angular/core';
import {UserComponent} from './common-ui/user/user.component';
import {UserTitleComponent} from './common-ui/user-title/user-title.component';

@Component({
  selector: 'baywa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app works!';

  @ViewChild('container', { read: ViewContainerRef })
  dynamicComponentContainer : ViewContainerRef;

  constructor ( private componentFactoryResolver : ComponentFactoryResolver ) {
  }

  createComp<T> ( componentClass : Type<T> ) : ComponentRef<T> {
    const childComponent : ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory( componentClass );
    const comp : ComponentRef<T> = this.dynamicComponentContainer.createComponent(childComponent);
    return comp;
  }

  ngOnInit () : void {
    let comp : ComponentRef<UserComponent> = this.createComp<UserComponent>(UserComponent);
    console.warn ( comp );
    comp = this.createComp<UserTitleComponent>(UserTitleComponent);
  }

}
