import { Component } from '@angular/core';
import { Blockfrost, Lucid } from "lucid-cardano"; 

@Component({
  selector: 'x73-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'x73';
  async ngOnInit() { 
    const lucid = await Lucid.new(
      new Blockfrost("https://cardano-preview.blockfrost.io/api/v0", "<projectId>"),
      "Preview",
    );
  }

}
