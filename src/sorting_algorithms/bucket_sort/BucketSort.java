package sorting_algorithms.bucket_sort;

import java.util.Collections;
import java.util.Vector;

public class BucketSort {

  // Function to sort arr[] of size n
  // using bucket sort
  public static Float[] sort(Float[] array) {
    if (array.length <= 0) {
      return array;
    }

    Float[] result = array.clone();

    // 1) Create n empty buckets
    @SuppressWarnings("unchecked")
    Vector<Float>[] buckets = new Vector[result.length];

    for (int i = 0; i < result.length; i++) {
      buckets[i] = new Vector<Float>();
    }

    // 2) Put array elements in different buckets
    for (int i = 0; i < result.length; i++) {
      float idx = result[i] * result.length;
      buckets[(int) idx].add(result[i]);
    }

    // 3) Sort individual buckets
    for (int i = 0; i < result.length; i++) {
      Collections.sort(buckets[i]);
    }

    // 4) Concatenate all buckets into arr[]
    int index = 0;
    for (int i = 0; i < result.length; i++) {
      for (int j = 0; j < buckets[i].size(); j++) {
        result[index++] = buckets[i].get(j);
      }
    }

    return result;
  }
}
