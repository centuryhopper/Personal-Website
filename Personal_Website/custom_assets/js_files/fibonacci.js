




function FibonacciGenerator(n)
{
    if (n === 1 ) { return [0];}
    if (n == 2) { return [0,1]; }

    var a = 0, b = 1;
    var c = a + b;
    var myAr = [];
    myAr.push(a);
    myAr.push(b);
    myAr.push(c);
    for (let i = 3; i < n; ++i)
    {
        a = b;
        b = c;
        c = a + b;
        myAr.push(c);
    }

    return myAr;
}

function recur_fib(n)
{
	if (n < 2) return n;
	return recur_fib(n - 1) + recur_fib(n - 2);
}



// simiulate a main method from languages like java and C
function Main()
{
    FibonacciGenerator(5);
}

Main();

