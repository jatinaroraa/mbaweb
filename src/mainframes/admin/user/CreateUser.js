import React, { useState } from "react";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, DatePicker, Select } from "antd";
import "./user.css";
import { toast } from "react-toastify";
import { createUser } from "../../../services/userApi";
export default function CreateUser() {
  const { TextArea } = Input;
  const [gender, setGender] = useState(null);
  const [userData, setUserData] = useState({});
  const userDataSet = (key, val) => {
    setUserData({ ...userData, [key]: val });
  };
  const datechange = (date, dateString) => {
    setUserData({ ...userData, dob: dateString });
  };
  const handleChange = (value) => {
    setGender(value);
  };
  const submitUser = async () => {
    console.log("clicked", userData);
    if (userData.Password != userData.cPassword) {
      //   return toast.error("password doesnot match");
    }
    // if (Object.entries(userData).length != 8)
    //   return toast.error("fill all field");
    // console.log(Object.entries(userData).length, "userrr");

    let data = await createUser(userData);
    if (data) {
      return toast.success("user created");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      Create new user
      <div className="formFill">
        <Input
          placeholder="name"
          prefix={<UserOutlined />}
          name="name"
          onChange={(e) => userDataSet(e.target.name, e.target.value)}
        />
        <br />
        <Input
          type="email"
          placeholder="email"
          prefix={<UserOutlined />}
          name="email"
          onChange={(e) => userDataSet(e.target.name, e.target.value)}
        />
        <br />
        <Input
          placeholder="mobile Number"
          prefix={<UserOutlined />}
          name="mobileNumber"
          onChange={(e) => userDataSet(e.target.name, e.target.value)}
        />
        <br />
        <TextArea
          rows={4}
          placeholder=" current Address"
          name="address"
          onChange={(e) => userDataSet(e.target.name, e.target.value)}
        />
        <br />
        <Space>
          <DatePicker placeholder="date of birth" onChange={datechange} />
          <Select
            placeholder="Select a person"
            style={{
              width: 120,
            }}
            onChange={(e) => userDataSet("gender", e)}
            options={[
              {
                value: "male",
                label: "male",
              },
              {
                value: "female",
                label: "female",
              },
              {
                value: "other",
                label: "other",
              },
            ]}
          />
        </Space>
        <br />

        <Input.Password
          name="password"
          onChange={(e) => userDataSet(e.target.name, e.target.value)}
          placeholder="password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <br />
        <Input.Password
          name="cPassword"
          onChange={(e) => userDataSet(e.target.name, e.target.value)}
          placeholder="confirm Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <br />
        <Button type="primary" onClick={() => submitUser()}>
          Submit
        </Button>
      </div>
    </div>
  );
}
