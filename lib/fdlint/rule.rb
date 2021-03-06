require 'fdlint/rule/validation'
require 'fdlint/rule/dsl'

module Fdlint

  module Rule

    DEFAULT_RULE_PATH = File.expand_path '../../rules.d', File.dirname(__FILE__)

    class << self

      include ::Fdlint::Helper::Logger

      attr_accessor :rule_path

      def rule_path
        @rule_path || DEFAULT_RULE_PATH
      end

      SYNTAXES = [:css, :html, :js]
      
      # Public: Rules for file validation
      #
      # opt - options including syntax
      #
      # Returns an Array holding all validations for this file
      def validations_for_file( opt={} )
        (all[opt[:syntax]] || []).select do |validation|
          validation.scope == :file
        end
      end

      alias_method :for_file, :validations_for_file

      SYNTAXES.each do |syntax|
        # Public: Rules for css content validation
        #
        # Returns an Array holding all rules for content validation.
        define_method "validations_for_#{syntax}_content" do
          (all[syntax] || []).select do |validation|
            validation.scope != :file
          end
        end

        alias_method :"for_#{syntax}_content", :"validations_for_#{syntax}_content"
      end

      def all
        @rules ||= {}
        import unless @imported
        @rules
      end

      alias_method :rules, :all

      def import
        debug { "importing rules from #{rule_path}" }
        Dir.glob( File.join rule_path, '**', '*.rule.rb' ) do |rule|
          begin
            DSL.instance_eval File.read(rule), rule
          rescue SyntaxError, NoMethodError => e
            fatal { "Error parsing rule file:".red }
            fatal { "  -> #{rule}" }
            fatal { "" }
            raise
          end
        end
        @imported = true
        debug { "done" }
      end

      def add( syntax, scope, opt )
        debug { "  -> adding rule: #{syntax.inspect} - #{scope.inspect} - #{opt[:desc]}" }
        cache = @rules[syntax] ||= []
        cache << Validation.new( scope, opt[:block] ).tap do |v|
          v.desc = opt[:desc]
          v.uri  = opt[:uri]
        end
        @rules
      end

    end

  end

end

