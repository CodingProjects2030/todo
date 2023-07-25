import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message ='Some Welcome Message'
  WelcomeMessageFromService:string = ''
  name=''

  constructor(
    private route: ActivatedRoute,
    private service:WelcomeDataService
        ){

  }
  ngOnInit(){
    // throw new Error('Method not implemented.');
    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
  //  console.log(this.service.executeHelloWorldBeanService());

   this.service.executeHelloWorldBeanService().subscribe(
   response => this.handleSuccessfulResponse(response),
  error => this.handelErrorResponse(error)
   );
    //console.log("Get welcome message");
  }

  getWelcomeMessageWithParameter(){
    //  console.log(this.service.executeHelloWorldBeanService());
  
     this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
     response => this.handleSuccessfulResponse(response),
    error => this.handelErrorResponse(error)
     );
      //console.log("Get welcome message");
    }

  handleSuccessfulResponse(response: any){
    this.WelcomeMessageFromService= response.message
    // console.log(response)
    // console.log(response.message)
  }

  handelErrorResponse(error:any){
    // console.log(error)
    // console.log(error.error)
    // console.log(error.error.message)
    this.WelcomeMessageFromService = error.error.message
  }

}
