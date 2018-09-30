import crypto from "crypto";
import { Log } from "../utils/log";

let repeat: boolean = true;
let nonce: number = 0;
var hash: string = "";
var preimage: string = "";
var tag: string = "Preimage";

export function attackPreimage(start: string) {

    do {
        nonce++;
        preimage = (Math.random() * nonce) + "";
        hash = getSHA256Hash(preimage);
        Log.info(tag, hash);

        if (hash.substring(0, start.length) == start) {
            repeat = false;
            Log.debug(tag, `preimage found for hash starting with ${start} after ${nonce} attempts!`);
            Log.debug(tag, `preimage: ${preimage}`);
            Log.debug(tag, `hash: ${hash}`);
        }

    } while (repeat)  
}

function getSHA256Hash(data: string) {
    return crypto.createHash("sha256").update(data).digest("hex");
}