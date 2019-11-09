 

/*Concevez  la  fonction strtok qui  prend  3  paramètres str1, str2, nen  entrée  et  renvoie  une 
chaîne de caractères: str1 est composée d’une liste de mots séparés par le caractère str2.strtok sert à extraire le nième mot de str1.
Exemple:Pour str1 = «robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner« amiens »*/
var strtoc=function(str1,str2,n){
                                var mots=str1.split(str2); // split c est une methodes qui nous permet de diviser une chaine de caractere par un separateur  
                                 console.log(mots[n]);
                                }
 str1="robert ;dupont ;amiens ;80000"                               
strtoc(str1,";",3);
