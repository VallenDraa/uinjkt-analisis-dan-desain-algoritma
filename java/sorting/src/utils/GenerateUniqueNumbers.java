package utils;

import java.util.*;

public class GenerateUniqueNumbers {
	public static Long[] uniqueLongs(int size, long poolSize) {
		Random rand = new Random();
		Set<Long> generated = new HashSet<>();
		Long[] result = new Long[size];
		int index = 0;

		while (index < size) {
			long num = (long) (rand.nextDouble() * poolSize);

			if (!generated.contains(num)) {
				result[index++] = num;
				generated.add(num);
			}
		}

		return result;
	}

	public static Integer[] uniqueIntegers(int size, int poolSize) {
		Random rand = new Random();
		Set<Integer> generated = new HashSet<>();
		Integer[] result = new Integer[size];
		int index = 0;

		while (index < size) {
			int num = rand.nextInt(poolSize);

			if (!generated.contains(num)) {
				result[index++] = num;
				generated.add(num);
			}
		}

		return result;
	}

	public static Float[] uniqueFloats(int size) {

		Random rand = new Random();
		Set<Float> generated = new HashSet<>();
		Float[] result = new Float[size];
		int index = 0;

		while (index < size) {
			float num = rand.nextFloat();

			if (!generated.contains(num)) {
				result[index++] = num;
				generated.add(num);
			}
		}

		return result;
	}
}
