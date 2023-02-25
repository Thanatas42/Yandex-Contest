using System;
using System.Collections.Generic;

public class Test
{
    static void Main()
    {
        List<string[]> array = new List<string[]>();

        string length = Console.ReadLine();

        for (int i = 0; i < int.Parse(length); i++)
            {
                string item = Console.ReadLine();
                string[] zxc = new string[] { };
                zxc = item.Split(' ');

                array.Add(zxc);
            }

        List<int> coordResultleft = new List<int>();
        coordResultleft.Add(1000000000);
        coordResultleft.Add(1000000000);
        List<int> coordResultRight = new List<int>();
        coordResultRight.Add(0);
        coordResultRight.Add(0);


        array.ForEach((item) => {
            int x = int.Parse(item[0]);
            int y = int.Parse(item[1]);

            if (coordResultleft[0] > x)
            {
                coordResultleft[0] = x;
            }

            if (coordResultleft[1] > y)
            {
                coordResultleft[1] = y;
            }

            if (coordResultRight[0] < x)
            {
                coordResultRight[0] = x;
            }

            if (coordResultRight[1] < y)
            {
                coordResultRight[1] = y;
            }
        });


         Console.WriteLine(String.Format("{0} {1} {2} {3}", coordResultleft[0], coordResultleft[1], coordResultRight[0], coordResultRight[1]));
        
    }
}