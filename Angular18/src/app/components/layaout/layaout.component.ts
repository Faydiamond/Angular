import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layaout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.css'
})
export class LayaoutComponent {
  router = inject (Router);
  onLogOff(){
    this.router.navigateByUrl("/login");
    localStorage.removeItem("emperUser");
  }
}
