using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class Stack
    {
        private int[] numbers;
        private int top = -1;
        public Stack(int size)
        {
            numbers = new int[size];
        }
        public void Push(int number)
        {
            top++;
            numbers[top] = number;
        }

        public int Pop()
        {
            int topValue = numbers[top];
            top--;
            return topValue;
        }

        public int Peek()
        {
            return numbers[top];
        }

        public int Length()
        {
            return top + 1;
        }

        public static void Demo()
        {
            Stack stack = new Stack(10);
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            stack.Push(4);
            stack.Push(10);
            Console.WriteLine($"Length : {stack.Length()}");
            Console.WriteLine($"Peek : {stack.Peek()}");

            while (stack.Length() != 0)
            {
                Console.WriteLine(stack.Pop());
            }
        }
    }
}
