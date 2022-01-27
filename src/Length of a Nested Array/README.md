# Length of a Nested Array
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:<br/>
<code>[1, [2, 3]]</code><br/>

// 2 elements, number 1 and array [2, 3]<br/>
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.<br/>
Write a function that returns the total number of non-nested items in a nested array.