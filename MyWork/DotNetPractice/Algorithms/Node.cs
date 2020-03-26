using System;
using System.Collections.Generic;
using System.Text;

namespace Algorithms
{
    public class Node
    {
        public int Data { get; set; }

        public Node Next { get; set; }

        public Node(int data)
        {
            Data = data;
        }

        public void SetNextNode(Node nextNode)
        {
            this.Next = nextNode;
        }
    }
}
