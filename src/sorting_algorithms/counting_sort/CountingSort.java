package sorting_algorithms.counting_sort;

import java.util.Arrays;

public class CountingSort {
  public static Integer[] sort(Integer[] inputArray) {
    int n = inputArray.length;
    int m = 0;

    for (int i = 0; i < n; i++) {
      m = Math.max(m, inputArray[i]);
    }

    Integer[] countArray = new Integer[m + 1];
    Arrays.fill(countArray, 0);

    for (int i = 0; i < n; i++) {
      countArray[inputArray[i]]++;
    }

    for (int i = 1; i <= m; i++) {
      countArray[i] += countArray[i - 1];
    }

    Integer[] outputArray = new Integer[n];
    Arrays.fill(outputArray, 0);

    for (int i = n - 1; i >= 0; i--) {
      outputArray[countArray[inputArray[i]] - 1] = inputArray[i];
      countArray[inputArray[i]]--;
    }

    return outputArray;
  }
}
