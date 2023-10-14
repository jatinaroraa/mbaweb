import React, { useState } from "react";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, DatePicker, Select } from "antd";

export default function createQuestions() {
  const { TextArea } = Input;

  return (
    <div>
      createQuestions
      <div>
        <TextArea
          rows={4}
          placeholder="Enter Question"
          name="address"
          //   onChange={(e) => userDataSet(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
}
