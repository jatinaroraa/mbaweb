import React, { useState } from "react";
import "./table.css";
import { Button } from "antd";
export default function DisplayTable({ tableData, registrationAmount }) {
  const columns = [
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (text) => <a>{text}</a>,
      width: 80,
    },
    {
      title: "Course Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: "Gross Amount",
      dataIndex: "grossAmount",
      key: "grossAmount",
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: "Discount Amount",
      dataIndex: "discount",
      key: "discount",
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: "Net Amount",
      dataIndex: "netAmount",
      key: "netAmount",
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: "Total Payment",
      dataIndex: "totalPayment",
      key: "totalPayment",
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: "Balance Amount",
      dataIndex: "balanceAmount",
      key: "balanceAmount",
      render: (text) => <a>{text}</a>,
      width: 200,
    },
  ];
  const calTotal = () => {
    let totalAmount = 0;
    tableData.map((x) => {
      console.log(x.totalPayment, "payment");
      if (x.totalPayment)
        totalAmount =
          parseFloat(totalAmount) +
          parseFloat(x.totalPayment) +
          parseFloat(x.balanceAmount);
    });
    // console.log(totalAmount, parseFloat(totalAmount), "total amount");
    return totalAmount;
  };
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">S No.</th>
          {columns.map((list) => (
            <th scope="col">{list.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr>
              {Object.entries(data).map((x) => {
                return (
                  <td>
                    <strong className="book-title">{x[1]}</strong>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        {registrationAmount ? (
          <tr className="text-offset">
            <td colspan="8">Registration</td>
            <td>{registrationAmount}</td>
          </tr>
        ) : (
          ""
        )}

        <tr className="text-offset">
          <td colspan="8">Total</td>
          <td>
            {tableData.length
              ? calTotal() + parseFloat(registrationAmount) + " Rs"
              : "0 Rs"}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
