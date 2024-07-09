package sorting_algorithms.heap_sort;

import constants.Constants;
import utils.*;

public class App {
  public static void main(String[] args) {
    // Isi array dengan angka random
    Integer[] unsortedArray = GenerateUniqueNumbers.uniqueIntegers(Constants.ARRAY_SIZE, Constants.RANDOM_POOL_SIZE);

    // Tulis array yang belum diurutkan ke dalam file
    WriteToFile.writeNumberArray(unsortedArray, "src/sorting_algorithms/heap_sort/unsorted.txt");

    // Sort array dan ukur waktu yang dibutuhkan
    long startTime = System.currentTimeMillis();
    Integer[] sortedArray = HeapSort.sort(unsortedArray);
    long endTime = System.currentTimeMillis();

    System.out.println("Waktu yang dibutuhkan untuk mengurutkan array: " + (endTime - startTime) + " ms");

    // Tulis array yang sudah diurutkan ke dalam file
    WriteToFile.writeNumberArray(sortedArray, "src/sorting_algorithms/heap_sort/sorted.txt");

  }
}
