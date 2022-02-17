# Fair Play
Together with your coworker, Larry, you are organizing the exciting Billiards and Pool Competition for your coworkers in your small company. You and Larry are usually on the same page, and surely he will approve of your latest idea. You even bought a nice prize for your coworkers to win and you hope that they are as excited as you are. You want to maximise fun.

It would thus be nice to try to avoid complete walkovers: that is no fun for either player. After some thought, you think it is good to suggest to Larry to divide the players into groups of two. That way, you can compensate for a player’s strength by pairing them with a weaker player. In fact, it would be perfect if every team had the exact same strength! Before you tell Larry your plans, you decide to first figure out whether this is possible.

According to your model, synergy plays a negligible role in determining team strength, and the strength of a team is simply determined by the strength of its individual members. Every coworker has a certain skill level in both billiards and pool, as indicated by two nonnegative integers. When two coworkers are teamed up, their total skill is the sum of their individual skills. Can you divide everyone into teams of two such that every team has the exact same skill in both pool and billiards?

### Input
The input consists of:

A line with an integer n (2≤n≤105), the number of coworkers you have.

Then follow n lines containing two integers b and p (−106≤b,p≤106), the skill in billiards and pool, respectively, of each coworker.

### Output
Output “possible” if it is possible to divide all coworkers into teams of two with equal skill. Output “impossible” otherwise.

#### Sample Input 1
```
6
2 1
3 0
3 0
4 2
4 2
5 1
```

#### Sample Output 1
```
possible
```

#### Sample Input 2
```
4
1 0
0 1
-2 0
0 -2
```

#### Sample Output 2
```
impossible
```
