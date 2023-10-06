import React from "react";

const PricingCalc = () => {
  return (
    <div>
      <div className="">
        <div className="">

          <div className="">
            <label className="mr-2">Dropdown 1:</label>
            <select id="dropdown1" className="">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="">
            <label className="">Dropdown 2:</label>
            <select id="dropdown2" className="">
              <option value="optionA">Option A</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>

          <div id="displayResult" className="">
            Result will be displayed here
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalc;
