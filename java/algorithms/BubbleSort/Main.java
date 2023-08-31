public class Main
{

	public static void main(String[] args)
	{
            int size = 20;
            int[] arrayNumeros = new int[size];
		
            System.out.println("Random array: ");
            generateRandomArray(arrayNumeros);
		
            System.out.println("Bubble Sort: ");
            bubbleSortDoWhile(arrayNumeros);
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
	
	public static void bubbleSortDoWhile(int[] array)
	{
            int temp;
            boolean troca = false;

            do{
                    troca = false;
                    for(int i = 0; i < array.length - 1; i++)
                    {
                            if(array[i] > array[i + 1])
                            {
                                    temp = array[i];
                                    array[i] = array[i + 1];
                                    array[i + 1] = temp;
                                    troca = true;
                            }
                    }
            }while(troca);

            System.out.print("[");
            for(int i : array)
            {
                    System.out.print(" " + i + " ");	
            }
            System.out.print("] \n");
	}
	
	public static void bubbleSortFor(int[] array)
	{
            int temp;

            for(int i = 0; i < array.length; i++)
            {
                    for(int j = i + 1; j < array.length; j++)
                    {
                            if(array[i] > array[j])
                            {
                                    temp = array[j];
                                    array[j]= array[i];
                                    array[i] = temp;
                            }
                    }
            }

            System.out.println("Bubble Sort: ");
            System.out.print("[");
            for(int i : array)
            {
                    System.out.print("{" + i + "}");	
            }
            System.out.print("] \n");
	}
}
