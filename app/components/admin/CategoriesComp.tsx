import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

interface ChildProps {
  name: string;
  category: string | string[] | undefined;
}

const CategoriesComp = ({ name, category }: ChildProps) => {
  const router = useRouter();
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const [isCurrentCategory, setIsCurrentCategory] = useState(false);

  const changeCategory = () => {
    if (name !== "Front Images") {
      router.push(`/admin?category=${encodeURI(name)}`);
    } else {
      router.push(`/admin`);
    }
  };

  useEffect(() => {
    if (name === category) {
      setIsCurrentCategory(true);
      categoryRef.current?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      {name === "Front Images" ? (
        <div
          ref={categoryRef}
          onClick={changeCategory}
          className={`shrink-0 text-sm cursor-pointer h-full px-2 flex ${
            !category && "font-bold border-b-2"
          }
          
          `}
        >
          {name}
        </div>
      ) : (
        <div
          ref={categoryRef}
          onClick={changeCategory}
          className={`shrink-0 text-sm cursor-pointer h-full px-2 flex ${
            name === category && "font-bold border-b-2"
          }`}
        >
          {name}
        </div>
      )}
    </>
  );
};

export default CategoriesComp;
