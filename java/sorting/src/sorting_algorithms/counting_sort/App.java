package sorting_algorithms.counting_sort;

import utils.*;

import constants.Constants;

public class App {
  public static int[] toIntArray(Integer[] array) {
    int[] intArray = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      intArray[i] = array[i];
    }
    return intArray;
  }

  public static void main(String[] args) {
    // Isi array dengan angka random
    Integer[] unsortedArray = GenerateUniqueNumbers.uniqueIntegers(Constants.ARRAY_SIZE, Constants.RANDOM_POOL_SIZE);

    // Tulis array yang belum diurutkan ke dalam file
    WriteToFile.writeNumberArray(unsortedArray, "src/sorting_algorithms/counting_sort/unsorted.txt");

    // Sort array dan ukur waktu yang dibutuhkan
    long startTime = System.currentTimeMillis();
    int[] sortedArray = CountingSort.sort(toIntArray(unsortedArray));
    long endTime = System.currentTimeMillis();

    System.out.println("Waktu yang dibutuhkan untuk mengurutkan array: " + (endTime - startTime) + " ms");

    // Tulis array yang sudah diurutkan ke dalam file
    WriteToFile.writeNumberArray(sortedArray, "src/sorting_algorithms/counting_sort/sorted.txt");

  }
}