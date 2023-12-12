import { SelectionData } from "../../utils/types.util";

const SelectionCard = ({
  data,
  className,
  title,
}: {
  data: SelectionData[];
  className?: string;
  title: string;
}) => {
  const comment = "../../assets/comment.svg";
  return (
    <div className={`flex cursor-pointer gap-2 ${className}`}>
      <p className="w-24">{title}</p>
      {data.map((obj, i) => (
        <div className="relative" key={i}>
          {obj.isImgage ? (
            <div className="group flex border">
              <div className="w-[63px] h-[63px]">
                <img className="h-full" src={obj.img} alt="data" />
              </div>
              <div className="hidden group-hover:block absolute top-[-50px] left-[-10px]">
                <div
                  className="relative"
                  style={{ backgroundImage: `url(${comment})` }}
                >
                  <p className="text-white bg-black absolute top-2 left-1 px-3 py-1">
                    {obj.detail}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="border-2 border-gray-300 px-4 py-1">
              <p>{obj.detail}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectionCard;
