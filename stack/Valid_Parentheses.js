/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 * */

//this quiztions using with stack
//what is stack
//stack = stack like a dish you can add one item on the dish and you can take only last item

/*
 *   you can appent item here and clone this only
 *   ____
 *   ____
 *   ____
 *   ____
 */

function isValid(text) {
  if (text.length == 0) {
    return false;
  }
  let stack = "";
  const validParentheses = { "{": "}", "(": ")", "[": "]" };
  for (const c of text) {
    if (validParentheses[c]) {
      stack += c;
    } else if (stack.length == 0) {
      return false;
    } else {
      const last = stack[stack.length - 1];
      stack = stack.slice(0, -1);
      if (validParentheses[last] != c) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
