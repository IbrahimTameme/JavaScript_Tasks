////////////////////////////////////1
function pow2arr (x)
{
    let newarr = []
   
    x.forEach(i => {
        newarr.push(i*2)
        i++
    });
    return newarr;
}
////////////////////////////////////2
function evenvaluse(x,y)
{
    let newarr = []

    x.forEach(element => {
        if(element%2 == 0)
        {
            newarr.push(element)


        }
        
    });
    y.forEach(element =>
    {
        if(element%2 ==0)
        {
            newarr.push(element)
        }

    });
    return newarr;
}
////////////////////////////////////3
