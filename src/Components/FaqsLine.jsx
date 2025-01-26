import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const FaqsLine = ({ faq, index }) => {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };

  return (
    <div className="bg-gray-600 mx-[10%] px-6 relative text-white" key={index}>
      <div className="flex justify-between py-7">
        <p className="text-xl font-bold h-full w-full">{faq.question}</p>
        <div className="pl-1 cursor-pointer" onClick={handleOpened}>
          {opened ? (
            <Eye className="text-[#FF840E]" />
          ) : (
            <EyeOff />
          )}
        </div>
      </div>

      <div className=''
      >
       
        {opened && <> <hr />
        <p className="py-2">{faq.answer}</p></>}
      </div>
    </div>
  );
};

export default FaqsLine;
