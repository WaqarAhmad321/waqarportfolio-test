import { poppins } from "@/lib/fonts";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className={`font-poppins ${poppins.className}  dark:text-white text-2xl font-extrabold`}>
      &lt;Waqar.<span className="text-[#2C73F8] dark:text-cherry">tech</span>{" "}
      /&gt;
    </Link>
  );
};

export default Logo;
