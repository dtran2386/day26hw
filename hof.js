module.exports = {
    /**
     * Return an object with a next() property. Each time the next function
     * is called the value returned is one higher than the time before.
     *
     *  var c = hof.counter(2);
     *  c.next(); // return 3
     */
    counter: function (start) {
        var begin = start;
        return {
          next: function () {
              begin = begin + 1;
              return begin;
            }
        };
    },

    /**
     * Return a function that accepts the value to multiply `val` by.
     *
     *  multiply(3)(5); // return 15
     */
    multiply: function (val) {
        return function(second) {
            return val * second;
        }
    },

    /**
     * Return an object with a discount() property. The discount property should
     * accept an amount that the original price should be discounted by. This
     * should not affect the original amount!
     *
     *  var tot = hof.total(20);
     *  tot.discount(0.50); // return 10
     *  tot.discount(0.20); // return 16
     */
    total: function (amount) {
        return {
            discount: function(second) {
                return amount - (second * amount);
            }
        };
    },

    /**
     * Set the name of a user. Only valid names can be provided. A `valid` name is
     * one that matches the regex ^[A-Za-z ]+$.
     *
     *  var user = hof.user();
     *  user.setName('Francis Bacon'); // return true
     *  user.getName(); // return 'Francis Bacon'
     *  user.setName('123 hi'); // return false
     *  user.getName(); // return 'Francis Bacon'
     */
    user: function () {
        var name = '';
        var pattern = new RegExp('^[A-Za-z ]+$');
        return {
          setName: function (string) {
              if (pattern.test(string) === true) {
                  name = string;
              } else {
                  return false;
              }
          },
          getName: function () {
              return name;
          },
        };
    },

    /**
     * Create a color object that's got six different properties: incrRed(amount), 
     * incrGreen(amount), and incrBlue(amount) - all of which change the R, G, or B
     * value by the specified quantity (could be negative).
     *
     * There should also be a red(), green(), and blue() function that return the current
     * value for that color channel.
     *
     * You can't have a color value less than zero or greater than 255.
     *
     *  var color = hof.color(150, 200, 18);
     *  color.incrRed(12);
     *  color.incrGreen(30);
     *  color.incrBlue(-9);
     *  console.log(color.red(), color.green(), color.blue()); // 162, 230, 9
     */
    color: function (r, g, b) {
        var num = r;
        var num2 = g;
        var num3 = b;
        return {
          incrRed: function(amount) {
              num = amount + num;
          },
          incrGreen: function(amount) {
              num2 = amount + num2;
          },
          incrBlue: function(amount) {
              num3 = amount + num3;
          },  
          red: function() {
              return num;
          },
          green: function() {
              return num2;
          },
          blue: function() {
              return num3;
          },  
        };
    },

    /**
     * Track the number of lives remaining in a game.
     *
     *  var lives = hof.lives(5);
     *  lives.died();
     *  console.log(lives.left()); // 4
     *  lives.died();
     *  console.log(lives.left()); // 3
     *  lives.restart();
     *  console.log(lives.left()); // 5
     */
    lives: function (start) {
        var current = start;
        return {
            died: function () {
                current = current - 1;
                if (current < 0) {
                return 0;
                }
                return current;
            },
            left: function () {
                if (current < 0) {
                    return 0;
                }
                return current;
            },
            restart: function () {
                current = start;
            },
        };
    },

    /**
     * Return a string that contains the 'message id' before the message text.
     * The message ID starts at one and increments with each record.
     *
     *  var logger = hof.messages();
     *  var msg = logger.record('first message');
     *  console.log(msg); // '[1] first message'
     *  msg = logger.record('second message');
     *  console.log(msg); // '[2] second message'
     */
    messages: function () {
        var input = '';
        var num = 1;
        return {
            record: function (string) {
                input = string;
                return '[' + (num++) + '] ' + input;
            },
        };
    },

    /**
     * Create a pocket object that can contain COINS and TRINKETS. The pocket
     * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
     * coins. You can also return the number of coins() or trinkets().
     *
     * You can't have a negative number of coins or trinkets.
     *
     *  var pocket = hof.pocket(50);
     *  pocket.buy(); // buy for 10 coins
     *  console.log(pocket.coins()); // 40
     *  console.log(pocket.trinkets()); // 1
     *
     *  pocket.buy();
     *  console.log(pocket.coins()); // 30
     *  console.log(pocket.trinkets()); // 2
     *
     *  pocket.sell();
     *  console.log(pocket.coins()); // 35
     *  console.log(pocket.trinkets()); // 1
     */
    pocket: function (start) {
       var coins = start;
       var trinkets = 0;
       return {
         buy: function () {
           coins = coins - 10;
           return coins + (trinkets++);
         },
         sell: function () {
           coins = coins + 5;
           return coins + (trinkets--);
         },
         coins: function () {
           return coins;
         },
         trinkets: function () {
           return trinkets;
         },
       };    
     },
    
};