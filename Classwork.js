var x= "Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0".split("|").join(",").split("*").join(",").split(",")
var y = new Array();
var z = new Array()
var a = new Array()
var cold = new Array()
var mod = new Array()
var hot = new Array()
var j=0;
for (let i=0;i<=x.length;i+=2){
y.push(x[i]);
z.push(x[i+1]);
}

function temp(x){
return ((x-32)*(5/9));
}

for (let i=0;i<y.length-1;i++){
    a.push(temp(z[i]))
    a.push(y[i])
}
/*
Cold - less than 20 
Moderate - Between 20 and 30
Hot - Above 30
*/
for (let i=0;i<a.length-1;i+=2){
    if(a[i]<=20){
        cold.push(a[i+1])
        cold.push(a[i])
    }
    else if(a[i]<=30){
        mod.push(a[i+1])
        mod.push(a[i])
    }
    else if(a[i]>30){
        hot.push(a[i+1])
        hot.push(a[i])
    }
    else {
      
    }
}
console.log("Cold\n");
for (let i=0;i<=cold.length-1;i+=2){
    console.log(cold[i]+" "+cold[i+1]+"\n")

}
console.log("Moderate\n")
for (let i=0;i<=mod.length-1;i+=2){
    console.log(mod[i]+" "+mod[i+1]+"\n")

}
console.log("Hot\n")
for (let i=0;i<=hot.length-1;i+=2){
    console.log(hot[i]+" "+hot[i+1]+"\n")
}