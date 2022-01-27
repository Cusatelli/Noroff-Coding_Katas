<div id="top"></div>

<div align="center">
  <img src="/resources/KataLogo.png" alt="Logo" width="250" height="250">
  <h3 align="center">Noroff Daily Coding Katas</h3>
</div>

# Table of Contents
1. [Katas](#katas)
2. [Maintainers](#maintainers)
3. [Contributing](#contributing)
4. [Conventions](#conventions)
5. [License](#license)
6. [Contact](#contact)

# Katas
<table>
  <tr align="left">
    <th>Kata</th>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr align="left">
    <td>1</td>
    <td><a href="/src/Basketball%20Points">Basketball Points</a></td>
    <td>
      You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
    </td>
  </tr>
  <tr align="left">
    <td>2</td>
    <td><a href="/src/Double%20letter%20Word%20splitter">Double letter Word splitter</a></td>
    <td>
      Write a function called splitOnDoubleLetter() that receives a word, of type string, as an argument. The function should split the word where any double letter is found and return an array of the split word. If no repeated letters are found, simply return an empty array
    </td>
  </tr>
  <tr align="left">
    <td>3</td>
    <td><a href="/src/Classic%20FizzBuzz">The Classic FizzBuzz</a></td>
    <td>
      Write a short program that prints each number from 1 to n on a new line.<br/>
      For each multiple of 3, print <strong>"Fizz"</strong> instead of the number.<br/>
      For each multiple of 5, print <strong>"Buzz"</strong> instead of the number.<br/>
      For numbers which are multiples of both 3 and 5, print <strong>"FizzBuzz"</strong> instead of the number.
    </td>
  </tr>
  <tr align="left">
    <td>4</td>
    <td><a href="/src/Length%20of%20a%20Nested%20Array">Length of a Nested Array</a></td>
    <td>
      The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:<br/>
      [1, [2, 3]]<br/><br/>
      // 2 elements, number 1 and array [2, 3]<br/>
      Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.<br/>
      Write a function that returns the total number of non-nested items in a nested array.
    </td>
  </tr>
  <tr align="left">
    <td>5</td>
    <td><a href="/src/Choose%20your%20own%20adventure">Choose your own adventure</a></td>
    <td>
      The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.<br/>
      Find the sum of all the primes below two million.<br/><br/>
      Found here: <a href="https://projecteuler.net/problem=10">https://projecteuler.net/problem=10</a>
    </td>
  </tr>
  <tr align="left">
    <td>6</td>
    <td><a href="/src/Game%20of%20Thrones%20-%20Character%20Titles">Game of Thrones: Character Titles</a></td>
    <td>
      Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.<br/>
      <ul>
        <li>The words and, the, of and in should be lowercase.</li>
        <li>All other words should have the first character as uppercase and the rest lowercase.</li>
        <li>All commas must always be followed by a single space.</li>
        <li>All titles must end with a period.</li>
      </ul><br/>
      Examples<br/>
      <code>correctTitle("jOn SnoW, kINg IN thE noRth")</code> ➞ "Jon Snow, King in the North."<br/>
      <code>correctTitle("sansa stark,lady of winterfell.")</code> ➞ "Sansa Stark, Lady of Winterfell."<br/>
      <code>correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")</code> ➞ "Tyrion Lannister, Hand of the Queen."<br/><br/>
      Notes
      <ul>
        <li>Punctuation and spaces must remain in their original positions.</li>
        <li>All commas must be followed by a single space.</li>
        <li>Titles must end with a period.</li>
        <li>Hyphenated words are considered separate words.</li>
        <li>Be careful with words that contain and, the, of or in.</li>
      </ul>
    </td>
  </tr>
  <tr align="left">
    <td>6</td>
    <td><a href="/src/How%20Many%20Shuffles">How Many Shuffles?</a></td>
    <td>
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
    </td>
  </tr>
  <tr align="left">
    <td>6</td>
    <td><a href="/src/Number%20of%20Boomerangs">Number of Boomerangs</a></td>
    <td>
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
    </td>
  </tr>
  <tr align="left">
    <td>6</td>
    <td><a href="/src/TicTacToe">Tic Tac Toe</a></td>
    <td>
      Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" 
      represent themselves on the matrix, and "E" represents an empty spot.<br/><br/>
      Examples<br/>
<pre>
ticTacToe([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"]
]) ➞ "X"
ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"
ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"
</pre>
      Notes<br/>
      Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the capitalised word "Draw". 
      If you return "X" or "O", make sure they're capitalised too.
    </td>
  </tr>
</table>
  

<p align="right">(<a href="#top">back to top</a>)</p>

# Maintainers
[@Cusatelli](https://github.com/Cusatelli)

# Contributing
No active contributors.

<p align="right">(<a href="#top">back to top</a>)</p>

# Conventions
`fix: <description>` a commit of the type fix patches a bug in your codebase (this correlates with `PATCH` in Semantic Versioning).<br/>
`feat: <description>` a commit of the type feat introduces a new feature to the codebase (this correlates with `MINOR` in Semantic Versioning).<br/>
`BREAKING CHANGE: <description>` a commit that has a footer `BREAKING CHANGE:`, or appends a ! after the type/scope, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A `BREAKING CHANGE` can be part of commits of any type.

Read more: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) v1.0.0

<p align="right">(<a href="#top">back to top</a>)</p>

# License
No active license.

<p align="right">(<a href="#top">back to top</a>)</p>

# Contact
Email: <a href="mailto:github.cusatelli@gmail.com">github.cusatelli@gmail.com</a>

<p align="right">(<a href="#top">back to top</a>)</p>
