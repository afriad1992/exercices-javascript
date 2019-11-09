var tab=Array[666, 1, 7, 69, 33, 13],
var n=Array.length;
var j=1;
while(j!=n){i=j-1;
      temp=tab[j];
    while(i>-1 && tab[i]>temp){tab[i+1]=tab[i];
    i=i-1;}
    tab[i+1]=temp;
    j=j+1;
}
