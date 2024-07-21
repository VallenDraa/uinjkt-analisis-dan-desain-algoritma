package sorting_algorithms.counting_sort;

import utils.*;

import constants.Constants;

public class App {
  public static void main(String[] args) {
    // Isi array dengan angka random
    Integer[] unsortedArray = GenerateUniqueNumbers.uniqueIntegers(Constants.COUNTING_ARRAY_SIZE,
        Constants.COUNTING_RANDOM_POOL_SIZE);

    // Tulis array yang belum diurutkan ke dalam file
    WriteToFile.writeNumberArray(unsortedArray, "src/sorting_algorithms/counting_sort/unsorted.txt");

    // Sort array dan ukur waktu yang dibutuhkan
    long startTime = System.currentTimeMillis();
    Integer[] sortedArray = CountingSort.sort(unsortedArray);
    long endTime = System.currentTimeMillis();

    System.out.println("Waktu yang dibutuhkan untuk mengurutkan array: " + (endTime - startTime) + " ms");

    // Tulis array yang sudah diurutkan ke dalam file
    WriteToFile.writeNumberArray(sortedArray, "src/sorting_algorithms/counting_sort/sorted.txt");

  }
}