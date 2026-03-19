isValid? = fn number ->
  num_str = Integer.to_string(number)
  len = String.length(num_str)
  halv=div(len, 2)


  rem(len, 2) == 0 and
    String.slice(num_str, 0, halv) == String.slice(num_str, halv, halv)
end

isValid2? = fn number ->
  num_str = Integer.to_string(number)
  Regex.match?(~r/^(.+)\1+$/, num_str)
end

input = File.read!("lib/second.txt")
  |> String.trim()
  |> String.split(",")
  |> Enum.map(fn ranges->[first, last] = String.split(ranges, "-")
    {String.to_integer(first), String.to_integer(last)}
    end)

for {first, last} <- input,
    number <- first..last,
    isValid2?.(number) do
  number
end |> Enum.sum() |> IO.puts()
