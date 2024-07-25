import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";
import { getUserId } from "@/app/lib/actions";

const Navbar = async () => {
  const userId = await getUserId();
  return(
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[2000px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              priority = {true}
              src="/logo.png"
              alt="A picture of the logo"
              width={180}
              height={38}
            >
            </Image>
          </Link>

          <div className="flex space-x-6">
            <SearchFilters/>
          </div>

          <div className="flex items-center space-x-6">
            <AddPropertyButton />
            <UserNav
              userId={userId}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;