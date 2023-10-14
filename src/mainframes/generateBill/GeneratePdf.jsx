import React, { useState } from "react";
import EditableInput from "../../components/generateBill/editableInput";
import "./generatepdf.css";
import { Button, Table, Tooltip } from "antd";
import CustomTable from "../../components/table/customTable";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
import TermandCond from "../../components/generateBill/TermandCond";
export default function GeneratePdf() {
  const [formData, setFormData] = useState({});
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleImage = (e) => {
    console.log(e.target.files[0], "file");
    if (e.target.files && e.target.files[0])
      setFormData({
        ...formData,
        profilePicture: URL.createObjectURL(e.target.files[0]),
      });
  };

  const [tableData, setTableData] = useState([
    {
      index: 1,
      courseName: "",
      code: "",
      courseType: "",
      grossAmount: 0,
      discountAmount: 0,
      netAmount: 0,
      totalPayment: 0,
      balanceAmount: 0,
    },
  ]);
  const [registrationAmount, setRegistraionAmount] = useState(0);
  const handleChangeTable = (value, index, key) => {
    //here
    // console.log(index, tableData, "indexx");
    setTableData((prev) =>
      prev.map((x) => {
        if (x.index === index)
          return {
            ...x,
            [key]: value,
          };
        return x;
      })
    );
  };
  const handleClick = (e) => {
    let newObj = {
      index: tableData.length + 1,
      courseName: "",
      code: "",
      courseType: "",
      grossAmount: 0,
      discountAmount: 0,
      netAmount: 0,
      totalPayment: 0,
      balanceAmount: 0,
    };

    setTableData((prev) => [...prev, newObj]);
    console.log(tableData, "dayatat");
  };
  const deleteRow = (data) => {
    setTableData((prev) =>
      prev.filter((x) => {
        if (x.index != data.index) return prev;
      })
    );
    console.log(data, tableData, "clcicic");
  };
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
  const navigate = useNavigate();
  const navigateTo = () => {
    //
    return navigate("/createpdf", {
      state: {
        registrationAmount: registrationAmount,
        formData: formData,
        tableData: tableData,
      },
    });
  };
  return (
    <div className="pdfMain">
      GeneratePdf
      <div className="pdfView">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h1>MBA</h1>
          <img
            src={require("../../assets/logo.jpeg")}
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "30px",
            }}
          />
        </div>
        <div className="brandInfo">
          <EditableInput
            handleChange={handleChange}
            inputKey="address"
            value={formData.address ? formData.address : ""}
            name="Address"
          />
          <EditableInput
            handleChange={handleChange}
            inputKey="mobileNumber"
            value={formData.mobileNumber ? formData.mobileNumber : ""}
            name="Mobile Number"
          />{" "}
          <EditableInput
            handleChange={handleChange}
            inputKey="email"
            value={formData.email ? formData.email : ""}
            name="email"
          />
        </div>
        <div className="heading">
          <h3>Student Details</h3>
          {/* <EditableInput
            handleChange={handleChange}
            inputKey="studentBoxHeading"
            value={formData.studentBoxHeading ? formData.studentBoxHeading : ""}
            name="student details heading"
            type="text"
            heading={true}
          /> */}
        </div>
        <div className="studentDetailMain">
          <div className="studentDetails">
            <EditableInput
              handleChange={handleChange}
              inputKey="studentName"
              value={formData.studentName ? formData.studentName : ""}
              name="Student Name"
            />
            <EditableInput
              handleChange={handleChange}
              inputKey="studentAddress"
              value={formData.studentAddress ? formData.studentAddress : ""}
              name="student Address"
            />
            <EditableInput
              handleChange={handleChange}
              inputKey="studentNumber"
              value={formData.studentNumber ? formData.studentNumber : ""}
              name="student Mobile Number"
            />{" "}
            <EditableInput
              handleChange={handleChange}
              inputKey="studentEmail"
              value={formData.studentEmail ? formData.studentEmail : ""}
              name="studentEmail"
            />
            <EditableInput
              handleChange={handleChange}
              inputKey="enrollmentNumber"
              value={formData.enrollmentNumber ? formData.enrollmentNumber : ""}
              name="student enrollmentNumber"
            />{" "}
            <EditableInput
              handleChange={handleChange}
              inputKey="enrollmentDate"
              value={formData.enrollmentDate ? formData.enrollmentDate : ""}
              name="enrollment Date"
            />
          </div>
          <div className="profilediv">
            {formData?.profilePicture && (
              <img
                src={formData?.profilePicture}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              />
            )}
            <input type="file" onChange={handleImage} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          {/* <table  */}
          <CustomTable
            tableData={tableData}
            setTableData={setTableData}
            registrationAmount={registrationAmount}
            setRegistraionAmount={setRegistraionAmount}
            handleChange={handleChangeTable}
            handleClick={handleClick}
            deleteRow={deleteRow}
            calTotal={calTotal}
          />
        </div>
        {/* <TermandCond /> */}
      </div>
      <Button onClick={navigateTo}>Finish</Button>
    </div>
  );
}
