using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Algorithms
{
    public class Pangram
    {
        public string Solve()
        {
            string s = "";
            s = s.ToLower();
            s = s.Split(' ').Aggregate((a, b) => a + b);
            int distinctCharactersCount = s.ToCharArray().Distinct().Count();

            if (distinctCharactersCount == 26)
            {
                return "pangram";
            }
            else
            {
                return "not pangram";
            }
        }
    }
}
