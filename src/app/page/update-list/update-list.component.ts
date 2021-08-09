import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {
  id: number;
  room: Room;
  submitted: false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private roomService: RoomService) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id).subscribe(
      data => {
        console.log(data);
        this.room = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      });
      this.room = new Room();
      this.gotoList();
  }

  ngSubmit() {
    this.updateRoom();
  }

  gotoList() {
    this.router.navigate(['rooms']);
  }

}
