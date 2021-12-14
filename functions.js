function areaCircle()
{
    let pie = 3.14;
    let radius = prompt("Enter the radius");
    let area = pie*radius*radius;
    alert(area);
}

function areaTriangle()
{
    let base = prompt("Enter the base");
    let height = prompt("Enter the height");
    let area = (base*height) / 2;
    alert(area);
}

function largestNum()
{
    let num1 = prompt("Enter the first number");
    let num2 = prompt("Enter the second number");
    let num3 = prompt("Enter the third number");
    if (num1 > num2 && num1 > num3)
    {
        alert(num1 + " is the largest number");
    }
    else if (num2 > num1 && num2 > num3) 
    {
        alert(num2 + " is the largest number");
    }
    else if (num3 > num1 && num3 > num2) 
    {
        alert(num3 + " is the largest number");
    }
    else
    {
        alert("All numbers are the same");
    }
}

function evenOrOdd()
{
    let num = prompt("Enter a number");
    if (num % 2 == 0)
    {
        alert(num + " is an even number")
    }
    else
    {
        alert(num + " is a odd number");
    }
}

function positiveOrNegative()
{
    let num = prompt("Enter a number");
    if (num >= 0)
    {
        alert(num + " is a positive number");
    }
    else
    {
        alert(num + " is a odd number");
    }
}