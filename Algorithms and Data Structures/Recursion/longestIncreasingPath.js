
// # Python 3 solution using recursion:

// grid = [[1, 1, 3, 0], [2, 3, 6, 0], [10, 9, 5, 0]]

// def get_possible_paths(r, c):
//     possible_paths = [(r, c-1), (r, c+1), (r-1, c), (r+1, c)]
//     possible_paths = [(ri, ci) for (ri, ci) in possible_paths if ri >=0 and len(grid) > ri and ci>=0 and len(grid[0]) > ci]
//     possible_paths = [(ri, ci) for (ri, ci) in possible_paths if grid[ri][ci] > grid[r][c]]
//     return possible_paths

// def get_longest_path(r, c):
//     possible_paths = get_possible_paths(r, c)
//     longest_path = []
//     for ri, ci in possible_paths:
//         path = get_longest_path(ri, ci)
//         if len(path) > len(longest_path):
//             longest_path = path
//     return [grid[r][c]] + longest_path

// print(get_longest_path(0, 0))