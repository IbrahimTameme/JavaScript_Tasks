/////////////////////////////////////////1
function subtract (x)
{
    let total = 0 ;
    while (x >= 0)
    {
        total -= x ;
        x--;

    }
    return total ;
}
/////////////////////////////////////////2
function factorial (x)
{
    let total = 1 ;
    while (x > 0)
    {
        total = total * x ;
        x--;

    }
    return total ;
}
/////////////////////////////////////////3
function repeatStr (x , y)
{ let total = "";
    for ( let i = 0 ; i < y ; i++)
    {
        total = total + " " + x ;
    }
    return total ; 

}
/////////////////////////////////////////4
function sum2 (x , y)
{
    let total = y;
    for ( let i = x; i<y ; i++)
    {
        total += x ;

    }
    return total ; 
}
/////////////////////////////////////////5
function repeatStr2 (x , y)
{
    let count = y.length;
    let sum = "";
    for(let i = 0 ; i < count ; i++)
    {
        sum = sum + " " + x;
    }
    return sum ;
}
/////////////////////////////////////////6
function multiOf (x,y,z)
{
    return x * Math.pow(y,z)
}
/////////////////////////////////////////7
function muti2 (x ,y)
{
    let total = 1;
    for ( let i = x; i<=y ; i++)
    {
        
        total = total * i ;

    }
    return total ; 
}
/////////////////////////////////////////8
function numberBetweenUs(x,y)
{
    let total = "";
    let t = x ;
    let i = 0;
    while( t <= y-2)
    {
        t++;
        total += `${t},`;
        i++;
        
    }
    return total;
}
/////////////////////////////////////////9
function countDown (x)
{
    let thenumbers = '' ;
    let d = x;
    for(let i =0 ; i <= x ; i++)
    {
        if(d == 0)
        {
            thenumbers += "done"

        }
        else
        {
        thenumbers += `${d}, `
        d--;
    }

    }

return thenumbers ;

}
/////////////////////////////////////////10
function multiplication2 (x,y)
{
    let sum = 0;
    for(let i=0 ; i<y ;i++ )
    {
        sum+=x;

    }
    return sum
}
/////////////////////////////////////////11
function mod2 (x,y)
{
    while(x>=y)
    {
        x -= y

    }
    return x; 
}
/////////////////////////////////////////12
function repeatChar (x,y)
{
    let arr1 =x.toLowerCase().split('')
    let count = 0;
    for (let i =0 ; i< arr1.length ; i++)
    {
        if (arr1[i] === y)
        {
            count +=1;
        }
    }
    return count;
}