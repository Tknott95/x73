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
      new Blockfrost("https://cardano-preview.blockfrost.io/api/v0", "previewO7v5u5we498ZmJqoyi9pmNGwHzg1iNcI"),
      "Preview",
    );

    const api = await window.cardano['nami'].enable();
    lucid.selectWallet(api);

    // const tx = await lucid.newTx()
    //   .payToAddress("addr...", { lovelace: 5000000n })
    //   .complete();

    // const signedTx = await tx.sign().complete();

    // const txHash = await signedTx.submit();

    // console.log(txHash);
  }



}
