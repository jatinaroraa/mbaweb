import React, { useState } from "react";
import "./table.css";
import { Button } from "antd";
export default function CustomTable({
  tableData,
  setTableData,
  registrationAmount,
  setRegistraionAmount,
  handleChange,
  handleClick,
  deleteRow,
  calTotal,
}) {
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

  return (
    <table>
      <thead>
        <tr>
          {columns.map((list) => (
            <th scope="col">{list.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr>
              <td class="item-stock">
                <strong class="book-title">
                  <input
                    placeholder="courseName"
                    onChange={(e) =>
                      handleChange(e.target.value, data.index, "courseName")
                    }
                    //   value={data.courseName}
                  />
                </strong>
              </td>
              <td class="item-stock">
                <input
                  placeholder="code"
                  onChange={(e) =>
                    handleChange(e.target.value, data.index, "code")
                  }
                  //   value={data.code}
                />
              </td>
              <td>
                <input
                  placeholder="courseType"
                  onChange={(e) =>
                    handleChange(e.target.value, data.index, "courseType")
                  }
                  // value={data.courseType}
                />
              </td>
              <td class="item-stock">
                <input
                  placeholder="grossAmount"
                  onChange={(e) =>
                    handleChange(e.target.value, data.index, "grossAmount")
                  }
                  //   value={data.grossAmount}
                />
              </td>
              <td class="item-stock">
                <input
                  placeholder="discountAmount"
                  onChange={(e) =>
                    handleChange(e.target.value, data.index, "discountAmount")
                  }
                  //   value={data.discountAmount}
                />
              </td>
              <td class="item-stock">
                <input
                  placeholder="netAmount"
                  onChange={(e) =>
                    handleChange(e.target.value, data.index, "netAmount")
                  }
                  //   value={data.netAmount}
                />
              </td>
              <td class="item-stock">
                <input
                  placeholder="totalPayment"
                  onChange={(e) =>
                    handleChange(e.target.value, data.index, "totalPayment")
                  }
                  //   value={data.totalAmount}
                />
              </td>
              <td class="item-stock">
                <input
                  placeholder="balance amount"
                  onChange={(e) =>
                    handleChange(e.target.value, data.index, "balanceAmount")
                  }
                  //   value={data.totalAmount}
                />
              </td>
              <Button onClick={() => deleteRow(data)}>x delete</Button>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        {/* <tr class="text-offset">
          <td colspan="3">SubTotal</td>
          <td>135.36</td>
        </tr>
        <tr class="text-offset">
          <td colspan="3">Tax</td>
          <td>13.54</td>
        </tr> */}

        <tr class="text-offset">
          <td colspan="7">Registration</td>
          <td>
            <input
              placeholder="registration amount"
              onChange={(e) => {
                setRegistraionAmount(e.target.value);
              }}
              value={registrationAmount}
            />
          </td>
        </tr>
        <tr class="text-offset">
          <td colspan="7">Total</td>
          <td>
            {tableData.length
              ? calTotal() + parseFloat(registrationAmount) + " Rs"
              : "0 Rs"}
          </td>
        </tr>
      </tfoot>
      <Button onClick={handleClick}> +add field </Button>
    </table>
  );
}
