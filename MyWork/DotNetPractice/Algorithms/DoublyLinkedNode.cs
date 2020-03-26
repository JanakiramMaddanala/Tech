using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class DoublyLinkedNode
    {
        private int data;
        private DoublyLinkedNode next;
        private DoublyLinkedNode previous;

        public DoublyLinkedNode(int data)
        {
            this.data = data;
        }

        public int GetData()
        {
            return data;
        }

        public DoublyLinkedNode NextNode()
        {
            return next;
        }

        public DoublyLinkedNode PreviousNode()
        {
            return previous;
        }

        public void SetNextNode(DoublyLinkedNode nextNode)
        {
            this.next = nextNode;
        }

        public void SetPreviousNode(DoublyLinkedNode previousNode)
        {
            this.previous = previousNode;
        }
    }
}
