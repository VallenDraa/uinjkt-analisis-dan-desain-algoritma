package utils;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Path;
import java.nio.file.Paths;

public class WriteToFile {
  public static <T extends Number> void writeNumberArray(T[] array, String filename) {
    try {
      String currentDirectory = System.getProperty("user.dir");
      Path path = Paths.get(currentDirectory, filename);

      FileWriter fileWriter = new FileWriter(path.toString());
      PrintWriter printWriter = new PrintWriter(fileWriter);

      for (T number : array) {
        printWriter.print(number + " ");
      }

      printWriter.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
