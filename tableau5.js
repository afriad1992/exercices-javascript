var H1=prompt("saisir une premiere heure dans le format HH:MM:SS");
var H2=prompt("saisir une deuxieme heure dans le format HH:MM:SS");
T1=H1.split(":");
T2=H1.split(":");
H=(parseInt(T1[0])+parseInt(T2[0]));
M=(parseInt(T1[1])+parseInt(T2[1]));
S=(parseInt(T1[2])+parseInt(T2[2]));
if(S>=60){S-=60;
          M++;
        }
if(M>=60){M-=60;
            H++;
          }
            if(H>=24){H-=24;
                    }
 if(S<10){S=0+S.toString();                   
         }
 if(M<10){M=0+M.toString();                   
         }
if(H<10){H=0+H.toString();                   
         }
console.log("le total ds heures est :"+" "+H+":"+M+":"+S);         


