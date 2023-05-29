n=parseInt(prompt("Enter the number"))
for(let i=1; i<=n; i++)
{
	for(let j=n; j>i; j--)
	{
		document.write("*");
	}
	for(let j=1; j<=i; j++)
	{
		document.write(i);
	
	}
	
		document.write("<br>");
	
}