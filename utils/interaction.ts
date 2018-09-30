import Inquirer from 'inquirer';

var attackTypeQuestion = [{
    type: 'list',
    name: 'type',
    message: 'Select the attack type to simulate: ',
    choices: ['Birthday Attack', 'Preimage Attack'],
    default: 'Birthday Attack'
}]

export let requestAttackType = () : Promise<string> => {
    return new Promise<string>(resolve => {
        Inquirer.prompt(attackTypeQuestion).then(function(answers:any) {
            return resolve(answers.type);
        });
    });
}