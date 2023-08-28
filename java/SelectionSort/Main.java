public class SelectionSort
{

    public static void main(String[] args)
    {
        int size = 20;
        int[] arrayNumeros = new int[size];
        
        System.out.println("Random array: ");
        generateRandomArray(arrayNumeros);
        
        System.out.println("Selection Sort: ");
        selectionSortDoWhile(arrayNumeros);
    }
    
    public static void generateRandomArray(int[] array)
    {
        System.out.print("[");
        for (int i = 0; i < array.length; i++)
        {
            array[i] = (int)(Math.random() * 501);
            System.out.print(" " + array[i] + " ");
        }
        System.out.print("] \n");
    }
    
    public static void selectionSortDoWhile(int[] array)
    {
        int currentMin, temp;
        int pivot = 0;
        do{
            currentMin = pivot;
            for(int i = pivot + 1; i < array.length; i++)
            {
                if (array[i] < array[currentMin])
                {
                    currentMin = i;
                }
            }
            
            temp = array[currentMin];
            array[currentMin] = array[pivot];
            array[pivot] = temp;
            
            pivot++;
        } while (pivot < array.length);
        
        System.out.print("[");
        for(int i : array)
        {
            System.out.print(" " + i + " ");    
        }
        System.out.print("] \n");
    }
    
    public static void selectionSortFor(int[] array)
    {
        int currentMin, temp;
        
        for (int i = 0; i < array.length; i++)
        {
            currentMin = i;
            for (int j = i + 1; j < array.length; j++)
            {
                if(array[j] < array[currentMin])
                {
                    currentMin = j;
                }
            }
            temp = array[currentMin];
            array[currentMin] = array[i];
            array[i] = temp;
        }
        
        System.out.print("[");
        for(int i : array)
        {
            System.out.print(" " + i + " ");    
        }
        System.out.print("] \n");
    }
}
