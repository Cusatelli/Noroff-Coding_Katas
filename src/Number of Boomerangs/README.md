# Number of Boomerangs
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, 
with the first and last digits being the same and the middle digit being different.<br/><br/>
Some boomerang examples:<br/>
<code>[3, 7, 3], [1, -1, 1], [5, 6, 5]</code><br/><br/>
Create a function that returns the total number of  boomerangs in an array.<br/>
To illustrate:<br/>
<code>[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]</code><br/>
// 3 boomerangs in this sequence:<br/>
<code>[3, 7, 3], [1, 5, 1], [2, -2, 2]</code><br/>
Be aware that boomerangs can overlap, like so:<br/>
<code>[1, 7, 1, 7, 1, 7, 1]</code><br/>
// 5 boomerangs (from left to right):<br/>
<code>[1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]</code><br/><br/>
Examples<br/>
<code>countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2</code><br/>
<code>countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1</code><br/>
<code>countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0</code><br/>
<code>countBoomerangs([1, 7, 1, 7, 1, 7, 1]) ➞ 5</code><br/><br/>
Notes<br/>
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last