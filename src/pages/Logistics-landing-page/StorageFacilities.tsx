import Navbar from "../../components/Navbar"
import FAQ from "./FAQ"
import Footer from "../../components/Footer"



interface whatWeOfferList {
  id: number;
  img: string;
  title: string;
  desc: string
}
const SVG = ()=>(
    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.15 17C19.978 18.1936 19.5603 19.3386 18.9235 20.3627C18.2867 21.3868 17.4444 22.2678 16.45 22.95C16.2 21.9125 14.6625 21.0625 12.65 20.825C12.8625 19.3375 13.3 17.95 13.6 17.15C14.075 17.45 14.625 17.625 15.25 17.625C19.6875 17.625 19 10.125 19 10.125C19 10.125 18.375 11.375 16.5 11.375H15.25C14.694 11.3748 14.148 11.523 13.6683 11.8043C13.1887 12.0856 12.7928 12.4897 12.5214 12.9751C12.2501 13.4604 12.1132 14.0094 12.1248 14.5653C12.1364 15.1212 12.2961 15.6639 12.5875 16.1375C13.4125 15.275 14.3 14.5 15.25 13.875C13.6 15.5375 12.3375 17.625 11.5 19.625C10.7125 18.0875 9.725 16.9125 9 16.375C9.5875 16.625 10.1375 17 10.6625 17.375C10.8 17.075 10.875 16.7375 10.875 16.375C10.8125 12.9625 5.25 13.25 5.25 13.25C5.6375 13.775 5.875 14.4375 5.875 15.125V16.375C5.875 17.75 7 18.875 8.375 18.875C9 18.875 9.5625 18.65 10 18.25C10.2875 19.0375 10.5 19.9375 10.6125 20.8C8.4625 20.9875 6.8125 21.8625 6.55 22.9625C4.2625 21.375 2.75 18.7375 2.75 15.75C2.75 10.925 6.675 7 11.5 7V10.75L17.75 5.75L11.5 0.75V4.5C8.51631 4.5 5.65483 5.68526 3.54505 7.79505C1.43526 9.90483 0.25 12.7663 0.25 15.75C0.25 18.7337 1.43526 21.5952 3.54505 23.705C5.65483 25.8147 8.51631 27 11.5 27C17.2875 27 22.05 22.625 22.675 17H20.15Z" fill="#208836"/>
          </svg>
    )

export  const StorageFacilities:React.FC = ()=>{
	const whatWeOffer: whatWeOfferList[] = [
    {id: 1, img: "./images/storageImages/stor1.avif", title: "Steady Delivery Requests", desc: "Get consistent jobs from farmers and buyers." },
    {id: 2, img: "./images/storageImages/stor2.avif", title: "Timely Payments", desc: "Secure, fast payments for every completed delivery." },
    {id: 3, img: "./images/storageImages/stor3.avif", title: "Nationwide Reach", desc: "Expand your delivery network beyond your current location." },
  ]
  const workflow_steps = [
  {
    id: 1, 
    title: "Register Your Facility",
    description: "Create an account and add details of your storage center.",
  },
  {
    id: 2,
    title: "Get Verified",
    description: "We review your facility details for authenticity and standards.",
  },
  {
    id: 3,
    title: "Receive Bookings",
    description: "Farmers nearby can book your facility instantly.",
  },
  {
    id: 4,
    title: "Earn More",
    description: "Accept bookings, fill your capacity, and get paid reliably.",
  },
];

const storageFAQs = [
  {question: "What kind of storage facilities can register?", answer: "Warehouses, cold storage, silos, and other food-grade storage spaces are welcome."},
  {question: "How do I list my facility?", answer: "Simply sign up, add your facility details, pricing, and availability, then submit for verification."},
  {question: "How are payments handled?", answer: "Farmers pay through the platform, and funds are released to you after confirmed booking."},
  {question: "Can I list multiple facilities?", answer: "Yes, you can add and manage as many facilities as you own."},

]



	return (

		<>
		<div className='relative'>
{/*<div className="absolute top-0 sticky z-10">*/}
              {/*<Navbar />*/}
            {/*</div>*/}


			    <div className="relative h-screen flex items-center justify-center text-center rounded">

      <div 
        className="absolute inset-0 bg-cover bg-center z-1 top-0" 
        style={{ 
          backgroundImage: `url('./images/storageImages/storage_hero_img.avif')`
          // Background image of shipping containers and logistics area
        }}
        aria-label="Background image of logistics yard with shipping containers"
      >
<div className="absolute top-0 sticky z-10">

              <Navbar />
            </div>



        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
            
      </div>


      {/* Content */}
      <div className="relative text-white px-4 gap-4 py-3 ">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-bold ">
          Maximize Your Storage  <br className="hidden md:flex" /> Facility’s Potential
        </h1>
        
        {/* Subtext */}
        <p className="mt-4 font-nunito text-xl   max-w-xl mx-auto text-gray-300">
          List your storage spaces on our platform and connect with farmers looking for reliable and affordable storage.
        </p>

        {/* Call-to-Action Button */}

         <button className="relative bg-green-600 text-white font-semibold mt-8 py-3 px-8 rounded-lg overflow-hidden group">
              <span className="relative z-10">Partner with Us</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 bg-[#AD895F] rounded-full group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></div>
            </button>
      </div>

    </div>
    {/*section two*/}
    <section className="flex flex-col items-center justify-center my-12 font-nunito p-3 ">
      <div className="flex flex-col gap-4">
        <div className="relative flex gap-2 items-center justify-center bg-brand-fadeGreen w-fit mx-auto px-2 py-3 rounded-3xl">
          
<SVG />
<span className="text-brand-dark font-semibold font-nunito  md:text-xl">Key Benefits</span>
        </div>
        <h2 className="text-center text-3xl">Why Harvest Nexus Works for You</h2>
        <p className="md:text-xl text-[#646464] text-center max-w-xl ">More than just deliveries, we give you the tools, network, and opportunities to scale your logistics business</p>
      </div>

      {/*Logistis item arrrays*/}
      <div className="m-auto my-12 flex items-center justify-center font-nunito">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3 gap-2">
          {whatWeOffer.map((item)=>(
            <div key={item.id} className="flex  text-center flex-col bg-gray-100 p-4 rounded-xl gap-4">
              <img src={item.img} className="rounded-xl" />
              <div className="">
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p className="max-w-xs mx-auto ">{item.desc}</p>
              </div>
            </div>

            ))}
        </div>
      </div>
    </section>
    {/*how it work section*/}
    <section className="my-12">
      <div className="flex flex-col gap-4 items-center">
        <div className="relative flex gap-2 items-center justify-center bg-brand-fadeGreen text-brand-dark font-semibold w-fit mx-auto px-2 py-3 rounded-3xl">
          <SVG /><span className="text-secondary-700 font-nunito text md:text-xl">How It Works</span>
        </div>
        <h2 className="text-center text-3xl text-nunito">Start Delivering in No Time</h2>
        <p className="md:text-xl text-[#646464] text-center max-w-xl text-nunito">Getting started takes just 4 simple steps, sign up, connect, deliver, and earn.</p>
      </div>

    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto font-nunito my-12 p-3">
      {workflow_steps.map((item)=>(

          <div key={item.id} className="flex flex-rows rounded-xl transition:all hover:shadow-lg w-full lg:justify-center gap-4 my-4 text-nunito p-5">
            <div className="border w-16 h-16 border-primary p-8 flex flex-col items-center justify-center  rounded-full text-3xl text-primary font-bold">{item.id}</div>
            <div className="flex  flex-col gap-4 max-w-xs">
              <h1 className="text-xl md:text-3xl text-dark-700 font-bold">{item.title}</h1>
              <p className="md:text-xl">{item.description}</p>
            </div>
          </div>

        ))}
    </section>
    {/*Frequently asked question section*/}
    <section >
      {/*Accordio*/}
      <FAQ 
        title="FAQs"
        description="Clear answers to help you get started with delivery and earning."
        items={storageFAQs}
       />
    </section>
    <section className="relative flex items-center justify-center mx-auto bg-brand-fadeGreen  md:h-[25rem] p-3">
      <div className="flex flex-col items-center justify-center text-center gap-12  ">
        <h1 className="font-nunito items-center justify-center text-3xl md:text-6xl leading-snug text-primary font-bold max-w-xl text-center">
          Turn your empty space into steady income.
        </h1>
        <button className="bg-primary font-nunito rounded-xl text-white text-center p-3">Join as a Logistics Partner</button>
      </div>
    </section>
    <Footer />
		</div>
		</>


	)
}
export default StorageFacilities