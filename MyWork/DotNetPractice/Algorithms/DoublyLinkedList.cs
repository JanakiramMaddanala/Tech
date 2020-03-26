using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class DoublyLinkedList
    {
        private DoublyLinkedNode head;

        public void InsertAtHead(int data)
        {
            var newNode = new DoublyLinkedNode(data);

            if (head != null)
            {
                newNode.SetNextNode(head);
                head.SetPreviousNode(newNode);
                head = newNode;
            }

            if (head == null)
            {
                newNode.SetNextNode(head);
                newNode.SetPreviousNode(head);
                head = newNode;
            }
        }

        public static void Demo()
        {
            var doublyLinkedList = new DoublyLinkedList();

            doublyLinkedList.InsertAtHead(1);
            doublyLinkedList.InsertAtHead(2);
            doublyLinkedList.InsertAtHead(4);

            Console.WriteLine(doublyLinkedList);
        }
        public override string ToString()
        {
            StringBuilder elements = new StringBuilder();
            elements.Append("HEAD --> ");
            DoublyLinkedNode current = head;

            while (current != null)
            {
                elements.Append($"{current.GetData()} --> ");
                current = current.NextNode();
            }

            elements.Append("NULL");

            return elements.ToString();
        }
    }
}
