import React from "react";
import { Select, Input, Button, Icon } from "antd";

const { Search } = Input;

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default function TopContent() {
  return (
    <div className="container top-content" style={{ marginTop: "20px" }}>
      {/* themes */}
      <div style={{ display: "flex" }}>
        <Select
          placeholder="Choosing themes"
          style={{ width: 300, marginRight: "30px" }}
          onChange={handleChange}
        >
          <Option value="Black theme">Black theme</Option>
          <Option value="Green theme">Green theme</Option>
          <Option value="Light theme">Light theme</Option>
          <Option value="Orange theme">Orange theme</Option>
        </Select>
        <p>5:00 AM</p>
      </div>

      {/* search */}
      <div
        className="searchAndAddTask d-flex"
        style={{ margin: "15px 0 10px 0" }}
      >
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 600, marginRight: "10px", marginBottom: "10px" }}
        />

        <Button data-bs-toggle="modal" data-bs-target="#addTaskModal">
          <i className="fa fa-plus me-2"></i>Add New Task
        </Button>
      </div>
    </div>
  );
}
