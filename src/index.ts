import { NumbersCollection } from "./NumbersCollect"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

// Arrays or Objects
const numbersCollection = new NumbersCollection([1,3,-5,12,100,-100,8,12,0,-0.1])
numbersCollection.sort()
console.log(numbersCollection.data)

// Strings
const characterCollection = new CharactersCollection('Steven')
characterCollection.sort()
console.log(characterCollection.data)

// LinkedLists
const linkList =new LinkedList();
linkList.add(9999)
linkList.add(999)
linkList.add(99)
linkList.add(9)
linkList.add(99999)

linkList.sort()
linkList.print()