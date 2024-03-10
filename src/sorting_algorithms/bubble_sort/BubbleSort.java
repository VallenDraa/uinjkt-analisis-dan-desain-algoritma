package sorting_algorithms.bubble_sort;

public class BubbleSort {
  public static Integer[] sort(Integer[] array) {
    Integer[] result = (Integer[]) array.clone();

    for (int i = 0; i < result.length; i++) {
      for (int j = 0; j < result.length - 1; j++) {
        if (result[j] > result[j + 1]) {
          int temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }

    return result;
  }
}
