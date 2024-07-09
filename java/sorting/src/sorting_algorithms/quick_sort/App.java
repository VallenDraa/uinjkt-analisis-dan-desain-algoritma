package sorting_algorithms.quick_sort;

import constants.Constants;
import utils.*;

public class App {
  public static void main(String[] args) {
    // Isi array dengan angka random
    Integer[] unsortedArray = GenerateUniqueNumbers.uniqueIntegers(Constants.ARRAY_SIZE, Constants.RANDOM_POOL_SIZE);

    // Tulis array yang belum diurutkan ke dalam file
    WriteToFile.writeNumberArray(unsortedArray, "src/sorting_algorithms/quick_sort/unsorted.txt");

    // Sort array dan ukur waktu yang dibutuhkan
    long startTime = System.currentTimeMillis();
    QuickSort.sort(unsortedArray, 0, unsortedArray.length - 1);
    long endTime = System.currentTimeMillis();

    System.out.println("Waktu yang dibutuhkan untuk mengurutkan array: " + (endTime - startTime) + " ms");

    // Tulis array yang sudah diurutkan ke dalam file
    WriteToFile.writeNumberArray(unsortedArray, "src/sorting_algorithms/quick_sort/sorted.txt");

  }
}