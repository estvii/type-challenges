interface Todo {
  title: string
  description: string
  completed: boolean
}

// type MyPick<T, K extends keyof T> = {
//   K: T[K]
// }

type MyPick<TObj, TKey extends keyof TObj> = {
  [SpecificKey in TKey]: TObj[SpecificKey];
}

type Yeah = MyPick<Todo, 'title'>

type Test<TObj, TKey extends keyof TObj> = {
  [Key in TKey]: TObj[TKey]
}

type Test2 = Test<{ a: string }, 'a'>

const data: Test2 = {
  a: 'test',
}

