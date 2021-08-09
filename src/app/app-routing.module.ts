import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateRoomComponent } from "./page/create-room/create-room.component";
import { RoomDetailsComponent } from "./page/room-details/room-details.component";
import { RoomListComponent } from "./page/room-list/room-list.component";
import { UpdateListComponent } from "./page/update-list/update-list.component";

const routes: Routes = [
    { path: '', redirectTo: 'rooms', pathMatch: 'full' },
    { path: 'rooms', component: RoomListComponent },
    { path: 'add', component: CreateRoomComponent},
    { path: 'update/:id', component: UpdateListComponent},
    { path: 'details/:id', component: RoomDetailsComponent}    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }