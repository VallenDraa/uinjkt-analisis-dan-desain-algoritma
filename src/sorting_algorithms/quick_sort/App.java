package sorting_algorithms.quick_sort;

import java.util.Random;

import constants.Constants;
import utils.WriteToFile;

public class App {
  public static void main(String[] args) {

    Integer[] array = new Integer[Constants.ARRAY_SIZE];
    Random random = new Random();

    // Isi array dengan 10.000 angka random
    for (int i = 0; i < array.length; i++) {
      array[i] = random.nextInt(Constants.RANDOM_POOL_SIZE);
    }

    // Tulis array yang belum diurutkan ke dalam file
    WriteToFile.writeNumberArray(array, "src/sorting_algorithms/quick_sort/unsorted.txt");

    // Sort array dan ukur waktu yang dibutuhkan
    long startTime = System.currentTimeMillis();
    QuickSort.sort(array, 0, array.length - 1);
    long endTime = System.currentTimeMillis();

    System.out.println("Waktu yang dibutuhkan untuk mengurutkan array: " + (endTime - startTime) + " ms");

    // Tulis array yang sudah diurutkan ke dalam file
    WriteToFile.writeNumberArray(array, "src/sorting_algorithms/quick_sort/sorted.txt");

  }
}