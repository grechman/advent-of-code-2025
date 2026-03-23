[ranges_file, index_file] = File.read!("lib/fifth.txt")
  |> String.trim() |> String.split("\n\n")
ranges = ranges_file |> String.split("\n")
    |> Enum.map(fn line ->
      [a, b] = String.split(line, "-")
      String.to_integer(a)..String.to_integer(b)
    end)

total =
  index_file
  |> String.split("\n")
  |> Enum.map(&String.to_integer/1)
  |> Enum.count(fn v -> Enum.any?(ranges, fn range -> v in range end) end)

IO.puts(total)

ranges
  |> Enum.sort_by(& &1.first)
  |> Enum.reduce([], fn
    range, [] -> [range]
    a..b, acc ->
      x..y = hd(acc)
      if a <= y + 1 do
        [x..max(b, y) | tl(acc)]
      else
        [a..b | acc]
      end
  end)
  |> Enum.reduce(0, fn a..b, acc -> acc + b - a + 1 end)
  |> IO.puts()
