#include <bits/stdc++.h>
using namespace std;

#include<bits/stdc++.h>
int square_digits(int num) {
  int i=0;
  int ans = 0;
  int ans_length;

int length_of_digit(int num){
  int length=0;
  while(num){
    num/=10;
    length++;
  }
  return length;
}
  
int add_square(int digit){
  if(!ans){
    ans = digit*digit;
    ans_length = length_of_digit(ans);
  }
  else{
    if(!digit)
      ans_length++;
    else
      ans  = digit*digit* pow(10,ans_length); } 
  
    
}
 while(num){
   int digit = num%10;
   add_square(digit);
   num/=10;
 }

 return ans;
}


int main() {
	// your code goes here

}
