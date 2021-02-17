import React, { useState } from "react";
import { Input, Dropdown, Select, Button } from "semantic-ui-react";
import ServiceClient from "../../services-client/ServiceClient";

const styles = require("./SearchBar.css");
const options = [
  { text: "BVID查询", value: 0 },
  { text: "up主ID查询", value: 1 },
  { text: "分区ID查询", value: 2 },
];

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [option, setOption] = useState(0);

  const handleSearchInputChange = (data: any) => {
    console.log(data.value);
    setSearchText(data.value);
  };

  const handleSelectChange = (data: any) => {
    setOption(data.value);
  };

  const handleSubmit = () => {
    const client = new ServiceClient();
    client.getVideoInfo(searchText);
    console.log("handleSubmit");
  };

  return (
    <div style={{ height: "40px", width: "600px", marginTop: "20px" }}>
      <Input
        fluid
        size="large"
        action
        placeholder="搜索你喜欢的视频 或 up主..."
        onChange={(event: any, data: any) => handleSearchInputChange(data)}
      >
        <Select
          compact
          options={options}
          defaultValue={0}
          onChange={(event: any, data: any) => handleSelectChange(data)}
        />
        <input />
        <Button type="submit" size="large" onClick={() => handleSubmit()}>
          Search
        </Button>
      </Input>
    </div>
  );
};

export default SearchBar;
