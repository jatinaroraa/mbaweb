import React from "react";
import ReactDOMServer from "react-dom/server";
import { useLocation } from "react-router-dom";
import DisplayTable from "../../components/table/DisplayTable";
import "./invoice.css";
import Download from "./Download";
import { Button } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import html2pdf from "html2pdf.js";
export default function Invoice() {
  const location = useLocation();
  const { tableData, formData, registrationAmount } = location.state;
  const downloadPdf = () => {
    const printElement = ReactDOMServer.renderToString(
      Download({ tableData, formData, registrationAmount, pdfMode: true })
    );
    // const printElement = pdfJSX();

    html2pdf().from(printElement).save("Invoice.pdf");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button onClick={downloadPdf}>Download pdf </Button>
      </div>

      <div
        style={{
          backgroundColor: "#f2f3f5",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Download
          tableData={tableData}
          formData={formData}
          registrationAmount={registrationAmount}
          pdfMode={false}
        />
      </div>
    </>
  );
}
