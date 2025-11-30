type HeaderDetails = {
  title: string;
  descrip1: string;
  descrip2: string;
};
const SVG = ()=>(
    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9 16.25C19.728 17.4436 19.3103 18.5886 18.6735 19.6127C18.0367 20.6368 17.1944 21.5178 16.2 22.2C15.95 21.1625 14.4125 20.3125 12.4 20.075C12.6125 18.5875 13.05 17.2 13.35 16.4C13.825 16.7 14.375 16.875 15 16.875C19.4375 16.875 18.75 9.375 18.75 9.375C18.75 9.375 18.125 10.625 16.25 10.625H15C14.444 10.6248 13.898 10.773 13.4183 11.0543C12.9387 11.3356 12.5428 11.7397 12.2714 12.2251C12.0001 12.7104 11.8632 13.2594 11.8748 13.8153C11.8864 14.3712 12.0461 14.9139 12.3375 15.3875C13.1625 14.525 14.05 13.75 15 13.125C13.35 14.7875 12.0875 16.875 11.25 18.875C10.4625 17.3375 9.475 16.1625 8.75 15.625C9.3375 15.875 9.8875 16.25 10.4125 16.625C10.55 16.325 10.625 15.9875 10.625 15.625C10.5625 12.2125 5 12.5 5 12.5C5.3875 13.025 5.625 13.6875 5.625 14.375V15.625C5.625 17 6.75 18.125 8.125 18.125C8.75 18.125 9.3125 17.9 9.75 17.5C10.0375 18.2875 10.25 19.1875 10.3625 20.05C8.2125 20.2375 6.5625 21.1125 6.3 22.2125C4.0125 20.625 2.5 17.9875 2.5 15C2.5 10.175 6.425 6.25 11.25 6.25V10L17.5 5L11.25 0V3.75C8.26631 3.75 5.40483 4.93526 3.29505 7.04505C1.18526 9.15483 0 12.0163 0 15C0 17.9837 1.18526 20.8452 3.29505 22.955C5.40483 25.0647 8.26631 26.25 11.25 26.25C17.0375 26.25 21.8 21.875 22.425 16.25H19.9Z" fill="#208836"/>
</svg>

    )

const HeaderDescription = ({ details }: { details: HeaderDetails[] }) => {
  return (
    <>
      {details.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 items-center justify-center">
          <div className="relative flex gap-2 items-center justify-center bg-brand-fadeGreen w-fit mx-auto px-2 py-3 rounded-3xl">
            <SVG />
            <span className="text-brand-dark font-semibold font-nunito md:text-xl">
              {item.title}
            </span>
          </div>

          <h2 className="text-center text-3xl">{item.descrip1}</h2>

          <p className="md:text-xl text-lg text-[#646464] text-center max-w-xl items-center justify-center">
            {item.descrip2}
          </p>
        </div>
      ))}
    </>
  );
};

export default HeaderDescription;
