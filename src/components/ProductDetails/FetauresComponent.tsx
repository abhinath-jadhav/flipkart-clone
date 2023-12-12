import React from "react";

interface Specification {
  [key: string]: string | string[] | Specification;
}

const FetauresComponent = ({ data }: { data: object }) => {
  console.log(data);

  const renderSpecification = (
    key: string,
    value: string | string[] | Specification
  ): JSX.Element => {
    if (Array.isArray(value)) {
      return (
        <div className="flex pb-4" key={key}>
          <h3 className="w-72 text-gray-500 pl-4">{key}:</h3>
          <ul className="">
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    } else if (typeof value === "object") {
      return (
        <div className="border" key={key}>
          {key !== "Specifications" && (
            <h3 className="w-72 text-lg font-semibold pl-4 pt-4 mb-4">
              {key}:
            </h3>
          )}
          {Object.entries(value).map(([subKey, subValue]) =>
            renderSpecification(subKey, subValue)
          )}
        </div>
      );
    } else {
      return (
        <div className="flex pb-4" key={key}>
          <h3 className="w-72 pl-4 text-[#878787]">{key}:</h3>
          <p className=""> {value}</p>
        </div>
      );
    }
  };

  return (
    <div className="mt-8">
      <p className="text-2xl font-semibold">Specifications</p>
      <div className="text-sm mt-6">
        {Object.entries(data).map(([key, value]) =>
          renderSpecification(key, value)
        )}
      </div>
    </div>
  );
};

export default FetauresComponent;
