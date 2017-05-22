/*
*宽147格子，高47格子，实际高度为41格子；
* "!" 地面为冰属性地
* "x" 地面为草地属性地
* "@" 人物初始位置
* "o" 清图中所有怪物后，关卡传送门出现的初始位置
* "q" 1类怪物
* "w" 2类怪物
* "e" 3类怪物
* "r" 4类怪物
* "t" 5类怪物
* "y" 6类怪物
* "u" 7类怪物
* "i" 8类怪物
* "a" 9类怪物
* "s" 10类怪物
*/
var GAME_LEVELS = [
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                            xxxxxx                                                                       ",
   "                                                                                                                                                         ",
   "                                                                                   xxx                                                                   ",
   "                xx                                                q              q                                              		                 ",
   "              xxxxxx                                         xxxxxxxxxxx    xxxxxxxxxxx                                     							 ",
   "           xxxxxxxxxxxx                                                                                   						     			         ",
   "         xx            xx        xxxxxxxxxxx           xxxx                                                                 		                     ",
   "       xx                xx                                    q                                                       									 ",
   "      xxxxxxxxxxxxxxxxxxxxxx                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                                          ",
   "           xxxx    xxxx                                                                                                                                  ",
   "           x  x    x  x          xxxxxxxxxxx      q                           xxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx		     ",
   "           xxxx    xxxx                         xxxxx                                                                                                    ",
   "               xxxx          xxxx                                                                                                                        ",
   "                                   !!!!!!!!!!!!!!!                                                                                                       ",
   "    @                                                                                                                                               o    ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         ",
   "                                                                                                                                                         "
];

//人物跳的高度4，宽度2

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
