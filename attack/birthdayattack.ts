import crypto from "crypto";
import { Log } from "../utils/log";

let hashes: string[] = [];
let repeat: boolean = true;
let nonce: number = 0;
var newHash: string = "";
var tag: string = "Birthday";

export function attackBirthday(similarity: number) {
    
    do {
        nonce++;
        newHash = getSHA256Hash((Math.random() * nonce) + "");
        Log.info(tag, newHash);

        for (var i = 0; i < hashes.length; i++) {
            if (hashes[i].substring(0, similarity) == newHash.substring(0, similarity)) {
                repeat = false;
                console.log(`collision found between hash #${i} and hash #${hashes.length+1}!`);
                console.log(`hash #${i}: ${hashes[i]}`);
                console.log(`hash #${hashes.length+1}: ${newHash}`);
            }
        }

        hashes.push(newHash);

    } while (repeat)  
}

function getSHA256Hash(data: string) {
    return crypto.createHash("sha256").update(data).digest("hex");
}