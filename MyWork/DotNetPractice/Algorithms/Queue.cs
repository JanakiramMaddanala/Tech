using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class Queue
    {
        private int head = -1;
        private int tail = -1;
        private int length;
        private int[] numbers;

        public Queue(int size)
        {
            length = size;
            numbers = new int[size];
        }

        public void Enqueue(int number)
        {
            if (tail + 1 == head)
            {
                Console.WriteLine("Queue is full");
                Console.WriteLine($"Head {head}; Tail: {tail}");
                return;
            }

            if (head == -1)
            {
                head++;
            }

            if (tail == (length - 1))
            {
                if (tail - head < length - 1)
                {
                    tail = -1;
                }
                else
                {
                    Console.WriteLine("Queue is full");
                    return;
                }
            }

            tail++;

            numbers[tail] = number;
            Console.WriteLine($"Head: {head}; Tail: {tail}");
        }

        public void Dequeue()
        {
            int previousHead = head;
            if (head == tail)
            {
                head = -1;
                tail = -1;
            }
            else if (head == length - 1)
            {
                head = 0;
            }
            else
            {
                head++;
            }

            Console.WriteLine($"Head {head}; Tail: {tail}");
        }

        public void Demo()
        {
            Queue queue = new Queue(5);
            queue.Enqueue(1);
            queue.Enqueue(2);
            queue.Enqueue(3);
            queue.Enqueue(4);
            queue.Enqueue(5);

            queue.Dequeue();
            queue.Dequeue();

            queue.Enqueue(6);
            queue.Enqueue(7);
            queue.Enqueue(8);

            int tail = queue.tail;
            int head = queue.head;
            Console.WriteLine($"Current Head: {head}");
            Console.WriteLine($"Current Tail: {tail}");

            if (tail < head)
            {
                for (int i = head; i < length; i++)
                {
                    Console.WriteLine($"{i} : {queue.numbers[i]}");
                }

                for (int i = 0; i < head; i++)
                {
                    Console.WriteLine($"{i} : {queue.numbers[i]}");
                }
            }
            else
            {
                for (int i = head; i < tail; i++)
                {
                    Console.WriteLine($"{i} : {queue.numbers[i]}");
                }
            }
        }
    }
}
