import { Component } from '@angular/core';
import { Blockfrost } from "lucid-cardano";
import { Lucid } from "https://deno.land/x/lucid@0.10.5/mod.ts";

@Component({
  selector: 'x73-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'x73';
  async ngOnInit() {
    const lucid: Lucid = await Lucid.new(
      new Blockfrost(
        "https://cardano-preview.blockfrost.io/api/v0",
        "previewO7v5u5we498ZmJqoyi9pmNGwHzg1iNcI"
      ),
      "Preview",
    );

    // console.log(lucid);

    // const api = await window.cardano['nami'].enable();
    // lucid.selectWallet(api);

    // const tx = await lucid.newTx()
    //   .payToAddress("addr...", { lovelace: 5000000n })
    //   .complete();

    // const signedTx = await tx.sign().complete();

    // const txHash = await signedTx.submit();

    // console.log(txHash);
  }



}
