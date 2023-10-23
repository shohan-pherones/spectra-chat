#!/usr/bin/env ruby

def debounce(delay, &block)
  @timer ||= Time.now
  @delay = delay
  @block = block

  Thread.new do
    sleep(@delay)
    if Time.now - @timer >= @delay
      @block.call
    end
  end
end

loop do
  debounce(1) do
    puts "Current Time: #{Time.now.strftime('%H:%M:%S')}"
  end
end
