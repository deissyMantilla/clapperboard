import { Component, OnInit } from "@angular/core";
import { UserInformationService } from "./../services/User-Information/user-information.service";

@Component({
  selector: "app-nav-genders",
  templateUrl: "./nav-genders.component.html",
  styleUrls: ["./nav-genders.component.css"]
})
export class NavGendersComponent implements OnInit {
  public user;
  public userName;
  public navName;

  constructor(private userInformationService: UserInformationService) {}

  ngOnInit() {
    this.user = this.userInformationService.getUser();
    this.userName = this.user.name;

    this.navName = this.user.name.split(" ", 1);
  }
}
