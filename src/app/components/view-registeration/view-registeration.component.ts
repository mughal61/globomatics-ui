import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from '../../services/bike.service';
import { AdminComponent } from '../admin/admin.component';


@Component({
  selector: 'app-view-registeration',
  templateUrl: './view-registeration.component.html',
  styleUrls: ['./view-registeration.component.css']
})
export class ViewRegisterationComponent implements OnInit {

  public bikeReg;
  constructor(private bikeService: BikeService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikeReg(this.router.snapshot.params.id);
  }

  getBikeReg(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data;
      },
      err => console.error(err),
      () => console.log("Bike loaded!")
    );
  }
}
