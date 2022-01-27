# Game of Thrones - Character Titles
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