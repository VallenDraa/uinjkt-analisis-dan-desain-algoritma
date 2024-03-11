package sorting_algorithms.insertion_sort;

public class InsertionSort {
  /* Function to sort array using insertion sort */
  public static Integer[] sort(Integer[] array) {
    Integer[] result = array.clone();

    for (int i = 1; i < result.length; ++i) {
      int key = result[i];
      int j = i - 1;

      /*
       * Move elements of arr[0..i-1], that are
       * greater than key, to one position ahead
       * of their current position
       */
      while (j >= 0 && result[j] > key) {
        result[j + 1] = result[j];
        j = j - 1;
      }

      result[j + 1] = key;
    }

    return result;
  }
}
