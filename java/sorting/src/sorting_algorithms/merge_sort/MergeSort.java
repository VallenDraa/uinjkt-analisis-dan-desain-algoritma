package sorting_algorithms.merge_sort;

public class MergeSort {
  // Merges two subarrays of arr[].
  // First subarray is arr[l..m]
  // Second subarray is arr[m+1..r]
  private static void merge(Integer[] array, int l, int m, int r) {
    // Find sizes of two subarrays to be merged
    int n1 = m - l + 1;
    int n2 = r - m;

    // Create temp arrays
    int L[] = new int[n1];
    int R[] = new int[n2];

    // Copy data to temp arrays
    for (int i = 0; i < n1; ++i)
      L[i] = array[l + i];
    for (int j = 0; j < n2; ++j)
      R[j] = array[m + 1 + j];

    // Merge the temp arrays

    // Initial indices of first and second subarrays
    int i = 0, j = 0;

    // Initial index of merged subarray array
    int k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        array[k] = L[i];
        i++;
      } else {
        array[k] = R[j];
        j++;
      }
      k++;
    }

    // Copy remaining elements of L[] if any
    while (i < n1) {
      array[k] = L[i];
      i++;
      k++;
    }

    // Copy remaining elements of R[] if any
    while (j < n2) {
      array[k] = R[j];
      j++;
      k++;
    }
  }

  // Main function that sorts arr[l..r] using
  // merge()
  public static void sort(Integer[] array, int l, int r) {
    if (l < r) {

      // Find the middle point
      int m = l + (r - l) / 2;

      // Sort first and second halves
      sort(array, l, m);
      sort(array, m + 1, r);

      // Merge the sorted halves
      merge(array, l, m, r);
    }
  }
}
