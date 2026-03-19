isValid? = fn number ->
  num_str = Integer.to_string(number)
  len = String.length(num_str)
  halv=div(len, 2)


  rem(len, 2) == 0 and
    String.slice(num_str, 0, halv) == String.slice(num_str, halv, halv)
end

isValidRegex? = fn number ->
  num_str = Integer.to_string(number)
  Regex.match?(~r/^(.+)\1+$/, num_str)
end

isValid2? = fn number ->
  num_str = Integer.to_string(number)
  len = byte_size(num_str)
  doubled = num_str <> num_str

  case :binary.match(doubled, num_str, scope: {1, len * 2 - 2}) do
    {pos, _} when pos < len -> true
    _ -> false
  end
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
