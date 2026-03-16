pos = 50
counter = 0
counter2 = 0

with open('first.txt') as f:
      lines = f.read().strip().split('\n')

      for line in lines:
          direction = 1 if line[0] == 'R' else -1
          distance = int(line[1:])

         # Count zeros during rotation (before updating position)
          if direction == 1:  # right
              count = (pos + distance) // 100 - pos // 100
          else:  # left
              count = (pos - 1) // 100 - (pos - distance - 1) // 100

          counter2 += count

          # Update position
          pos = (pos + distance * direction) % 100
          if pos == 0:
              counter += 1

print(counter)
print(counter2)
