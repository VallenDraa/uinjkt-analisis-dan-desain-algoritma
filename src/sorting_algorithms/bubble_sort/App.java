package sorting_algorithms.bubble_sort;

import java.util.Random;

import utils.WriteToFile;

public class App {
  public static void main(String[] args) {
    final int ARRAY_SIZE = 10_000;

    Integer[] unsortedArray = new Integer[ARRAY_SIZE];
    Random random = new Random();

    // Isi array dengan 10.000 angka random
    for (int i = 0; i < unsortedArray.length; i++) {
      unsortedArray[i] = random.nextInt(10_000);
    }

    // Tulis array yang belum diurutkan ke dalam file
    WriteToFile.writeNumberArray(unsortedArray, "src/sorting_algorithms/bubble_sort/unsorted.txt");

    // Urutkan array dengan Bubble Sort dan ukur waktu yang dibutuhkan
    long startTime = System.currentTimeMillis();
    Integer[] sortedArray = BubbleSort.sort(unsortedArray);
    long endTime = System.currentTimeMillis();

    System.out.println("Waktu yang dibutuhkan untuk mengurutkan array: " + (endTime - startTime) + " ms");

    // Tulis array yang sudah diurutkan ke dalam file
    WriteToFile.writeNumberArray(sortedArray, "src/sorting_algorithms/bubble_sort/sorted.txt");

  }
}