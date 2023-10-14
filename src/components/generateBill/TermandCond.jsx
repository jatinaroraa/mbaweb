import React from "react";
import "./termandcond.css";
export default function TermandCond() {
  return (
    <div
      style={{
        height: "30%",
        // textAlign: '',
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div>
        <h3 className="tandctitle">Term And conditions</h3>
        <ul className="listUl">
          <li>
            Course booked is the course intended by the student. However ,the
            service will provided by the company only to the extend of amount
            received against the invoice. The invoice value is equal to the
            amount received only{" "}
          </li>
          <li>This being computer generated so signature required </li>
          <li>
            Money once deposited is not refundable. However it can be adjusted
            towards any other course after deduction of 20%.
          </li>
          <li>
            Token amount paid if any, are not valid beyond the current month of
            payment.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
