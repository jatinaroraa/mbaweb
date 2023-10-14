import React from "react";

import CreateCategory from "./mainframes/admin/category/createCategory";
import { Navigate, Route, Routes } from "react-router-dom";
import GeneratePdf from "./mainframes/generateBill/GeneratePdf";
import Invoice from "./mainframes/invoice/invoice";

export default function RoutesAll() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneratePdf />} />
        <Route path="/createpdf" element={<Invoice />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
