package sorting_algorithms.cocktail_sort;

public class CocktailSort {
  public static Integer[] sort(Integer[] array) {
    Integer[] result = array.clone();

    boolean swapped = true;
    int start = 0;
    int end = array.length - 1;

    while (swapped == true) {
      // reset the swapped flag on entering the
      // loop, because it might be true from a
      // previous iteration.
      swapped = false;

      // loop from bottom to top same as
      // the bubble sort
      for (int i = start; i < end; ++i) {
        if (result[i] > result[i + 1]) {
          int temp = result[i];
          result[i] = result[i + 1];
          result[i + 1] = temp;
          swapped = true;
        }
      }

      // if nothing moved, then array is sorted.
      if (swapped == false) {
        break;
      }

      // otherwise, reset the swapped flag so that it
      // can be used in the next stage
      swapped = false;

      // move the end point back by one, because
      // item at the end is in its rightful spot
      end = end - 1;

      // from top to bottom, doing the
      // same comparison as in the previous stage
      for (int i = end; i >= start; i--) {
        if (result[i] > result[i + 1]) {
          int temp = result[i];
          result[i] = result[i + 1];
          result[i + 1] = temp;
          swapped = true;
        }
      }

      // increase the starting point, because
      // the last stage would have moved the next
      // smallest number to its rightful spot.
      start = start + 1;

    }

    return result;
  }
}
