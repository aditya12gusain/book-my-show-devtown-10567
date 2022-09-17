import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlayFilters = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3">
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div className="flex items-center gap-3 flex-wrap">
              {props.tags.map((tag, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 px-3 py-1 rounded"
                >
                  <span className="text-red-600">{tag}</span>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlayFilters;
