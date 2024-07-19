import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";

const LandlordDetailPage= () => {
  return(
    <main className="max-w-[2000px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <div className="w-52 h-52 relative overflow-hidden rounded-full">
              <Image
                fill
                src="/profile-pic.jpg"
                alt="Landlord picture"
                className="rounded-full object-cover"/>
              </div>

              <h1 className="mt-6 text-2xl">Landlord name</h1>

              <ContactButton />
          </div>
        </aside>

        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandlordDetailPage;