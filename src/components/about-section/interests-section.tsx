type InterestsSectionProps = {
  id: number;
  title: string;
  description: string;
  icon?: string;
  iconText?: string;
};

interface InterestsSectionComponentProps {
  data: InterestsSectionProps[];
  title: string;
}

function InterestsSection({ data, title }: InterestsSectionComponentProps) {
  return (
    <div>
      <h2 className="text-base leading-9 font-bold text-[#27272A] pb-11">{title}</h2>
      <ul className="space-y-11">
        {data.map((item, index) => (
          <li key={item.id} className="flex flex-col items-start">
            <div className="flex items-center w-full">
              <div className="flex items-center justify-center">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                  />
                ) : (
                  <span className="text-xl leading-[30px] text-[#27272A] w-[152px]">
                    {item.iconText}
                  </span>
                )}
              </div>
              <div className="ml-4">
                <h3 className="text-xl leading-[30px] font-semibold text-[#27272A]">
                  {item.title}
                </h3>
                <p className="text-xl leading-[30px] text-[#27272A]">{item.description}</p>
              </div>
            </div>
            {!item.icon && index !== data.length - 1 && (
              <hr className="w-full border-t border-gray-300 mt-4" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InterestsSection;
