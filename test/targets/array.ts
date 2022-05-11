// test array nest utils
export const nest = [
  {
    arr: [{ id: 1, pid: 0 }, { id: 2, pid: 1 }, { id: 3, pid: 1 }],
    id: undefined,
    pid: undefined,
  },
  {
    arr: [{ id: 1, pid: '1' }, { id: 2, pid: 1 }, { id: 3, pid: 1 }],
    id: '1',
    pid: undefined,
  },
  {
    arr: [{ id: 1, parent: 0 }, { id: 2, parent: 1 }, { id: 3, parent: 1 }],
    id: undefined,
    pid: 'parent',
  },
  {
    arr: [{ id: 1, parent: '1' }, { id: 2, parent: 1 }, { id: 3, parent: 1 }],
    id: '1',
    pid: 'parent',
  },
]
