public class Main
{
    public static void main(String[] args)
    {
        int size = 20;
        int[] arrayNumeros = new int[size];

        System.out.println("Random array: ");
        generateRandomArray(arrayNumeros);

        System.out.println("Insertion Sort: ");
        insertionSortFor(arrayNumeros);
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
    
    public static void insertionSortFor(int[] array)
    {
        int temp;

        for (int i = 1; i < array.length; i++)
        {
            temp = array[i];
            for (int j = i - 1; j >= 0; j--)
            {
                if(array[j] > temp)
                {
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        
        System.out.print("[");
        for(int i : array)
        {
            System.out.print(" " + i + " ");    
        }
        System.out.print("] \n");
    }

    public static void insertionSortDoWhile(int[] array)
    {
        int temp, j;
        
        for (int i = 1; i < array.length; i++)
        {
            temp = array[i];
            j = i - 1;
            
            while(j >= 0 && temp < array[j])
            {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = temp;
        }
        
        System.out.print("[");
        for(int i : array)
        {
            System.out.print(" " + i + " ");    
        }
        System.out.print("] \n");
    }
    
    
}
