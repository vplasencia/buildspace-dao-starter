import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0x3e7d5d782283db102869209d00057fe5f5371175");

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "FounderDAO Badge",
        description: "This NFT will give you access to FounderDAO!",
        image: readFileSync("scripts/assets/nft.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
