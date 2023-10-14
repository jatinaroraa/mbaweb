import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";

export default function DownloadCom() {
  return (
    <div>
      <PDFDownloadLink
        document={<InvoicePage pdfMode={true} data={data} />}
        fileName={`${
          data.invoiceTitle ? data.invoiceTitle.toLowerCase() : "invoice"
        }.pdf`}
        aria-label="Save PDF"
      ></PDFDownloadLink>
    </div>
  );
}
