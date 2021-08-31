import java.util.*;
import java.io.*;

public class Solution {
  public static void main(String[] args) {
    Scanner in = new Scanner(new BufferedReader(new InputStreamReader(System.in)));
    int t = in.nextInt(); // Scanner has functions to read ints, longs, strings, chars, etc.
    for (int i = 1; i <= t; ++i) {
        int n = in.nextInt();
        int[] arr = new int[n];
        for (int j = 0; j<n; j++) {
          int num = in.nextInt();
          arr[j] = num;
        }
        int res = solve(n, arr);
        System.out.println("Case #" + i + ": " + res);
    }
  }
   
  public static int solve(int n, int[] arr) {
    int cost = 0;
    for (int i=0; i<arr.length-1; i++) {
      int j = minPosition(arr, i, arr.length);
      reverse(arr, i, j);
      cost+= (j-i+1);
    }
    return cost;
  }

  public static void reverse(int[] arr, int i, int j) {
    int len = j - i + 1;
    int[] aux = new int[len];
    for(int k=0; k<len; k++) {
      aux[k] = arr[j-k];
    }
    for(int k=0; k<aux.length; k++, i++) {
      arr[i] = aux[k];
    }
  }

  public static int minPosition(int[] arr, int i, int j) {
    int min = Integer.MAX_VALUE;
    int pos = i;
    for (int k=i; k<j; k++) {
      if (arr[k] < min) {
        min = arr[k];
        pos = k;
      }
    }
    return pos;
  }

  public static void printArray(int[] arr) {
    for (int i=0; i<arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
    System.out.println();
  } 
}

