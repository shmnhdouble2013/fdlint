module XRayTest
  module JS
    module Expr
      
      module Operate
        
        def test_parse_expr_postfix
          jses = [
            'hello++',
            'i--',
            'j\n++'
          ]
          exprs = [
            '(++,hello,)',
            '(--,i,)',
            'j'      
          ]
          add_expr_test jses, exprs, :parse_expr_postfix
        end

        def test_parse_expr_unary
          jses = [
            '++i',
            '-1',
            'delete a[hello]',
            '!a'
          ] 
          exprs = [
            '(++,,i)',
            '(-,,1)',
            '(delete,,([,a,hello))',
            '(!,,a)'
          ]
          add_expr_test jses, exprs, :parse_expr_unary
        end

        def test_parse_expr_mul
          jses = [
            'a * b / c % d * e / f'
          ]
          exprs = [
            '(/,(*,(%,(/,(*,a,b),c),d),e),f)'
          ]
          add_expr_test jses, exprs, :parse_expr_mul
        end

        def test_parse_expr_add
          jses = [
            'a * b + c - d / e + f % d + a'
          ]
          exprs = [
            '(+,(+,(-,(+,(*,a,b),c),(/,d,e)),(%,f,d)),a)'
          ]
          add_expr_test jses, exprs, :parse_expr_add
        end

        def test_parse_expr_shift
          jses = [
            'a << 123',
            'a + 1 >> 1 + 2',
            '1 * 100 >> 2 >>> 1 + 2 * 3 - 4'
          ]
          exprs = [
            '(<<,a,123)',
            '(>>,(+,a,1),(+,1,2))',
            '(>>>,(>>,(*,1,100),2),(-,(+,1,(*,2,3)),4))'
          ]
          add_expr_test jses, exprs, :parse_expr_shift
        end

        def test_parse_expr_relation
          jses = [
            'a + 1 < b',
            'a + 2 * 3 >= a++',
            '++a-- > --b + c',
            'instanceofA instanceof instanceofB',
            'innameA in innameC'
          ]
          
          exprs = [
            '(<,(+,a,1),b)',
            '(>=,(+,a,(*,2,3)),(++,a,))',
            '(>,(++,,(--,a,)),(+,(--,,b),c))',
            '(instanceof,instanceofA,instanceofB)',
            '(in,innameA,innameC)'
          ]

          add_expr_test jses, exprs, :parse_expr_relation
        end

        def test_parse_expr_equal
          jses = [
            'a + 1 === c',
            'a + 1 * c !== 11 + 22 < 3',
            'a + 1 < 3 == 1 << 3',
            'a << 4 - 5 == 1 << 3 === 5'
          ]

          exprs = [
            '(===,(+,a,1),c)',
            '(!==,(+,a,(*,1,c)),(<,(+,11,22),3))',
            '(==,(<,(+,a,1),3),(<<,1,3))',
            '(===,(==,(<<,a,(-,4,5)),(<<,1,3)),5)' 
          ]

          add_expr_test jses, exprs, :parse_expr_equal

        end

      end

    end
  end
end