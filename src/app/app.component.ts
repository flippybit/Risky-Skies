import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  toggleState = false;
  title = "electron-angular-app";

  constructor(private router: Router) {}

  testChange(event) {
    if (this.toggleState == true)
     {
      this.toggleState = false;
      // navego con el router  ! !
      this.router.navigateByUrl("landing");
    
    } else if (this.toggleState == false) 
    {
      this.toggleState = true;
    }

    console.log("hi:" + this.toggleState);
  }
}
