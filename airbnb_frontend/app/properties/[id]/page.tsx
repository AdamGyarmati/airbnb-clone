import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

const PropertyDetailPage= () => {
  return(
    <main className="max-w-[2000px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/house-pool.webp"
          className="object-cover w-full h-full"
          alt="A picture of a house with pool">
        </Image>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property name</h1>

          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <div className="w-12 h-12 relative overflow-hidden rounded-full">
              <Image
                src="/profile-pic.jpg"
                alt="A picture of the owner"
                fill
                className="object-cover"
              />
            </div>
            <p><strong>John Doe</strong> is your host</p>
          </div>
          <hr />

          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis? Modi a quisquam optio laborum ducimus sed amet molestiae exercitationem? Iusto velit voluptas dolore ducimus quos pariatur fugit, necessitatibus deserunt eveniet sequi, consequuntur obcaecati quis, nesciunt ipsam quaerat. Quidem perspiciatis repudiandae iure minus commodi doloribus deleniti neque iusto nihil repellendus corrupti quod, odio illum voluptate dolore accusamus dolorum inventore assumenda praesentium necessitatibus reprehenderit, adipisci tempore magnam ea! Iusto, libero omnis inventore vel iste earum rem ut consectetur asperiores explicabo, repellendus tempore, quos laboriosam ea. Ex nemo ipsa nisi delectus eos reprehenderit suscipit quos dolorum est, deserunt aliquam voluptates quod voluptatem!
          </p>
        </div>

        <ReservationSideBar />
      </div>
    </main>
  )
}

export default PropertyDetailPage;