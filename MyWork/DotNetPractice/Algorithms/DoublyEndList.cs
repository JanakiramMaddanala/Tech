using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class DoublyEndList
    {
        private Node head;
        private Node tail;

        public void InsertAtHead(int data)
        {
            Node node = new Node(data);
            node.SetNextNode(head);
            head = node;

            if (tail == null)
            {
                tail = head;
            }
        }

        public void InsertAtTail(int data)
        {
            if (head == null)
            {
                InsertAtHead(data);
            }

            if (tail != null)
            {
                Node node = new Node(data);
                tail.SetNextNode(node);
                tail = node;
            }
        }

        public static void Demo()
        {
            var doublyEndList = new DoublyEndList();

            doublyEndList.InsertAtHead(1);
            doublyEndList.InsertAtHead(2);
            doublyEndList.InsertAtHead(5);
            doublyEndList.InsertAtHead(0);

            Console.WriteLine(doublyEndList);

            doublyEndList.InsertAtTail(3);
            doublyEndList.InsertAtTail(4);

            Console.WriteLine(doublyEndList);
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
