import React from "react";
import DisplayTable from "../../components/table/DisplayTable";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import { Button } from "antd";
import html2pdf from "html2pdf.js";
import TermandCond from "../../components/generateBill/TermandCond";

export default function Download({
  tableData,
  formData,
  registrationAmount,
  pdfMode,
}) {
  const convertPdf = () => {
    const element = document.getElementById("convertPdf");
    console.log(element, "element");
    if (element)
      html2pdf()
        .from(element)
        .set({
          margin: 10,
          filename: "example.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .outputPdf((pdf) => {
          console.log(pdf, "pdf output");
          const blob = new Blob([pdf], { type: "application/pdf" });
          const link = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = link;
          a.download = "example.pdf";
          a.click();
          window.URL.revokeObjectURL(link);
          console.log(link, "link generated");
        });
    else console.log("element not found");
  };
  return (
    <>
      <div
        className={!pdfMode ? "pdfViewInvoiceFalse" : "pdfViewInvoice"}
        id="convertPdf"
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "22px",
            marginBottom: "20px",
            textDecoration: "underline",
          }}
        >
          INVOICE
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "red",
            // width: "65vw",
          }}
        >
          <h1>MERIT BEAUTY ACADEMY</h1>
          <img
            src={require("../../assets/logo.jpeg")}
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "30px",
              marginTop: "20px",
            }}
          />
        </div>
        <div className="brandInfo">
          <p>{formData.address}</p>
          <p>{formData.mobileNumber}</p>
          <p>{formData.email}</p>
        </div>
        <div className="heading">
          <h3>Student Details</h3>
        </div>
        <div className="studentDetailMain">
          <div className="studentDetails">
            <p>{formData.studentName}</p>
            <p>{formData.studentAddress}</p>
            <p>{formData.studentNumber}</p>
            <p>{formData.studentEmail}</p>
            <p>{formData.enrollmentNumber}</p>
            <p>{formData.enrollmentDate}</p>
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
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          {/* <table  */}
          <DisplayTable
            tableData={tableData}
            registrationAmount={registrationAmount}
          />
        </div>

        <TermandCond />
      </div>
    </>
  );
}
