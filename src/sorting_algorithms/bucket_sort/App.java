package sorting_algorithms.bucket_sort;

import constants.Constants;
import utils.GenerateUniqueNumbers;
import utils.*;

public class App {
  public static void main(String[] args) {
    // Isi array dengan angka random
    Float[] unsortedArray = GenerateUniqueNumbers.uniqueFloats(Constants.ARRAY_SIZE);

    // Tulis array yang belum diurutkan ke dalam file
    WriteToFile.writeNumberArray(unsortedArray, "src/sorting_algorithms/bucket_sort/unsorted.txt");

    // Sort array dan ukur waktu yang dibutuhkan
    long startTime = System.currentTimeMillis();
    Float[] sortedArray = BucketSort.sort(unsortedArray);
    long endTime = System.currentTimeMillis();

    System.out.println("Waktu yang dibutuhkan untuk mengurutkan array: " + (endTime - startTime) + " ms");

    // Tulis array yang sudah diurutkan ke dalam file
    WriteToFile.writeNumberArray(sortedArray, "src/sorting_algorithms/bucket_sort/sorted.txt");

  }
}