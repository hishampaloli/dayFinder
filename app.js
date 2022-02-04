const express = require('express')
const bodyParser= require("body-parser");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayToDisplay = "";

let today = new Date();
let day = weekday[today.getDay()];


const app = express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res){

   

    res.render("day", {todayToDisp :"The day you have selected will be a " + dayToDisplay} )
})

app.post("/", function(req, res){
    let userNumber = req.body.number;
    let calculation = userNumber % 7;
   
   if(day === "Monday"){
       switch (calculation) {
           case 0:
            dayToDisplay = "Monday"
             break;

             case 1:
                dayToDisplay = "Tuesday"
                 break;

                 case 2:
                    dayToDisplay = "Wednesday"
                     break;

                     case 3:
                        dayToDisplay = "Thursday"
                         break;

                         case 4:
                            dayToDisplay = "Friday"
                             break;

                             case 5:
                                dayToDisplay = "Saturday"
                                 break;

                                 case 6:
                                    dayToDisplay = "Sunday"
                                     break;
       
           default:
               break;
       }
   }else if (day === "Tuesday"){
       switch (calculation) {

           case 0:
            dayToDisplay = "Tuesday"
              break;

              case 1:
                dayToDisplay = "Wednesday"
                  break;

                  case 2:
                    dayToDisplay = "Thursday"
                      break;

                      case 3:
                        dayToDisplay = "Friday"
                          break;

                          case 4:
                            dayToDisplay = "Saturday"
                              break;

                              case 5:
                                dayToDisplay = "Sunday"
                                  break;

                                  case 6:
                                    dayToDisplay = "Monday"
                                      break;
       
           default:
               break;
       }
   }else if (day === "Wednesday"){
    switch (calculation) {

        case 6:
         dayToDisplay = "Tuesday"
           break;

           case 0:
             dayToDisplay = "Wednesday"
               break;

               case 1:
                 dayToDisplay = "Thursday"
                   break;

                   case 2:
                     dayToDisplay = "Friday"
                       break;

                       case 3:
                         dayToDisplay = "Saturday"
                           break;

                           case 4:
                             dayToDisplay = "Sunday"
                               break;

                               case 5:
                                 dayToDisplay = "Monday"
                                   break;
    
        default:
            break;
    }
}else if (day === "Thursday"){
    switch (calculation) {

        case 5:
         dayToDisplay = "Tuesday"
           break;

           case 6:
             dayToDisplay = "Wednesday"
               break;

               case 0:
                 dayToDisplay = "Thursday"
                   break;

                   case 1:
                     dayToDisplay = "Friday"
                       break;

                       case 2:
                         dayToDisplay = "Saturday"
                           break;

                           case 3:
                             dayToDisplay = "Sunday"
                               break;

                               case 4:
                                 dayToDisplay = "Monday"
                                   break;
    
        default:
            break;
    }
}else if (day === "Friday"){
    switch (calculation) {

        case 4:
         dayToDisplay = "Tuesday"
           break;

           case 5:
             dayToDisplay = "Wednesday"
               break;

               case 6:
                 dayToDisplay = "Thursday"
                   break;

                   case 0:
                     dayToDisplay = "Friday"
                       break;

                       case 1:
                         dayToDisplay = "Saturday"
                           break;

                           case 2:
                             dayToDisplay = "Sunday"
                               break;

                               case 3:
                                 dayToDisplay = "Monday"
                                   break;
    
        default:
            break;
    }
}else if (day === "Saturday"){
    switch (calculation) {

        case 3:
         dayToDisplay = "Tuesday"
           break;

           case 4:
             dayToDisplay = "Wednesday"
               break;

               case 5:
                 dayToDisplay = "Thursday"
                   break;

                   case 6:
                     dayToDisplay = "Friday"
                       break;

                       case 0:
                         dayToDisplay = "Saturday"
                           break;

                           case 1:
                             dayToDisplay = "Sunday"
                               break;

                               case 2:
                                 dayToDisplay = "Monday"
                                   break;
    
        default:
            break;
    }
}else if (day === "Sunday"){
    switch (calculation) {

        case 2:
         dayToDisplay = "Tuesday"
           break;

           case 3:
             dayToDisplay = "Wednesday"
               break;

               case 4:
                 dayToDisplay = "Thursday"
                   break;

                   case 5:
                     dayToDisplay = "Friday"
                       break;

                       case 6:
                         dayToDisplay = "Saturday"
                           break;

                           case 0:
                             dayToDisplay = "Sunday"
                               break;

                               case 1:
                                 dayToDisplay = "Monday"
                                   break;
    
        default:
            break;
    }
}

   res.redirect("/");

})

app.listen("3000", function(){
    console.log("786 ready to go");
})
