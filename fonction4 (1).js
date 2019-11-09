 
 

 
var strtoc=function(str1,str2,n)
{var cpt=0;
    for(i=0;i<=(str1.length);i++)
    
                          {if(str1[i]=str2)
                                         {cpt++;
                                          if(cpt==n)
                                             {var p1=i+1;continue;}  
                                          if(cpt==n+1)
                                              {var p2=i;break;}
                                          }

                           }    

                           console.log(str1.substring(p1,p2));
}
strtoc("ghizlane;amina;rachida;la vie",";",2);
    

