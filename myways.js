const number=8700462725;

FizzBuzz(number);

function FizzBuzz(number){
const phonenumber=number.toString();

var sum=0;
for(let i=0;i<phonenumber.length;i++)
{
sum=sum + (+(phonenumber[i]));
} 

var str=""

for(let i=1;i<=sum;i++)
{

if(i%4==0 && i%5==0)
{
str=str+"FizzBuzz"+" "
}

else if(i%4==0){
str=str+"Fizz"+" "
}

else if(i%5==0){
str=str+"Buzz"+" "
}

else{
str=str+i.toString()+" ";
} 

}
console.log(str)
}


