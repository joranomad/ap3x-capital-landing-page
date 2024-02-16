import { Icon } from "@iconify/react";

export default function SearchBar() {
    return (
        <div className="bg-white p-4 rounded-md flex items-center mt-8 mb-8">
      <Icon icon="material-symbols-light:search" className="text-secondary-foreground cursor-pointer text-2xl" />
      <input
        type="text"
        placeholder="Search"
        className="w-full outline-none px-2 bg-white "
      />
      
    </div>
    );
}