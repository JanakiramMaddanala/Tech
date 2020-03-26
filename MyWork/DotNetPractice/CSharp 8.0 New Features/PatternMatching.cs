using System;

namespace CSharp8NewFeatures
{
    public static class PatternMatching
    {
        public static void SwitchExpressions()
        {
            #region SimpleIntegerSwitch
            //int value = 2;

            //int output = value switch
            //{
            //    1 => value,
            //    2 => 2 * value,
            //    _ => 0,
            //};

            //Console.WriteLine(output); 
            #endregion

            #region TypeCheck
            object input = 10.0f;

            string output = input switch
            {
                int i when (i % 2 == 0) => $"{i} is even",
                string s => s,
                float f => $"{f} is float",
                object o => o.GetType().Name,
            };

            Console.WriteLine(output);

            #endregion
        }

        public static void PropertyPatterns()
        {
            #region Simple
            //var developer = new Developer { ID = 1, Name = "Ram" };

            //var output = developer switch
            //{
            //    Developer d when d.Name.StartsWith("R", StringComparison.OrdinalIgnoreCase)
            //        => $"{d.Name} starts with R",
            //    Developer d when d.Name.StartsWith("A", StringComparison.OrdinalIgnoreCase)
            //        => $"{d.Name} starts with R",
            //    Developer d when d.Name.StartsWith("A", StringComparison.OrdinalIgnoreCase)
            //        => $"{d.Name} starts with R",
            //    _ => $"I am robot",
            //};

            //Console.WriteLine(output); 
            #endregion

            #region Complex
            var developer = new Developer { ID = 2, Name = "Ram" };

            var output = developer switch
            {
                { Name: "ram" } d => $"{d.Name} starts with R",
                { ID: 1 } d => $"I matched developer with ID = {d.ID}",
                _ => $"I am robot",
            };

            Console.WriteLine(output);
            #endregion
        }

        public static void TuplePatterns()
        {
            (int id, string name) input = (1, "Ram");

            var output = input switch
            {
                (1, "Ram") i => $"ID {i.id} has name {i.name}",
                _ => "Boom!",
            };

            Console.WriteLine(output);
        }

        public static void PositionalPattern()
        {
            Point point = new Point(0, 0);

            var output = point switch
            {
                (0, 0) => Quadrant.Origin,
                var (x, y) when x > 0 && y > 0 => Quadrant.One,
                var (x, y) when x < 0 && y < 0 => Quadrant.Three,
                var (x, y) when x > 0 && y < 0 => Quadrant.Four,
                var (x, y) when x < 0 && y > 0 => Quadrant.Two,
                var (_, _) => Quadrant.OnBorder,
                _ => Quadrant.Unknown
            };

            Console.WriteLine(output.ToString());
        }

        public static void Deconstruct(this Point point, out int x, out int y) => (x, y) = (point.X, point.Y);
    }

    public enum Quadrant
    {
        Unknown,
        Origin,
        One,
        Two,
        Three,
        Four,
        OnBorder
    }

    public class Point
    {
        public int X { get; }
        public int Y { get; }

        public Point(int x, int y) => (X, Y) = (x, y);

        //public void Deconstruct(out int x, out int y) =>
        //    (x, y) = (X, Y);
    }

    public class Developer
    {
        public int ID { get; set; }

        public string Name { get; set; }
    }
}
