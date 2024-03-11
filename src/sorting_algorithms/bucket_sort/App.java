package sorting_algorithms.bucket_sort;

import java.util.Random;

import constants.Constants;
import utils.WriteToFile;

public class App {
  public static void main(String[] args) {

    Float[] unsortedArray = new Float[Constants.ARRAY_SIZE];
    Random random = new Random();

    // Isi array dengan 10.000 angka random
    for (int i = 0; i < unsortedArray.length; i++) {
      unsortedArray[i] = random.nextFloat();
    }

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