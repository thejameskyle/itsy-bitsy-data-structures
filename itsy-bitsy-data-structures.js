'use strict';

/**
 * ███████████████═╗ ███████████████═╗   █████████████═╗ █████═╗   █████═╗
 * ███████████████ ║ ███████████████ ║ ███████████████ ║ █████ ║   █████ ║
 *  ╚═══█████ ╔════╝  ╚═══█████ ╔════╝ █████ ╔═════════╝ █████ ║   █████ ║
 *      █████ ║           █████ ║      █████ ║           █████ ║   █████ ║
 *      █████ ║           █████ ║      █████████████═╗   ███████████████ ║
 *      █████ ║           █████ ║       ╚█████████████═╗  ╚███████████ ╔═╝
 *      █████ ║           █████ ║         ╚══════█████ ║    ╚═█████ ╔══╝
 *      █████ ║           █████ ║                █████ ║      █████ ║
 * ███████████████═╗      █████ ║      ███████████████ ║      █████ ║
 * ███████████████ ║      █████ ║      █████████████ ╔═╝      █████ ║
 *  ╚══════════════╝       ╚════╝       ╚════════════╝         ╚════╝
 *
 * █████████████═══╗ ███████████████═╗ ███████████████═╗   █████████████═╗ █████═╗   █████═╗
 * ███████████████ ║ ███████████████ ║ ███████████████ ║ ███████████████ ║ █████ ║   █████ ║
 * █████ ╔═══█████ ║  ╚═══█████ ╔════╝  ╚═══█████ ╔════╝ █████ ╔═════════╝ █████ ║   █████ ║
 * █████ ║   █████ ║      █████ ║           █████ ║      █████ ║           █████ ║   █████ ║
 * █████████████ ╔═╝      █████ ║           █████ ║      █████████████═╗   ███████████████ ║
 * ███████████████═╗      █████ ║           █████ ║       ╚█████████████═╗  ╚███████████ ╔═╝
 * █████ ╔═══█████ ║      █████ ║           █████ ║         ╚══════█████ ║    ╚═█████ ╔══╝
 * █████ ║   █████ ║      █████ ║           █████ ║                █████ ║      █████ ║
 * ███████████████ ║ ███████████████═╗      █████ ║      ███████████████ ║      █████ ║
 * █████████████ ╔═╝ ███████████████ ║      █████ ║      █████████████ ╔═╝      █████ ║
 *  ╚════════════╝    ╚══════════════╝       ╚════╝       ╚════════════╝         ╚════╝
 *
 * █████████████═══╗   ███████████═══╗ ███████████████═╗   ███████████═══╗
 * ███████████████ ║ ███████████████ ║ ███████████████ ║ ███████████████ ║
 * █████ ╔═══█████ ║ █████ ╔═══█████ ║  ╚═══█████ ╔════╝ █████ ╔═══█████ ║
 * █████ ║   █████ ║ █████ ║   █████ ║      █████ ║      █████ ║   █████ ║
 * █████ ║   █████ ║ ███████████████ ║      █████ ║      ███████████████ ║
 * █████ ║   █████ ║ ███████████████ ║      █████ ║      ███████████████ ║
 * █████ ║   █████ ║ █████ ╔═══█████ ║      █████ ║      █████ ╔═══█████ ║
 * █████ ║   █████ ║ █████ ║   █████ ║      █████ ║      █████ ║   █████ ║
 * ███████████████ ║ █████ ║   █████ ║      █████ ║      █████ ║   █████ ║
 * █████████████ ╔═╝ █████ ║   █████ ║      █████ ║      █████ ║   █████ ║
 *  ╚════════════╝    ╚════╝    ╚════╝       ╚════╝       ╚════╝    ╚════╝
 *
 *   █████████████═╗ ███████████████═╗ █████████████═══╗ █████═╗   █████═╗   █████████████═╗ ███████████████═╗
 * ███████████████ ║ ███████████████ ║ ███████████████ ║ █████ ║   █████ ║ ███████████████ ║ ███████████████ ║
 * █████ ╔═════════╝  ╚═══█████ ╔════╝ █████ ╔═══█████ ║ █████ ║   █████ ║ █████ ╔═════════╝  ╚═══█████ ╔════╝
 * █████ ║                █████ ║      █████ ║   █████ ║ █████ ║   █████ ║ █████ ║                █████ ║
 * █████████████═╗        █████ ║      █████████████ ╔═╝ █████ ║   █████ ║ █████ ║                █████ ║
 *  ╚█████████████═╗      █████ ║      ███████████████═╗ █████ ║   █████ ║ █████ ║                █████ ║
 *    ╚══════█████ ║      █████ ║      █████ ║   █████ ║ █████ ║   █████ ║ █████ ║                █████ ║
 *           █████ ║      █████ ║      █████ ║   █████ ║ █████ ║   █████ ║ █████ ║                █████ ║
 * ███████████████ ║      █████ ║      █████ ║   █████ ║ ███████████████ ║ ███████████████═╗      █████ ║
 * █████████████ ╔═╝      █████ ║      █████ ║   █████ ║  ╚███████████ ╔═╝  ╚█████████████ ║      █████ ║
 *  ╚════════════╝         ╚════╝       ╚════╝    ╚════╝    ╚══════════╝      ╚════════════╝       ╚════╝
 *
 * █████═╗   █████═╗ █████████████═══╗ ████████████████═╗   ██████████████═╗
 * █████ ║   █████ ║ ███████████████ ║ ████████████████ ║ ████████████████ ║
 * █████ ║   █████ ║ █████ ╔═══█████ ║ █████ ╔══════════╝ █████ ╔══════════╝
 * █████ ║   █████ ║ █████ ║   █████ ║ █████ ║            █████ ║
 * █████ ║   █████ ║ █████████████ ╔═╝ ████████████████═╗ ██████████████═╗
 * █████ ║   █████ ║ ███████████████═╗ ████████████████ ║  ╚██████████████═╗
 * █████ ║   █████ ║ █████ ║   █████ ║ █████ ╔══════════╝    ╚═══════█████ ║
 * █████ ║   █████ ║ █████ ║   █████ ║ █████ ║                       █████ ║
 * ███████████████ ║ █████ ║   █████ ║ ████████████████═╗ ████████████████ ║
 *  ╚███████████ ╔═╝ █████ ║   █████ ║ ████████████████ ║ ██████████████ ╔═╝
 *    ╚══════════╝    ╚════╝    ╚════╝  ╚═══════════════╝  ╚═════════════╝
 *
 * ══════════════════════════════════════════════════════════════════════
 * ████ By James Kyle (@thejameskyle) █████████████████████████████████████████
 * ══════════════════════════════════════════════════════════════════════
 */

/**
 * Today we're gonna learn all about data structures.
 *
 *    "OOooooOOOooh *soo* exciting" right?
 *
 * Yeah, they definitely aren't the juiciest topic out there, but they are
 * important. Not just to pass computer science 101, but in order to be a
 * better programmer.
 *
 * Knowing your data structures can help you:
 *
 *   - Manage complexity and make your programs easier to follow.
 *   - Build high-performance, memory-efficient programs.
 *
 * I believe that the former is more important. Using the right 
 * data structure can drastically simplify what would otherwise 
 * be complicated logic.
 *
 * The latter is important too. If performance or memory matters then
 * using the right data structure is more than often essential.
 *
 * In order to learn about data structures, we're going to implement a few of
 * them together. Don't worry, we'll keep the code nice and short. In fact,
 * there are way more comments than there is code.
 */

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

/**
 * What are data structures?
 *
 * Essentially, they are different methods of storing and organizing data that
 * serve a number of different needs.
 *
 * Data can always be represented in many different ways. However, depending on
 * what that data is and what you need to do with it, one representation will
 * be a better choice than the others.
 *
 * To understand why let's first talk a bit about algorithms.
 */

/*** ===================================================================== ***\
 ** - ALGORITHMS ---------------------------------------------------------- **
 * ========================================================================= *
 *                                                                           *
 *                        ,--,--.    ,--,--.                                 *
 *   ,----------.        |   |   |  |   |   |            _____               *
 *  |`----------'|       |   |   |  |   |   |           |     |    ,------.  *
 *  |            |       |   |   |  |   |   |      ,--. | o o |   |`------'| *
 *  |            |      ,| +-|-+ |  | +-|-+ |`     |  | |_____|   |        | *
 *  |            | ,:==| | |###|======|###| | |====#==#====#=,,   |        | *
 *  |            | ||   `| +---+ |  | +---+ |'  ,,=#==#====O=``  ,|        | *
 *  |            | ||    |   |   |  |   |   |   ``=#==#====#=====||        | *
 *   `----------'  ||    |   |   |  |   |   |      |__|          `|        | *
 *    | | ``=| |===``    `--,',--`  `--,',--`      /||\            `------'  *
 **   \_/    \_/         / /   \ \  / /   \ \     //||\\           |_|  |_| **
\*** ===================================================================== ***/

/**
 * Algorithm is a fancy name for step-by-step sets of operations to be
 * performed.
 *
 * Data structures are implemented with algorithms, and algorithms are
 * implemented with data structures. It's data structures and algorithms all
 * the way down until you reach the microscopic people with punch cards that
 * control the computer. (That's how computers work right?)
 *
 * Any given task can be implemented in an infinite number of ways. So for
 * common tasks there are often many different algorithms that people have come up
 * with.
 *
 * For example, there are an absurd number of algorithms for sorting a set of
 * unordered items:
 *
 *     Insertion Sort, Selection Sort, Merge Sort, Bubble Sort, Heap Sort,
 *     Quick Sort, Shell Sort, Timsort, Bucket Sort, Radix Sort, ...
 *
 * Some of these are significantly faster than others. Some use less memory.
 * Some are easy to implement. Some are based on assumptions about the dataset.
 *
 * Every single one of them will be better for *something*. So you'll need to
 * make a decision based on what your needs are and for that, you'll need a way
 * of comparing them, a way to measure them.
 *
 * When we compare the performance of algorithms we use a rough measurement of
 * their average and worst-case performance using something called "Big-O".
 */

/*** ===================================================================== ***\
 ** - BIG-O NOTATION ------------------------------------------------------ **
 * ========================================================================= *
 *           a           b                                 d                 *
 *           a         b    O(N^2)                      d                    *
 *     O(N!) a        b                O(N log N)    d                    c  *
 *           a      b                            d                 c         *
 *          a      b                          d             c        O(N)    *
 *          a    b                         d         c                       *
 *          a  b                       d      c                              *
 *         a  b                     d  c                                     *
 *         ab                   c                          O(1)              *
 *  e    e    e    e    ec   d    e    e    e    e    e     e    e    e      *
 *      ba        c      d                                                   *
 *    ba   c        d                       f    f    f    f    f    f    f  *
 ** cadf    f d    f    f    f    f    f       O(log N)                     **
\*** ===================================================================== ***/

/**
 * Big-O Notation is a way of roughly measuring the performance of algorithms
 * in order to compare one against another when discussing them.
 *
 * Big-O is a mathematical notation that we borrowed in computer science to
 * classify algorithms by how they respond to the number (N) of items that you
 * give them.
 *
 * There are two primary things that you measure with Big-O:
 *
 * - **Time complexity** refers to the total count of operations an algorithm
 *   will perform given a set of items.
 *
 * - **Space complexity** refers to the total memory an algorithm will take up
 *   while running given a set of items.
 *
 * We measure these independently from one another because while an algorithm
 * may perform fewer operations than another, it may also take up way more
 * memory. Depending on what your requirements are, one may be a better choice
 * than the other.
 *
 * These are some common Big-O's:
 *
 *     Name           Notation     How you feel when they show up at your party
 *     ------------------------------------------------------------------------
 *     Constant       O(1)         AWESOME!!
 *     Logarithmic    O(log N)     GREAT!
 *     Linear         O(N)         OKAY.
 *     Linearithmic   O(N log N)   UGH...
 *     Polynomial     O(N ^ 2)     SHITTY
 *     Exponential    O(2 ^ N)     HORRIBLE
 *     Factorial      O(N!)        WTF
 *
 * To give you an idea of how many operations we're talking about. Let's look
 * at what these would equal given the (N) number of items.
 *
 *                N = 5            10             20             30
 *     -----------------------------------------------------------------------
 *     O(1)           1            1              1              1
 *     O(log N)       2.3219...    3.3219...      4.3219...      4.9068...
 *     O(N)           5            10             20             30
 *     O(N log N)     11.609...    33.219...      84.638...      147.204...
 *     O(N ^ 2)       25           100            400            900
 *     O(2 ^ N)       32           1024           1,048,576      1,073,741,824
 *     O(N!)          120          3,628,800      2,432,902,0... 265,252,859,812,191,058,636,308,480,000,000
 *
 * As you can see, even for relatively small sets of data you could do 
 * a **lot** of extra work.
 *
 * With data structures, you can perform 4 primary types of actions:
 * Accessing, Searching, Inserting, and Deleting.
 *
 * It is important to note that data structures may be good at one action but
 * bad at another.
 *
 *                            Accessing    Searching    Inserting    Deleting
 *    -------------------------------------------------------------------------
 *                  Array     O(1)         O(N)         O(N)         O(N)
 *            Linked List     O(N)         O(N)         O(1)         O(1)
 *     Binary Search Tree     O(log N)     O(log N)     O(log N)     O(log N)
 *
 * Or rather...
 *
 *                            Accessing    Searching    Inserting    Deleting
 *    -------------------------------------------------------------------------
 *                  Array     AWESOME!!    OKAY         OKAY         OKAY
 *            Linked List     OKAY         OKAY         AWESOME!!    AWESOME!!
 *     Binary Search Tree     GREAT!       GREAT!       GREAT!       GREAT!
 *
 * Even further, some actions will have a different "average" performance and a
 * "worst case scenario" performance.
 *
 * There is no perfect data structure, and you choose one over another based on
 * the data that you are working with and the things you are going to do with
 * it. This is why it is important to know a number of different common data
 * structures so that you can choose from them.
 */

/*** ===================================================================== ***\
 ** - MEMORY -------------------------------------------------------------- **
 * ========================================================================= *
 *                             _.-..                                         *
 *                           ,'9 )\)`-.,.--.                                 *
 *                           `-.|           `.                               *
 *                              \,      ,    \)                              *
 *                               `.  )._\   (\                               *
 *                                |//   `-,//                                *
 *                                ]||    //"                                 *
 **                        hjw    ""    ""                                  **
\*** ===================================================================== ***/

/**
 * A computer's memory is pretty boring, it's just a bunch of ordered slots
 * where you can store information. You hold onto memory addresses in order to
 * find information.
 *
 * Let's imagine a chunk of memory like this:
 *
 *      Values: |1001|0110|1000|0100|0101|1010|0010|0001|1101|1011...
 *   Addresses: 0    1    2    3    4    5    6    7    8    9    ...
 *
 * If you've ever wondered why things are zero-indexed in programming languages
 * before, it is because of the way that memory works. If you want to read the
 * first chunk of memory you read from 0 to 1, the second you read from 1 to 2.
 * So the address that you hold onto for each of those is 0 and 1 respectively.
 *
 * Your computer has much much more memory than this, and it is all just a
 * continuation of the pattern above.
 *
 * Memory is a bit like the wild west, every program running on your machine is
 * stored within this same *physical* data structure. Without layers of
 * abstraction over it, it would be extremely difficult to use.
 *
 * But these abstractions serve two additional purposes:
 *
 *   - Storing data in memory in a way that is more efficient and/or faster to
 *     work with.
 *   - Storing data in memory in a way that makes it easier to use.
 */

/*** ===================================================================== ***\
 ** - LISTS --------------------------------------------------------------- **
 * ========================================================================= *
 *                  *     _______________________                            *
 *                    ()=(_______________________)=()           *            *
 *       *                |                     |                            *
 *                        |   ~ ~~~~~~~~~~~~~   |       *               *    *
 *             *          |                     |                            *
 *   *                    |   ~ ~~~~~~~~~~~~~   |         *                  *
 *                        |                     |                            *
 *                        |   ~ ~~~~~~~~~~~~~   |                 *          *
 *        *               |                     |                            *
 *                   *    |_____________________|         *        *         *
 *                    ()=(_______________________)=()                        *
 **                                                                         **
\*** ===================================================================== ***/

/**
 * To demonstrate the raw interaction between memory and a data structure we're
 * going to first implement a list.
 *
 * A list is a representation of an ordered sequence of values where the same
 * value may appear many times.
 */

class List {

  /**
   * We start with an empty block of memory which we are going to represent
   * with a normal JavaScript array and we'll store the length of the list.
   *
   * Note that we want to store the length separately because in real life the
   * "memory" doesn't have a length you can read from.
   */

  constructor() {
    this.memory = [];
    this.length = 0;
  }

  /**
   * First we need a way to retrieve data from our list.
   *
   * With a plain list, you have very fast memory access because you keep track
   * of the address directly.
   *
   * List access is constant O(1) - "AWESOME!!"
   */

  get(address) {
    return this.memory[address];
  }

  /**
   * Because lists have an order you can insert stuff at the start, middle,
   * or end of them.
   *
   * For our implementation, we're going to focus on adding and removing values
   * at the start or end of our list with these four methods:
   *
   *   - Push    - Add value to the end
   *   - Pop     - Remove a value from the end
   *   - Unshift - Add value to the start
   *   - Shift   - Remove a value from the start
   */

  /*
   * Starting with "push" we need a way to add items to the end of the list.
   *
   * It is as simple as adding a value in the address after the end of our
   * list. Because we store the length this is easy to calculate. We just add
   * the value and increment our length.
   *
   * Pushing an item to the end of a list is constant O(1) - "AWESOME!!"
   */

  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  /**
   * Next we need a way to "pop" items off of the end of our list.
   *
   * Similar to push all we need to do is remove the value at the address at
   * the end of our list. Then just decrement length.
   *
   * Popping an item from the end of a list is constant O(1) - "AWESOME!!"
   */

  pop() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    // Get the last value, stop storing it, and return it.
    let lastAddress = this.length - 1;
    let value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Also return the value so it can be used.
    return value;
  }

  /**
   * "push" and "pop" both operate on the end of a list, and overall are pretty
   * simple operations because they don't need to be concerned with the rest of
   * the list.
   *
   * Let's see what happens when we operate at the beginning of the list with
   * "unshift" and "shift".
   */

  /**
   * In order to add a new item at the beginning of our list, we need to make
   * room for our value at the start by sliding all of the values over by one.
   *
   *     [a, b, c, d, e]
   *      0  1  2  3  4
   *       ⬊  ⬊  ⬊  ⬊  ⬊
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]
   *
   * In order to slide all of the items over we need to iterate over each one
   * moving the prev value over.
   *
   * Because we have to iterate over every single item in the list:
   *
   * Unshifting an item to the start of a list is linear O(N) - "OKAY."
   */

  unshift(value) {
    // Store the value we are going to add to the start.
    let previous = value;

    // Iterate through each item...
    for (let address = 0; address < this.length; address++) {
      // replacing the "current" value with the "previous" value and storing the
      // "current" value for the next iteration.
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    // Add the last item in a new position at the end of the list.
    this.memory[this.length] = previous;
    this.length++;
  }

  /**
   * Finally, we need to write a shift function to move in the opposite
   * direction.
   *
   * We delete the first value and then slide through every single item in the
   * list to move it down one address.
   *
   *     [x, a, b, c, d, e]
   *         1  2  3  4  5
   *       ⬋  ⬋  ⬋  ⬋  ⬋
   *      0  1  2  3  4
   *     [a, b, c, d, e]
   *
   * Shifting an item from the start of a list is linear O(N) - "OKAY."
   */

  shift() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    let value = this.memory[0];

    // Iterate through each item...
    for (let address = 0; address < this.length - 1; address++) {
      // and replace them with the next item in the list.
      this.memory[address] = this.memory[address + 1];
    }

    // Delete the last item since it is now in the previous address.
    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

/**
 * Lists are great for fast access and dealing with items at the end. However,
 * as we've seen it isn't great at dealing with items not at the end of the
 * list and we have to manually hold onto memory addresses.
 *
 * So let's take a look at a different data structure and how it deals with
 * adding, accessing, and removing values without needing to know memory
 * addresses.
 */

/*** ===================================================================== ***\
 ** - HASH TABLES --------------------------------------------------------- **
 * ========================================================================= *
 *                           ((\                                             *
 *     (              _  ,-_  \ \                                            *
 *     )             / \/  \ \ \ \                                           *
 *     (            /)| \/\ \ \| |          .'---------------------'.        *
 *     `~()_______)___)\ \ \ \ \ |        .'                         '.      *
 *                 |)\ )  `' | | |      .'-----------------------------'.    *
 *                /  /,          |      '...............................'    *
 *        ejm     |  |          /         \   _____________________   /      *
 *                \            /           | |_)                 (_| |       *
 *                 \          /            | |                     | |       *
 *                  )        /             | |                     | |       *
 **                /       /              (___)                   (___)     **
\*** ===================================================================== ***/

/**
 * A hash table is a data structure that's *unordered*. Instead we have "keys" and "values" where we
 * computed an address in memory using the key.
 *
 * The basic idea is that we have keys that are "hashable" (which we'll get to
 * in a second) and can be used to add, access, and remove from memory very
 * efficiently.
 *
 *     var hashTable = new HashTable();
 *
 *     hashTable.set('myKey', 'myValue');
 *     hashTable.get('myKey'); // >> 'myValue'
 */

class HashTable {

  /**
   * Again we're going to use a plain JavaScript array to represent our memory.
   */

  constructor() {
    this.memory = [];
  }

  /**
   * In order to store key-value pairs in memory from our hash table we need a
   * way to take the key and turn it into an address. We do this through an
   * operation known as "hashing".
   *
   * Basically it takes a key and serializes it into a unique number for that
   * key.
   *
   *    hashKey("abc") =>  96354
   *    hashKey("xyz") => 119193
   *
   * You have to be careful though, if you had a really big key you don't want
   * to match it to a memory address that does not exist.
   *
   * So the hashing algorithm needs to limit the size, which means that there
   * are a limited number of addresses for an unlimited number of values.
   *
   * The result is that you can end up with collisions. Places where two keys
   * get turned into the same address.
   *
   * Any real-world hash table implementation would have to deal with this,
   * however, we are just going to glaze over it and pretend that doesn't happen.
   */

  /**
   * Let's set up our "hashKey" function.
   *
   * Don't worry about understanding the logic of this function, just know that
   * it accepts a string and outputs a (mostly) unique address that we will use
   * in all of our other functions.
   */

  hashKey(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      // Oh look– magic.
      let code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  /**
   * Next, let's define our "get" function so we have a way of accessing values
   * by their key.
   *
   * HashTable access is constant O(1) - "AWESOME!!"
   */

  get(key) {
    // We start by turning our key into an address.
    let address = this.hashKey(key);
    // Then we simply return whatever is at that address.
    return this.memory[address];
  }

  /**
   * We also need a way of adding data before we access it, so we will create
   * a "set" function that inserts values.
   *
   * HashTable setting is constant O(1) - "AWESOME!!"
   */

  set(key, value) {
    // Again we start by turning the key into an address.
    let address = this.hashKey(key);
    // Then just set the value at that address.
    this.memory[address] = value;
  }

  /**
   * Finally we just need a way to remove items from our hash table.
   *
   * HashTable deletion is constant O(1) - "AWESOME!!"
   */

  remove(key) {
    // As always, we hash the key to get an address.
    let address = this.hashKey(key);
    // Then, if it exists, we `delete` it.
    if (this.memory[address]) {
      delete this.memory[address];
    }
  }
}

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

/**
 * From this point going forward we are going to stop interacting directly with
 * memory as the rest of these data structures start to be implemented with
 * other data structures.
 *
 * These data structures focus on doing two things:
 *
 *   - Organizing data based on how it is used
 *   - Abstracting away implementation details
 *
 * These data structures focus on creating an organization that makes sense for
 * various types of programs. They insert a language that allows you to discuss
 * more complicated logic. All of this while abstracting away implementation
 * details so that their implementation can change to be made faster.
 */

/*** ===================================================================== ***\
 ** - STACKS -------------------------------------------------------------- **
 * ========================================================================= *
 *                             _ . - - -- .. _                               *
 *         ||||            .-'      /```\     `'-_             /|            *
 *         ||||           (     /`` \___/ ```\    )           | |            *
 *         \__/           |`"-//..__     __..\\-"`|           | |            *
 *          ||            |`"||...__`````__...||"`|           | |            *
 *          ||            |`"||...__`````__...||"`|           \ |            *
 *          ||       _,.--|`"||...__`````__...||"`|--.,_       ||            *
 *          ||    .'`     |`"||...__`````__...||"`|     `'.    ||            *
 *          ||   '.        `/ |...__`````__...| \         .'   ||            *
 *          ||     `'-..__  ``      `````      ``  __..-'`     ||            *
 *                        `""---,,,_______,,,---""`                          *
 **                                                                         **
\*** ===================================================================== ***/

/**
 * Stacks are similar to lists in that they have an order, but they limit you
 * to only pushing and popping values at the end of the list, which as we saw
 * before are very fast operations when mapping directly to memory.
 *
 * However, Stacks can also be implemented with other data structures in order
 * to add functionality to them.
 *
 * The most common usage of the stacks is in the places where you have one process adding
 * items to the stack and another process removing them from the end–
 * prioritizing items added most recently.
 */

class Stack {

  /**
   * We're going to again be backed by a JavaScript array, but this time it
   * represents a list like we implemented before rather than memory.
   */

  constructor() {
    this.list = [];
    this.length = 0;
  }

  /**
   * We're going to implement two of the functions from list's "push" and "pop"
   * which are going to be identical in terms of functionality.
   */

  /**
   * Push to add items to the top of the stack.
   */

  push(value) {
    this.length++;
    this.list.push(value);
  }

  /**
   * And pop to remove items from the top of the stack.
   */

  pop() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    // Pop the last item off the end of the list and return the value.
    this.length--;
    return this.list.pop();
  }

  /**
   * We're also going to add a function in order to view the item at the top of
   * the stack without removing it from the stack.
   */

  peek() {
    // Return the last item in "items" without removing it.
    return this.list[this.length - 1];
  }
}

/*** ===================================================================== ***\
 ** - QUEUES -------------------------------------------------------------- **
 * ========================================================================= *
 *                   /:""|                     ,@@@@@@.                      *
 *                  |: oo|_                   ,@@@@@`oo                      *
 *                  C     _)                  @@@@C   _)                     *
 *                    ) /                     "@@@@ '=                       *
 *                   /`\\                      ```)/                         *
 *                  || | |                       /`\\                        *
 *                  || | |                      || | \                       *
 *                  ||_| |                      || | /                       *
 *                  \( ) |                      ||_| |                       *
 *               |~~~`-`~~~|                    |))) |                       *
 *         (_)   |         |         (_)        |~~~/          (_)           *
 *         | |`""....__     __....""`| |`""...._|| /  __....""`| |           *
 *         | |`""....__`````__....""`| |`""....__`````__....""`| |           *
 *         | |       | ||```         | |        ||`|``         | |           *
 *         | |       |_||__          | |        ||_|__         | |           *
 *        ,| |, jgs  (____))        ,| |,       ((;:;:)       ,| |,          *
 **       `---`                     `---`                     `---`         **
\*** ===================================================================== ***/

/**
 * Next, we're going to build a queue which is complementary to stacks. The
 * difference is that this time you remove items from the start of the queue
 * rather than the end. Removing the oldest items rather than the most recent.
 *
 * Again, because this limits the amount of functionality, there are many
 * different ways of implementing it. A good way might be to use a linked list
 * which we will see later.
 */

class Queue {

  /**
   * Again, our queue is using a JavaScript array as a list rather than memory.
   */

  constructor() {
    this.list = [];
    this.length = 0;
  }

  /**
   * Similar to stacks we're going to define two functions for adding and
   * removing items from the queue. The first is "enqueue".
   *
   * This will push values to the end of the list.
   */

  enqueue(value) {
    this.length++;
    this.list.push(value);
  }

  /**
   * Next is "dequeue", instead of removing the item from the end of the list,
   * we're going to remove it from the start.
   */

  dequeue() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    // Shift the first item off the start of the list and return the value.
    this.length--;
    return this.list.shift();
  }

  /**
   * Same as stacks we're going to define a "peek" function for getting the next
   * value without removing it from the queue.
   */

  peek() {
    return this.list[0];
  }
}

/**
 * The important thing to note here is that because we used a list to back our
 * queue it inherits the performance of "shift" which is linear O(N) "OKAY."
 *
 * Later we'll see linked lists that will allow us to implement a much faster
 * Queue.
 */

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

/**
 * From this point forward we're going to start dealing with data structures
 * where the values of the data structure reference one another.
 *
 *    +- Data Structure ---------------------------------------+
 *    |  +- Item A ---------------+ +- Item B ---------------+ |
 *    |  | Value: 1               | | Value: 2               | |
 *    |  | Reference to: (Item B) | | Reference to: (Item A) | |
 *    |  +------------------------+ +------------------------+ |
 *    +--------------------------------------------------------+
 *
 * The values inside the data structure become their own mini data structures
 * in that they contain a value along with additional information including
 * references to other items within the overall data structure.
 *
 * You'll see what I mean by this in a second.
 */

/*** ===================================================================== ***\
 ** - GRAPHS -------------------------------------------------------------- **
 * ========================================================================= *
 *                                                                           *
 *   |                                 RICK ASTLEY'S NEVER GONNA...          *
 *   |       +-+                                                             *
 *   |  +-+  |-|                          [^] - GIVE YOU UP                  *
 *   |  |^|  |-|                 +-+      [-] - LET YOU DOWN                 *
 *   |  |^|  |-|       +-+       |*|      [/] - RUN AROUND AND DESERT YOU    *
 *   |  |^|  |-|  +-+  |\|       |*|      [\] - MAKE YOU CRY                 *
 *   |  |^|  |-|  |/|  |\|  +-+  |*|      [.] - SAY GOODBYE                  *
 *   |  |^|  |-|  |/|  |\|  |.|  |*|      [*] - TELL A LIE AND HURT YOU      *
 *   |  |^|  |-|  |/|  |\|  |.|  |*|                                         *
 *   +--------------------------------                                       *
 **                                                                         **
\*** ===================================================================== ***/

/**
 * Contrary to the ascii art above, a graph is not a visual chart of some sort.
 *
 * Instead imagine it like this:
 *
 *     A –→ B ←–––– C → D ↔ E
 *     ↑    ↕     ↙ ↑     ↘
 *     F –→ G → H ← I ––––→ J
 *          ↓     ↘ ↑
 *          K       L
 *
 * We have a bunch of "nodes" (A, B, C, D, ...) that are connected with lines.
 *
 * These nodes are going to look like this:
 *
 *     Node {
 *       value: ...,
 *       lines: [(Node), (Node), ...]
 *     }
 *
 * The entire graph will look like this:
 *
 *     Graph {
 *       nodes: [
 *         Node {...},
 *         Node {...},
 *         ...
 *       ]
 *     }
 */

class Graph {

  /**
   * We'll hold onto all of our nodes in a regular JavaScript array. Not
   * because there is any particular order to the nodes but because we need a
   * way to store references to everything.
   */

  constructor() {
    this.nodes = [];
  }

  /**
   * We can start to add values to our graph by creating nodes without any
   * lines.
   */

  addNode(value) {
    return this.nodes.push({
      value,
      lines: []
    });
  }

  /**
   * Next we need to be able to lookup nodes in the graph. Most of the time
   * you'd have another data structure on top of a graph in order to make
   * searching faster.
   *
   * But for our case, we're simply going to search through all of the nodes to find
   * the one with the matching value. This is a slower option, but it works for
   * now.
   */

  find(value) {
    return this.nodes.find(node => {
      return node.value === value;
    });
  }

  /**
   * Next we can connect two nodes by making a "line" from one to the other.
   */

  addLine(startValue, endValue) {
    // Find the nodes for each value.
    let startNode = this.find(startValue);
    let endNode = this.find(endValue);

    // Freak out if we didn't find one or the other.
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // And add a reference to the endNode from the startNode.
    startNode.lines.push(endNode);
  }
}

/**
 * Finally you can use a graph like this:
 *
 *     var graph = new Graph();
 *     graph.addNode(1);
 *     graph.addNode(2);
 *     graph.addLine(1, 2);
 *     var two = graph.find(1).lines[0];
 *
 * This might seem like a lot of work to do very little, but it's actually a
 * quite powerful pattern, especially for finding sanity in complex programs.
 *
 * They do this by optimizing for the connections between data rather than
 * operating on the data itself. Once you have one node in the graph, it's
 * extremely simple to find all the related items in the graph.
 *
 * Tons of things can be represented this way, users with friends, the 800
 * transitive dependencies in a node_modules folder, the internet itself is a
 * graph of webpages connected together by links.
 */

/*** ===================================================================== ***\
 ** - LINKED LISTS -------------------------------------------------------- **
 * ========================================================================= *
 *      _______________________                                              *
 *  ()=(_______________________)=()              ,-----------------,_        *
 *      |                     |               ,"                      ",     *
 *      |   ~ ~~~~~~~~~~~~~   |             ,'    ,---------------,     `,   *
 *      |               ,----------------------------,          ,----------- *
 *      |   ~ ~~~~~~~~ |                              |        |             *
 *      |               `----------------------------'          `----------- *
 *      |   ~ ~~~~~~~~~~~~~   |            `,    `----------------'     ,'   *
 *      |                     |              `,                      ,'      *
 *      |_____________________|                 `------------------'         *
 *  ()=(_______________________)=()                                          *
 **                                                                         **
\*** ===================================================================== ***/

/**
 * Next we're going to see how a graph-like structure can help optimize ordered
 * lists of data.
 *
 * Linked lists are a very common data structure that is often used to
 * implement other data structures because of its ability to efficiently add
 * items to the start, middle, and end.
 *
 * The basic idea of a linked list is similar to a graph. You have nodes that
 * point to other nodes. They look sorta like this:
 *
 *     1 -> 2 -> 3 -> 4 -> 5
 *
 * Visualizing them as a JSON-like structure looks like this:
 *
 *     {
 *       value: 1,
 *       next: {
 *         value: 2,
 *         next: {
 *           value: 3,
 *           next: {...}
 *         }
 *       }
 *     }
 */

class LinkedList {

  /**
   * Unlike a graph, a linked list has a single node that starts off the entire
   * chain. This is known as the "head" of the linked list.
   *
   * We're also going to track the length.
   */

  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * First we need a way to retrieve a value in a given position.
   *
   * This works differently than normal lists as we can't just jump to the
   * correct position. Instead, we need to move through the individual nodes.
   */

  get(position) {
    // Throw an error if position is greater than the length of the LinkedList
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }

    // Start with the head of the list.
    let current = this.head;

    // Slide through all of the items using node.next until we reach the
    // specified position.
    for (let index = 0; index < position; index++) {
      current = current.next;
    }

    // Return the node we found.
    return current;
  }

  /**
   * Next we need a way to add nodes to the specified position.
   *
   * We're going for a generic add method that accepts a value and a position.
   */

  add(value, position) {
    // First create a node to hold our value.
    let node = {
      value,
      next: null
    };

    // We need to have a special case for nodes being inserted at the head.
    // We'll set the "next" field to the current head and then replace it with
    // our new node.
    if (position === 0) {
      node.next = this.head;
      this.head = node;

      // If we're adding a node in any other position we need to splice it in
      // between the current node and the previous node.
    } else {
      // First, find the previous node and the current node.
      let prev = this.get(position - 1);
      let current = prev.next;
      // Then insert the new node in between them by setting its "next" field
      // to the current node and updating the previous node's "next" field to
      // the new one.
      node.next = current;
      prev.next = node;
    }

    // Finally just increment the length.
    this.length++;
  }

  /**
   * The last method we need is a remove method. We're just going to look up a
   * node by its position and splice it out of the chain.
   */

  remove(position) {
    // We should not be able to remove from an empty list
    if (!this.head) {
      throw new Error('Removing from empty list')
    }
    // If we're removing the first node we simply need to set the head to the
    // next node in the chain
    if (position === 0) {
      this.head = this.head.next;

      // For any other position, we need to look up the previous node and set it
      // to the node after the current position.
    } else {
      let prev = this.get(position - 1);
      prev.next = prev.next.next;
    }

    // Then we just decrement the length.
    this.length--;
  }
}

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

/**
 * The remaining two data structures we are going to cover are both in the
 * "tree" family.
 *
 * Much like real life, there are many different types of tree data structures.
 *
 *     Binary Trees:
 *       AA Tree, AVL Tree, Binary Search Tree, Binary Tree, Cartesian Tree,
 *       left child/right sibling tree, order statistic tree, Pagoda, ...
 *
 *     B Trees:
 *       B Tree, B+ Tree, B* Tree, B Sharp Tree, Dancing Tree, 2-3 Tree, ...
 *
 *     Heaps:
 *       Heap, Binary Heap, Weak Heap, Binomial Heap, Fibonacci Heap, Leonardo
 *       Heap, 2-3 Heap, Soft Heap, Pairing Heap, Leftist Heap, Treap, ...
 *
 *     Trees:
 *       Trie, Radix Tree, Suffix Tree, Suffix Array, FM-index, B-trie, ...
 *
 *     Multi-way Trees:
 *       Ternary Tree, K-ary tree, And-or tree, (a,b)-tree, Link/Cut Tree, ...
 *
 *     Space Partitioning Trees:
 *       Segment Tree, Interval Tree, Range Tree, Bin, Kd Tree, Quadtree,
 *       Octree, Z-Order, UB-Tree, R-Tree, X-Tree, Metric Tree, Cover Tree, ...
 *
 *     Application-Specific Trees:
 *       Abstract Syntax Tree, Parse Tree, Decision Tree, Minimax Tree, ...
 *
 * Little did you know you'd be studying dendrology today... and that's not even
 * all of them. But don't let any of this scare you, most of those don't matter
 * at all. There were just a lot of Computer Science PhDs who had something to
 * prove.
 *
 * Trees are much like graphs or linked lists except they are "unidirectional".
 * All this means is that they can't have loops of references.
 *
 *        Tree:                Not a Tree:
 *
 *          A                        A
 *        ↙   ↘                    ↗   ↘
 *      B       C                B ←–––– C
 *
 * If you can draw a loop between connected nodes in a tree... well, you don't
 * have a tree.
 *
 * Trees have many different uses, they can be used to optimize searching or
 * sorting. They can organize programs better. They can give you a
 * representation that is easier to work with.
 */

/*** ===================================================================== ***\
 ** - TREES --------------------------------------------------------------- **
 * ========================================================================= *
 *            ccee88oo             \ | /                                     *
 *          C8O8O8Q8PoOb o8oo    '-.;;;.-,   ooooO8O8QOb o8bDbo              *
 *        dOB69QO8PdUOpugoO9bD  -==;;;;;==-aadOB69QO8PdUOpugoO9bD            *
 *       CgggbU8OU qOp qOdoUOdcb .-';;;'-.  CgggOU ddqOp qOdoUOdcb           *
 *           6OuU  /p u gcoUodpP   / | \ jgs  ooSec cdac pdadfoof            *
 *             \\\//  /douUP         '         \\\d\\\dp/pddoo               *
 *               \\\////                         \\ \\////                   *
 *                |||/\                           \\///                      *
 *                |||\/                           ||||                       *
 *                |||||                          /|||                        *
 ** .............//||||\.......................//|||\\..................... **
\*** ===================================================================== ***/

/**
 * We'll start off with an extremely simple tree structure. It doesn't have any
 * special rules to it and looks something like this:
 *
 *     Tree {
 *       root: {
 *         value: 1,
 *         children: [{
 *           value: 2,
 *           children: [...]
 *         }, {
 *           value: 3,
 *           children: [...]
 *         }]
 *       }
 *     }
 */

class Tree {

  /**
   * The tree has to start with a single parent, the "root" of the tree.
   */

  constructor() {
    this.root = null;
  }

  /**
   * We need a way to traverse our tree and call a function on each node in the
   * tree.
   */

  traverse(callback) {
    // We'll define a walk function that we can call recursively on every node
    // in the tree.
    function walk(node) {
      // First call the callback on the node.
      callback(node);
      // Then recursively call the walk function on all of its children.
      node.children.forEach(walk);
    }

    // Now kick the traversal process off.
    walk(this.root);
  }

  /**
   * Next we need a way to add nodes to our tree.
   */

  add(value, parentValue) {
    let newNode = {
      value,
      children: []
    };

    // If there is no root, just set it to the new node.
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Otherwise traverse the entire tree and find a node with a matching value
    // and add the new node to its children.
    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}

/**
 * This is one of the most basic trees you could have and is probably only
 * useful if the data you are representing actually resembles a tree.
 *
 * But with some extra rules, a tree can serve a lot of different purposes.
 */

/*** ===================================================================== ***\
 ** - BINARY SEARCH TREES ------------------------------------------------- **
 * ========================================================================= *
 * 0 0 1 0 1 0 0 1 0 1 1 1 0 1  ,@@@@@@@@@@@@@@,   0 0 1 0 1 0 0 1 0 1 1 1 0 *
 * 0 1 0 1 0 1 0 1 1 0 1 1 0  @@`              '@@   0 1 0 1 0 1 1 0 1 0 1 0 *
 * 1 1 0 0 0 1 0 0 1 1 1 0  @@`   8O8PoOb o8o    '@@   0 0 1 0 0 1 0 0 1 1 1 *
 * 0 0 1 1 0 1 0 1 0 0 0  @@   dOB69QO8PdUgoO9bD    @@   1 0 1 1 0 1 0 1 0 0 *
 * ===================== @@   CgbU8OU qOp qOdOdcb    @@  0 1 1 0 1 0 1 0 1 0 *
 *                       @@      6OU /p u gcoUpP     @@  1 0 1 1 0 1 0 0 1 1 *
 * ===================== @@         \\// /doP        @@  0 1 1 0 0 1 0 0 1 0 *
 * 1 1 0 0 1 1 0 1 1 0 0  @@         \\//           @@   1 0 1 0 0 1 1 0 1 1 *
 * 0 1 1 0 1 0 1 1 0 1 1 0  @@,      |||          ,@@  0 1 1 0 1 1 0 0 1 0 1 *
 * 1 0 1 0 1 1 0 0 1 0 0 1 0  @@,   //|\       ,@@   0 1 0 1 0 1 1 0 0 1 1 0 *
 **  1 0 1 0 0 1 1 0 1 0 1 0 1  `@@@@@@@@@@@@@@'   0 1 1 1 0 0 1 0 1 0 1 1  **
\*** ===================================================================== ***/

/**
 * Binary search trees are a fairly common form of tree for their ability to
 * efficiently access, search, insert, and delete values all while keeping them
 * in a sorted order.
 *
 * Imagine taking a sequence of numbers:
 *
 *     1  2  3  4  5  6  7
 *
 * And turning it into a tree starting from the center.
 *
 *              4
 *           /     \
 *        2           6
 *      /   \       /   \
 *     1     3     5     7
 *    -^--^--^--^--^--^--^-
 *     1  2  3  4  5  6  7
 *
 * This is how a binary tree works. Each node can have two children:
 *
 *     - Left: Less than parent node's value.
 *     - Right: Greater than parent node's value.
 *
 * > Note: In order to make this work all values must be unique in the tree.
 *
 * This makes the traversal to find a value very efficient. Say we're trying to
 * find the number 5 in our tree:
 *
 *             (4)         <--- 5 > 4, so move right.
 *           /     \
 *        2         (6)    <--- 5 < 6, so move left.
 *      /   \       /   \
 *     1     3    (5)    7 <--- We've reached 5!
 *
 * Notice how we only had to do 3 checks to reach the number 5. If we were to
 * expand this tree to 1000 items. We'd go:
 *
 *   500 -> 250 -> 125 -> 62 -> 31 -> 15 -> 7 -> 3 -> 4 -> 5
 *
 * Only 10 checks for 1000 items!
 *
 * The other important thing about binary search trees is that they are similar
 * to linked lists in the sense that you only need to update the immediately
 * surrounding items when adding or removing a value.
 */

class BinarySearchTree {

  /**
   * Same as the previous Tree, we need to have a "root" of the binary search
   * tree.
   */

  constructor() {
    this.root = null;
  }

  /**
   * In order to test if the value exists in the tree, we first need to search
   * through the tree.
   */

  contains(value) {
    // We start at the root.
    let current = this.root;

    // We're going to keep running as long as we have another node to visit.
    // If we reach a `left` or `right` that is `null` then this loop ends.
    while (current) {

      // If the value is greater than the current.value we move to the right
      if (value > current.value) {
        current = current.right;

        // If the value is less than the current.value we move to the left.
      } else if (value < current.value) {
        current = current.left;

        // Otherwise we must be equal values and we return true.
      } else {
        return true;
      }
    }

    // If we haven't matched anything then we return false.
    return false;
  }

  /**
   * In order to add items to this tree we are going to do the same traversal
   * as before, bouncing between left and right nodes depending on them being
   * less than or greater than the value we're adding.
   *
   * However, this time when we reach a `left` or `right` that is `null` we're
   * going to add a new node in that position.
   */

  add(value) {
    // First let's setup our node.
    let node = {
      value: value,
      left: null,
      right: null
    };

    // Special case for when there isn't any root node and we just need to add
    // one.
    if (this.root === null) {
      this.root = node;
      return;
    }

    // We start at the root.
    let current = this.root;

    // We're going to loop until we've either added our item or discovered it
    // already exists in the tree.
    while (true) {

      // If the value is greater than the current.value we move to the right.
      if (value > current.value) {

        // If `right` does not exist, set it to our node, and stop traversing.
        if (!current.right) {
          current.right = node;
          break;
        }

        // Otherwise just move on to the right node.
        current = current.right;

        // If the value is less than the current.value we move to the left.
      } else if (value < current.value) {

        // If `left` does not exist, set it to our node, and stop traversing.
        if (!current.left) {
          current.left = node;
          break;
        }

        // Otherwise just move on to the left node.
        current = current.left;

        // If the number isn't less than or greater, then it must be the same and
        // we don't do anything.
      } else {
        break;
      }
    }
  }
}

/*** ===================================================================== ***\
 ** - YOU REACHED THE END! ------------------------------------------------ **
 * ========================================================================= *
 *                                           .''.                            *
 *                 .''.             *''*    :_\/_:     .                     *
 *                :_\/_:   .    .:.*_\/_*   : /\ :  .'.:.'.                  *
 *            .''.: /\ : _\(/_  ':'* /\ *  : '..'.  -=:o:=-                  *
 *           :_\/_:'.:::. /)\*''*  .|.* '.\'/.'_\(/_'.':'.'                  *
 *           : /\ : :::::  '*_\/_* | |  -= o =- /)\    '  *                  *
 *            '..'  ':::'   * /\ * |'|  .'/.\'.  '._____                     *
 *                *        __*..* |  |     :      |.   |' .---"|             *
 *                 _*   .-'   '-. |  |     .--'|  ||   | _|    |             *
 *              .-'|  _.|  |    ||   '-__  |   |  |    ||      |             *
 *              |' | |.    |    ||       | |   |  |    ||      |             *
 * _____________|  '-'     '    ""       '-'   '-.'    '`      |____________ *
 ** jgs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ **
\*** ===================================================================== ***/

/**
 * I know that was probably a bit dense, but hopefully it gave you a good
 * amount of knowledge. If you enjoyed it, would you mind giving the repo a
 * star and follow me on twitter (@thejameskyle)?
 *
 * You can also check out my other code walkthrough, "The Super Tiny Compiler"
 *       here ------> https://github.com/thejameskyle/the-super-tiny-compiler
 */

// Just exporting everything for the tests...
module.exports = {
  List,
  HashTable,
  Stack,
  Queue,
  Graph,
  LinkedList,
  Tree,
  BinarySearchTree
};
