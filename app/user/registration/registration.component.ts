import { UserService } from './../../services/user.service';
import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor( public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }
  onSubmit(){
    this.service.register().subscribe(
      (res:any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful')
        }
        else 
        {
          res.errors.forEach((element: {
            description: any; code: any; 
}) => {
            switch(element.code){
              case 'DuplicateUserName':
                this.toastr.error('UserName is already taken' , 'Registration failed');
              
              break;

              default:
                this.toastr.error(element.description, 'Registration failed');
              break;
            }
          })
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
