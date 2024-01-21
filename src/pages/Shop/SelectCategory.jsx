import React from "react";

const SelectCategory = (select) => {
  return (
    <select defaultValue={select}>
      <option value="all">All Categories</option>
      <option value="doctors-chamber">Doctors Chamber</option>
      <option value="medical-device">Medical Device</option>
      <option value="ot-goods">O.T Goods</option>
      <option value="surge-elastic-room">Surge Elastic Room</option>
      <option value="surge-textile-materials">Surge Textile Materials</option>
    </select>
  );
};

export default SelectCategory;
