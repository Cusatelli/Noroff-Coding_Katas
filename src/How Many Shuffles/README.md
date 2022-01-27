# How many Shuffles?
An out-shuffle, also known as an out Faro shuffle or a perfect shuffle, is a controlled method for shuffling playing cards.<br/><br/>
It is performed by splitting the deck into two equal halves and interleaving them together perfectly, 
with the condition that the top card of the deck remains in place.<br/>
Demonstration<br/><br/>
Using an array to represent a deck of cards, an out-shuffle looks like:<br/>
<code>[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]</code><br/>
// Card 1 remains in the first position.<br/><br/>
Examples<br/>
Shuffle 1:<br/>
<code>[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]</code><br/>
Shuffle 2:<br/>
<code>[1, 5, 2, 6, 3, 7, 4, 8] ➞ [1, 3, 5, 7, 2, 4, 6, 8]</code><br/>
Shuffle 3:<br/>
<code>[1, 3, 5, 7, 2, 4, 6, 8] ➞ [1, 2, 3, 4, 5, 6, 7, 8]</code><br/>
// Back where we started.<br/><br/>
Write a function shuffleCount that takes a positive even integer num representing the number of the cards in a deck, 
and returns the number of out-shuffles required to return the deck to its original order.</br><br/>
Examples<br/>
<code>shuffleCount(8) ➞ 3</code><br/>
<code>shuffleCount(14) ➞ 12</code><br/>
<code>shuffleCount(52) ➞ 8</code><br/><br/>
Notes<br/>
The number of cards is always greater than zero. Thus, the smallest possible deck size is 2.