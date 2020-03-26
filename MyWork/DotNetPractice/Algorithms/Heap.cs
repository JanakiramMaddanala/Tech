using System.Collections.Generic;

namespace Algorithms
{
    public class Heap
    {
        private List<int> elements = new List<int>();
        private int index;

        public Heap()
        {
            index = -1;
        }

        public int GetLeftChildIndex(int parentIndex)
        {
            return (2 * parentIndex + 1);
        }

        public int GetLeftChild(int parentIndex)
        {
            return elements[GetLeftChildIndex(parentIndex)];
        }

        public int GetRightChild(int parentIndex)
        {
            return elements[GetRightChildIndex(parentIndex)];
        }

        public int GetRightChildIndex(int parentIndex)
        {
            return (2 * parentIndex + 2);
        }
        public int GetParentIndex(int childIndex)
        {
            return (childIndex - 1) / 2;
        }

        public bool HasParent(int childIndex)
        {
            return GetParentIndex(childIndex) >= 0;
        }

        public bool HasLeftChild(int parentIndex)
        {
            return GetLeftChildIndex(parentIndex) < elements.Count;
        }
        public bool HasRightChild(int parentIndex)
        {
            return GetRightChildIndex(parentIndex) < elements.Count;
        }

        public void Add(int element)
        {
            elements.Add(element);
            index++;
            if (elements.Count > 1)
            {
                HeapifyUp();
            }
        }

        private void HeapifyUp()
        {
            int childIndex = index;
            int parentIndex = GetParentIndex(index);

            while (HasParent(childIndex) && elements[childIndex] > elements[parentIndex])
            {
                Swap(childIndex, parentIndex);

                childIndex = parentIndex;
                parentIndex = GetParentIndex(childIndex);
            }
        }

        private void Swap(int childIndex, int parentIndex)
        {
            int temp = elements[parentIndex];
            elements[parentIndex] = elements[childIndex];
            elements[childIndex] = temp;
        }

        public void Remove()
        {
            elements[0] = elements[index];
            index--;
            HeapifyDown();
        }

        private void HeapifyDown()
        {
            int currentIndex = 0;
            int maxIndex = 0;

            while (HasLeftChild(currentIndex))
            {
                if (HasRightChild(currentIndex) && GetRightChild(currentIndex) > GetLeftChild(currentIndex))
                {
                    maxIndex = GetRightChildIndex(currentIndex);
                }

                maxIndex = GetLeftChildIndex(currentIndex);

                if (elements[currentIndex] > elements[maxIndex])
                {
                    break;
                }

                Swap(currentIndex, maxIndex);

                currentIndex = maxIndex;
            }
        }

        public override string ToString()
        {
            return string.Join(",", elements);
        }
    }
}
