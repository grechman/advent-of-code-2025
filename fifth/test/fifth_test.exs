defmodule FifthTest do
  use ExUnit.Case
  doctest Fifth

  test "greets the world" do
    assert Fifth.hello() == :world
  end
end
