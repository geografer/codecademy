var slaying = true; 
var youHit = Math.floor(Math.random())*2; // javascript sees 0 as false and 1 as true
var damageThisRound = Math.random()*5+1;  
var totalDamage = 0; 
// while loop checks when slaying is true and false in the if/else statement
while(slaying){
    slaying = 0; 
    if(youHit == 1){
        console.log('good hit');
        totalDamage += damageThisRound; //this is shortcut for totalDamage = totalDamage//+damageThisRound; 
        if(totalDamage >= 4){
            console.log('you slew the drangon');
            slaying = false;
            } 
            else {
                if(totalDamage <4){
                    youHit = Math.random()*1; 
                    }
                }
        } 
        else {
            if(youHit === 0){
                console.log('you have been defeated by the drangon'); 
                }
            }
        }