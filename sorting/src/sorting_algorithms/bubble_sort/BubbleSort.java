package sorting_algorithms.bubble_sort;

public class BubbleSort {
  // An optimized version of Bubble Sort
  public static Integer[] sort(Integer[] array) {
    Integer[] result = array.clone();

    for (int i = 0; i < array.length - 1; i++) {
      boolean swapped = false;

      for (int j = 0; j < array.length - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          // Swap result[j] and result[j+1]
          int temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
          swapped = true;
        }
      }

      // If no two elements were
      // swapped by inner loop, then break
      if (swapped == false) {
        break;
      }
    }

    return result;
  }
}
