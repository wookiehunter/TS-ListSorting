"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollect_1 = require("./NumbersCollect");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Arrays or Objects
const numbersCollection = new NumbersCollect_1.NumbersCollection([1, 3, -5, 12, 100, -100, 8, 12, 0, -0.1]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Strings
const characterCollection = new CharactersCollection_1.CharactersCollection('Steven');
characterCollection.sort();
console.log(characterCollection.data);
// LinkedLists
const linkList = new LinkedList_1.LinkedList();
linkList.add(9999);
linkList.add(999);
linkList.add(99);
linkList.add(9);
linkList.add(99999);
linkList.sort();
linkList.print();
