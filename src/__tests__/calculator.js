import {render} from '@testing-library/react'
import Calculator from 'calculator'

test('Calculator', () => {
  const {container} = render(<Calculator />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      color: white;
      background: #1c191c;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div>
      <div
        class="calculator"
      >
        <div
          class="emotion-0"
        >
          <div
            class="autoScalingText"
            data-testid="total"
            style="transform: scale(1,1);"
          >
            0
          </div>
        </div>
        <div
          class="calculatorKeypad"
        >
          <div
            class="inputKeys"
          >
            <div
              class="functionKeys"
            >
              <button
                class="calculatorKey keyClear"
              >
                AC
              </button>
              <button
                class="calculatorKey keySign"
              >
                ±
              </button>
              <button
                class="calculatorKey keyPercent"
              >
                %
              </button>
            </div>
            <div
              class="digitKeys"
            >
              <button
                class="calculatorKey key0"
              >
                0
              </button>
              <button
                class="calculatorKey keyDot"
              >
                ●
              </button>
              <button
                class="calculatorKey key1"
              >
                1
              </button>
              <button
                class="calculatorKey key2"
              >
                2
              </button>
              <button
                class="calculatorKey key3"
              >
                3
              </button>
              <button
                class="calculatorKey key4"
              >
                4
              </button>
              <button
                class="calculatorKey key5"
              >
                5
              </button>
              <button
                class="calculatorKey key6"
              >
                6
              </button>
              <button
                class="calculatorKey key7"
              >
                7
              </button>
              <button
                class="calculatorKey key8"
              >
                8
              </button>
              <button
                class="calculatorKey key9"
              >
                9
              </button>
            </div>
          </div>
          <div
            class="operatorKeys"
          >
            <button
              class="calculatorKey keyDivide"
            >
              ÷
            </button>
            <button
              class="calculatorKey keyMultiply"
            >
              ×
            </button>
            <button
              class="calculatorKey keySubtract"
            >
              −
            </button>
            <button
              class="calculatorKey keyAdd"
            >
              +
            </button>
            <button
              class="calculatorKey keyEquals"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  `)
})
