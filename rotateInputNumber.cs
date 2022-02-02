using System;
					
public class Program
{
	public static void Main()
	{	
 		string val;
      Console.Write("Enter a numbe: ");
      val = Console.ReadLine();
      long a = Convert.ToInt64(val); 
      Console.WriteLine("Output: {0}",rotate(a.ToString()));
	}
	
	
	static string rotate(string val) {
        var temp = val.ToString();
		var newVal = "";
		for (int i = 0; i < temp.Length; i++)
		{	
			var index = (temp.Length - 1) - i;
			newVal = newVal+""+temp[index];  
		}
		return newVal;
   }
}
