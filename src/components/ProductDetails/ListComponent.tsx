import { FaCircle } from "react-icons/fa";

const ListComponent = ({
  title,
  list,
  className,
}: {
  title?: string;
  list: string[];
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex">
        {title && <p className="w-24">{title}</p>}
        <ul className="px-2 text-sm ">
          {list.map((li, index) => (
            <li className="flex items-center gap-2" key={index}>
              <FaCircle size={7} color="rgb(128 128 128)" />
              <p className="mt-1">{li}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComponent;
