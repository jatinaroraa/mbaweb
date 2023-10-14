import React, { useEffect, useState } from "react";
import { getCatageory } from "../../../services/createCatageory";
import { Space, Table, Tag, Input, Button, Select } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  DownOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { createTagApi, getAllTagsApi } from "../../../services/tagApi";
export default function CreateTags() {
  const [catageoryData, setCatageoryData] = useState([]);
  const [getTags, setGetTags] = useState([]);
  const [tag, setTag] = useState({});

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      render: (_, { category }) => <>{category?.name}</>,
    },
  ];
  const fetchData = async () => {
    let data = await getCatageory();
    console.log(data, "data of cata");
    let customData = data?.data?.map((x) => {
      return { value: x._id, label: x.name };
    });
    setCatageoryData(customData);

    //get tags table
    let tagapi = await getAllTagsApi();
    setGetTags(tagapi?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const createTag = async () => {
    if (Object.entries(tag).length != 2) {
      // return toast.error('add both to create')
    }
    let data = await createTagApi(tag);
    if (data) {
      //get tags table
      fetchData();
    }
    setTag({});
  };
  return (
    <div>
      createTags
      <div>
        <Space>
          <Input
            placeholder="name"
            prefix={<UserOutlined />}
            name="name"
            onChange={(e) => setTag({ ...tag, name: e.target.value })}
          />
          <Select
            placeholder="Select a person"
            style={{
              width: 120,
            }}
            onChange={(e, d) => {
              console.log(d, "dddd");
              setTag({ ...tag, category: { id: d.value, name: d.label } });
            }}
            options={catageoryData}
          />
          <Button type="primary" onClick={() => createTag()}>
            Create
          </Button>
        </Space>
      </div>
      <div>
        <Table columns={columns} dataSource={getTags} />
      </div>
    </div>
  );
}
