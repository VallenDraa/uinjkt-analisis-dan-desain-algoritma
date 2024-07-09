package sorting_algorithms.radix_sort;

import java.util.Arrays;

public class RadixSort {
  // A utility function to get maximum value in array[]
  private static int getMax(Integer array[], int n) {
    int mx = array[0];

    for (int i = 1; i < n; i++) {
      if (array[i] > mx) {
        mx = array[i];
      }
    }

    return mx;
  }

  // A function to do counting sort of array[] according to
  // the digit represented by exp.
  private static void countSort(Integer[] array, int exp) {
    int n = array.length;
    int output[] = new int[n]; // output arrayay
    int i;
    int count[] = new int[10];
    Arrays.fill(count, 0);

    // Store count of occurrences in count[]
    for (i = 0; i < n; i++) {
      count[(array[i] / exp) % 10]++;
    }

    // Change count[i] so that count[i] now contains
    // actual position of this digit in output[]
    for (i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // Build the output arrayay
    for (i = n - 1; i >= 0; i--) {
      output[count[(array[i] / exp) % 10] - 1] = array[i];
      count[(array[i] / exp) % 10]--;
    }

    // Copy the output arrayay to array[], so that array[] now
    // contains sorted numbers according to current
    // digit
    for (i = 0; i < n; i++) {
      array[i] = output[i];
    }
  }

  // The main function to that sorts array[] of
  // size n using Radix Sort
  public static Integer[] sort(Integer array[]) {
    Integer[] result = array.clone();

    // Find the maximum number to know number of digits
    int m = getMax(result, result.length);

    // Do counting sort for every digit. Note that
    // instead of passing digit number, exp is passed.
    // exp is 10^i where i is current digit number
    for (int exp = 1; m / exp > 0; exp *= 10) {
      countSort(result, exp);
    }

    return result;
  }
}
