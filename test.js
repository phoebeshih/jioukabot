var command = require('./command');
var UserActivity = require('./model/UserActivity');
var user_id = '1155742751164216';


//command.postback(user_id, '$HOLD_CHARGE.POCKETMONEY'); 
command.savefield(user_id, "HOLD.CHARGE/PRICE$b63e81a7-dd66-4661-94c0-6466d0cc757a", '2000'); 
//command.postback(user_id, '$HOLD_CHARGE.FREE');