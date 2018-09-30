import { requestAttackType} from "./utils/interaction"
import { Log, LOG_LEVEL } from "./utils/log";
import { attackBirthday } from './attack/birthdayattack';
import { attackPreimage } from './attack/preimageattack';

Log.level = LOG_LEVEL.DEBUG;

var similarity: number = 7;

function startUp (attackType: string) {
    if (attackType == "Birthday Attack") {
        attackBirthday(similarity);
    } else if (attackType = "Preimage Attack") {
        attackPreimage("DEFACE");
    }
}

requestAttackType().then(attackType => startUp(attackType));