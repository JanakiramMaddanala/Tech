using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class LinkedList
    {
        private Node head;

        public void InsertAtHead(int data)
        {
            var node = new Node(data);
            node.SetNextNode(head);
            head = node;
        }

        public int Length()
        {
            Node current = head;
            int nodeCount = 0;

            while (current != null)
            {
                nodeCount++;
                current = current.Next;
            }

            return nodeCount;
        }

        public void DeleteAtHead()
        {
            if (head != null)
            {
                head = head.Next;
            }
        }

        public void Demo()
        {
            var linkedList = new LinkedList();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(2);
            linkedList.InsertAtHead(5);
            linkedList.InsertAtHead(0);

            Console.WriteLine(linkedList);
            Console.WriteLine($"Length : {linkedList.Length()}");

            linkedList.DeleteAtHead();
            linkedList.DeleteAtHead();

            Console.WriteLine(linkedList);
            Console.WriteLine($"Length : {linkedList.Length()}");
        }

        public override string ToString()
        {
            StringBuilder elements = new StringBuilder();
            elements.Append("HEAD --> ");
            Node current = head;

            while (current != null)
            {
                elements.Append($"{current.Data} --> ");
                current = current.Next;
            }

            elements.Append("NULL");

            return elements.ToString();
        }
    }
}
