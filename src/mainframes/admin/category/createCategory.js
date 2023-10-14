import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Input, Button } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  DownOutlined,
} from "@ant-design/icons";
import {
  createCategory,
  getCatageory,
} from "../../../services/createCatageory";
export default function CreateCategory() {
  const [catageoryData, setCatageoryData] = useState([]);
  const [cataData, setCataData] = useState({});

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "id",
      dataIndex: "_id",
      key: "_id",
    },
  ];
  const fetchData = async () => {
    let data = await getCatageory();
    console.log(data, "data of cata");
    setCatageoryData(data?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const createCata = async () => {
    //
    let data = await createCategory(cataData);
    if (data) {
      fetchData();
      //toast for sucess
    }
    setCataData({});
  };

  return (
    <div>
      createCategory
      <div
        style={{
          width: "50%",
        }}
      >
        <title>enter title name</title>
        <Space>
          <Input
            placeholder="name"
            prefix={<UserOutlined />}
            name="name"
            onChange={(e) => setCataData({ ...cataData, name: e.target.value })}
          />
          <Button type="primary" onClick={() => createCata()}>
            Create
          </Button>
        </Space>
      </div>
      <div>
        <Table columns={columns} dataSource={catageoryData} />
      </div>
    </div>
  );
}
