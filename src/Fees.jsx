import React from 'react'
import "./Fees.css"

const Fees = () => {
  return (
 <>
 
<div className="feesbox1">
        <div className="feesbox1div1">

          <div className="feesbox1div1a">
            <ul>
              <li><p id="feessmall">Total Payroll</p></li>
              <li><p id="feeslarge">$72,600</p></li>
            </ul>
          </div>
          <div className="feesbox1div1b">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
          </div>

        </div>
        <div className="feesbox1div2">


          <div className="feesbox1div2a">
            <ul>
              <li><p id="feessmall">Pending</p></li>
              <li><p id="feeslarge">$24,680</p></li>
            </ul>
          </div>
          <div className="feesbox1div2b">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
            </svg>
          </div>

        </div>
        <div className="feesbox1div3">



          <div className="feesbox1div3a">
            <ul>
              <li><p id="feessmall">This Month</p></li>
              <li><p id="feeslarge">$15,200</p></li>
            </ul>
          </div>
          <div className="feesbox1div3b">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
            </svg>
          </div>


        </div>
      </div>

      <div className="feesbox2">
        <div className="feesdiv1">
          <h2>Fee Management</h2>
          <p>Track student fee payments and outstanding amounts</p>
        </div>


        <div className="feesdiv2">

          <div className="feesdiv2a">

            <div className="feesdiv2a1">
              <div className="feesdiv2a1box">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-archive" viewBox="0 0 16 16">
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                </svg>
              </div>
            </div>

            <div className="feesdiv2a2">
              <ul>
                <li><h3>John Doe</h3></li>
                <li><p>Computer Science</p></li>

              </ul>
            </div>

          </div>
          <div className="feesdiv2b">

            <div className="feesdiv2bbox1">
              <ul>
                <li><p>Paid: $3000</p></li>
                <li><p>Total: $5000</p></li>
                <li><p id="feesdarkp">Due: $2000</p></li>
              </ul>
            </div>
            <div className="feesdiv2bbox2">
              <button id="feeswithoutborder1">partial</button>
              <button id="feeswithborder1">Send Reminder</button>
            </div>

          </div>

        </div>


        <div className="feesdiv3">


          <div className="feesdiv3a">

            <div className="feesdiv3a1">
              <div className="feesdiv2a1box">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-archive" viewBox="0 0 16 16">
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                </svg>
              </div>
            </div>

            <div className="feesdiv3a2">
              <ul>
                <li><h3>Sarah Wilson</h3></li>
                <li><p>Mathematics</p></li>

              </ul>
            </div>

          </div>
          <div className="feesdiv3b">

            <div className="feesdiv3bbox1">
              <ul>
                <li><p>Paid: $4500</p></li>
                <li><p>Total: $4500</p></li>
                <li><p id="feesdarkp">Due: $0</p></li>
              </ul>
            </div>
            <div className="feesdiv3bbox2">
              <button id="feeswithoutborder2">paid</button>
              <button id="feeswithborder2">Send Reminder</button>
            </div>

          </div>
        </div>




        <div className="feesdiv4">




          <div className="feesdiv4a">

            <div className="feesdiv4a1">
              <div className="feesdiv4a1box">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-archive" viewBox="0 0 16 16">
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                </svg>
              </div>
            </div>

            <div className="feesdiv4a2">
              <ul>
                <li><h3>Mike Johnson</h3></li>
                <li><p>Physics</p></li>

              </ul>
            </div>

          </div>
          <div className="feesdiv4b">

            <div className="feesdiv4bbox1">
              <ul>
                <li><p>Paid: $0</p></li>
                <li><p>Total: $4000</p></li>
                <li><p id="feesdarkp">Due: $4000</p></li>
              </ul>
            </div>
            <div className="feesdiv4bbox2">
              <button id="feeswithoutborder3">pending</button>
              <button id="feeswithborder3">Send Reminder</button>
            </div>

          </div>


        </div>


        <div className="feesdiv5">

      <div className="feesdiv5a">

            <div className="feesdiv5a1">
              <div className="feesdiv5a1box">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-archive" viewBox="0 0 16 16">
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                </svg>
              </div>
            </div>

            <div className="feesdiv5a2">
              <ul>
                <li><h3>Emily Brown</h3></li>
                <li><p>Chemistry</p></li>

              </ul>
            </div>

          </div>
          <div className="feesdiv5b">

            <div className="feesdiv5bbox1">
              <ul>
                <li><p>Paid: $2000</p></li>
                <li><p>Total: $5500</p></li>
                <li><p id="feesdarkp">Due: $3500</p></li>
              </ul>
            </div>
            <div className="feesdiv5bbox2">
              <button id="feeswithoutborder1">partial</button>
              <button id="feeswithborder1">Send Reminder</button>
            </div>

          </div>

        </div>
      </div>



 </>
  )
}

export default Fees