require_relative 'helper/colored'

module XRay

  LogEntry = Struct.new(:message, :level, :row, :column)
  
  class LogEntry

    def initialize(message, level, row = 0, colmn = 0)
      super
    end

    def to_s
      "[#{level.to_s.upcase}] [#{row},#{column}] #{message}"
    end

    def to_color_s
      t = self.to_s
      if warn?
        t.yellow_bg
      elsif fatal?
        t.red_bg
      elsif error?
        t.red
      else
        t
      end
    end

    def error?
      level == :error
    end

    def warn?
      level == :warn
    end

    def fatal?
      level == :fatal
    end

    def info?
      level == :info
    end

  end

end
