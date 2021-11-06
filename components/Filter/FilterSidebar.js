import FilterGroup from "./FilterGroup";
import Select from "react-select";
import { cities, employment } from "../../selectData";

export const CheckboxItem = ({ item, name }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center h-5">
        <input
          id={item}
          name={name}
          type="checkbox"
          className=" h-4 w-4 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3">
        <label htmlFor={item} className=" text-gray-700">
          {item}
        </label>
      </div>
    </div>
  );
};

function FilterSidebar({
  filter,
  salaryRange,
  from,
  to,
  location,
  TypeOfEmployment,
  cetegory,
  Experience,
  WrokLevel,
  ChooseAllThatApplies,
}) {
  const category = [
    { value: "Design", label: "Design" },
    { value: "Frontend Developer", label: "Frontend Developer" },
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "Full Stack Developer", label: "Full Stack Developer" },
    { value: "Web Developer", label: "Web Developer" },
    { value: "Network", label: "Network" },
    { value: "Project Manager", label: "Project Manager" },
    { value: "Data", label: "Data" },
  ];

  const level = [
    { value: "Entry-Level", label: "Entry-Level" },
    { value: "Mid-Level", label: "Mid-Level" },
    { value: "Senior-Level", label: "Senior-Level" },
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  return (
    <div>
      <h2 className="text-3xl text-primary pb-3">{filter}</h2>
      <hr className="border-gray-300 mb-5" />
      <FilterGroup title={salaryRange}>
        <div className="flex gap-2">
          <div className="flex flex-col ">
            <label
              htmlFor="salaryFrom"
              className="text-gray-600 select-none font-medium"
            >
              {from}
            </label>
            <input
              id="salaryFrom"
              type="number"
              name="salaryFrom"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 w-2/3"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="salaryTo"
              className="text-gray-600 select-none font-medium"
            >
              {to}
            </label>
            <input
              id="salaryTo"
              type="number"
              name="salaryTo"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 w-2/3"
            />
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title={location}>
        {" "}
        <Select
          className=" h-11 rounded-lg border-grey border-2"
          name="location"
          options={cities}
          styles={style}
          placeholder={ChooseAllThatApplies}
        />
      </FilterGroup>

      <FilterGroup title={TypeOfEmployment}>
        <Select
          className=" h-11 rounded-lg border-grey border-2"
          name="employment"
          options={employment}
          styles={style}
          isMulti
          placeholder={ChooseAllThatApplies}
        />
      </FilterGroup>
      <FilterGroup title={cetegory}>
        <Select
          className=" h-11 rounded-lg border-grey border-2"
          name="category"
          options={category}
          styles={style}
          isMulti
          placeholder={ChooseAllThatApplies}
        />
      </FilterGroup>
      <FilterGroup title={Experience}>
        <fieldset>
          <div className=" space-y-2">
            <CheckboxItem item="1" name="experience" />
            <CheckboxItem item="2" name="experience" />
            <CheckboxItem item="3" name="experience" />
            <CheckboxItem item="4+" name="experience" />
          </div>
        </fieldset>
      </FilterGroup>
      <FilterGroup title={WrokLevel}>
        <Select
          className=" h-11 rounded-lg border-grey border-2"
          name="level"
          options={level}
          styles={style}
          isMulti
          placeholder={ChooseAllThatApplies}
        />
      </FilterGroup>
    </div>
  );
}

export default FilterSidebar;
