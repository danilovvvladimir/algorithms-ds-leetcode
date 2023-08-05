namespace NS36 {
  function isValidSudoku(board: string[][]): boolean {
    const rowSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const colSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const squareSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const num = board[r][c];
        if (num !== ".") {
          const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

          if (
            rowSet[r].has(num) ||
            colSet[c].has(num) ||
            squareSet[squareIndex].has(num)
          ) {
            return false;
          } else {
            rowSet[r].add(num);
            colSet[c].add(num);
            squareSet[squareIndex].add(num);
          }
        }
      }
    }

    return true;
  }

  const board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  const result = isValidSudoku(board1);
  console.log(result);
}
