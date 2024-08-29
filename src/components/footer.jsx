import React from "react";
import PL2 from "../assets/pepsilogo2.png";

export default function Footer() {
  return (
    <div className="bg-[#0025FF] mt-0">
      <div className="flex flex-wrap bg-black text-white lg:bg-[#0025FF] lg:flex-row flex-col justify-center lg:justify-between items-center min-h-[250px] gap-5">
        <img
          className="m-6"
          width="80"
          height="80"
          src={PL2}
          alt="Pepsi Logo"
        />
        <div className="flex flex-col lg:flex-row lg:gap-10 text-center lg:text-left flex-wrap">
          <div className="flex flex-col min-w-[200px]">
            <a
              className="font-black"
              href="https://contact.pepsico.com/pepsi"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT US
            </a>
            <a
              className="font-black"
              href="https://contact.pepsico.com/pepsi/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              TERMS & CONDITIONS
            </a>
            <a
              className="font-black"
              href="https://contact.pepsico.com/pepsi/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRIVACY POLICY
            </a>
          </div>
          <div className="flex flex-col min-w-[200px]">
            <a
              className="font-black"
              href="https://contact.pepsico.com/pepsi"
              target="_blank"
              rel="noopener noreferrer"
            >
              COPYRIGHT
            </a>
            <a
              className="font-black"
              href="https://www.pepsicoproductfacts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRODUCT FACTS
            </a>
            <a
              className="font-black"
              href="https://contact.pepsico.com/pepsi/product-locator"
              target="_blank"
              rel="noopener noreferrer"
            >
              STORE LOCATOR
            </a>
          </div>
          <div className="flex flex-col min-w-[200px]">
            <a
              className="font-black"
              href="https://www.pepsicopartners.com/pepsico/en/USD/partner/leadgeneration"
              target="_blank"
              rel="noopener noreferrer"
            >
              SERVE PEPSI
            </a>
            <a
              className="font-black"
              href="https://contact.pepsico.com/pepsi/about-our-ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABOUT OUR ADS
            </a>
            <a
              className="font-black"
              href="https://www.pepsifrontlinecareers.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CAREERS
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 flex-row">
        <a
          href="https://www.instagram.com/pepsi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            height="40"
            version="1.1"
            viewBox="0 0 1005 1005"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M295.42,5.96c-53.2,2.51-89.54,11.03-121.29,23.47-32.87,12.81-60.73,29.99-88.45,57.82-27.75,27.85-44.79,55.76-57.51,88.66-12.31,31.83-20.66,68.19-23,121.42-2.33,53.33-2.87,70.34-2.61,206.12.26,135.76.86,152.8,3.4,206.15,2.54,53.19,11.03,89.51,23.47,121.28,12.83,32.87,29.99,60.72,57.83,88.45,27.83,27.73,55.76,44.76,88.68,57.49,31.8,12.3,68.17,20.67,121.39,23,53.33,2.35,70.36,2.87,206.1,2.61,135.8-.26,152.83-.86,206.16-3.39,53.2-2.54,89.5-11.06,121.29-23.47,32.87-12.86,60.73-29.99,88.45-57.83,27.72-27.83,44.76-55.76,57.48-88.68,12.31-31.8,20.69-68.17,23-121.36,2.33-53.36,2.88-70.41,2.62-206.16-.26-135.77-.87-152.78-3.4-206.1-2.53-53.23-11.05-89.54-23.47-121.32-12.85-32.87-29.99-60.7-57.82-88.45-27.83-27.72-55.76-44.79-88.68-57.48-31.82-12.31-68.17-20.7-121.39-23-53.33-2.37-70.36-2.88-206.14-2.62-135.76.26-152.78.84-206.11,3.4M301.26,909.84c-48.75-2.12-75.22-10.22-92.86-17.01-23.36-9.04-40.03-19.88-57.58-37.29-17.51-17.48-28.38-34.1-37.5-57.41-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.7-3.05-68.51-3.29-202.02-.26-133.47.23-149.29,2.53-202.03,2.09-48.71,10.24-75.22,17.01-92.84,9.04-23.39,19.84-40.03,37.29-57.58,17.48-17.54,34.1-28.38,57.43-37.5,17.63-6.89,44.06-15.07,92.79-17.38,52.73-2.5,68.53-3.03,202-3.29,133.5-.26,149.32.21,202.06,2.53,48.71,2.12,75.22,10.19,92.83,17.01,23.38,9.04,40.05,19.81,57.58,37.29,17.53,17.48,28.4,34.07,37.52,57.45,6.88,17.58,15.07,44.05,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202.02.26,133.51-.23,149.32-2.54,202.03-2.12,48.75-10.21,75.23-17.01,92.89-9.04,23.34-19.85,40.01-37.31,57.56-17.46,17.48-34.08,28.38-57.43,37.5-17.59,6.87-44.06,15.07-92.76,17.38-52.73,2.48-68.53,3.05-202.05,3.29-133.47.26-149.27-.24-202.01-2.53M708.86,235.23c.06,33.11,26.99,59.92,60.1,59.86,33.13-.06,59.94-26.97,59.89-60.09-.07-33.11-26.99-59.94-60.12-59.88-33.13.06-59.94,26.99-59.88,60.1M245.77,502.99c.27,141.8,115.44,256.5,257.21,256.22,141.78-.28,256.54-115.41,256.27-257.21-.28-141.75-115.46-256.51-257.26-256.24-141.77.28-256.5,115.46-256.22,257.23M335.83,502.81c-.16-92.03,74.33-166.8,166.34-166.96,92.03-.18,166.81,74.28,166.99,166.33.18,92.05-74.31,166.8-166.36,166.98-92.02.18-166.8-74.29-166.97-166.34"
              fill="white"
            ></path>
          </svg>
        </a>
        <a
          href="https://twitter.com/pepsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 1200 1227"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/PepsiUS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
              fill="white"
            />
            <path
              d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z"
              fill="#0025FF"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/user/Pepsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.377,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232C512,256.002 512,172.692 501.299,132.766zM205.662,345.826L205.662,176.837l142.284,84.995L205.662,345.826z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@pepsi" target="_blank">
          <svg
            width="36"
            height="36"
            viewBox="300 300 1800 1800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M1964.6,1090.7c-13.7,1.3-27.4,2-41.1,2.1-150.4,0-290.7-75.8-373.2-201.7v686.7c0,280.3-227.2,507.6-507.6,507.6s-507.6-227.2-507.6-507.6,227.2-507.6,507.6-507.6h0c10.6,0,21,1,31.4,1.6v250.1c-10.4-1.2-20.7-3.2-31.4-3.2-143.1,0-259,116-259,259s116,259,259,259,269.5-112.7,269.5-255.8l2.5-1166.3h239.3c22.6,214.6,195.6,382.2,410.8,397.9v278"
            ></path>
          </svg>
        </a>
        <a href="https://www.threads.net/@pepsi" target="_blank">
          <svg
            width="40"
            height="40"
            viewBox="200 200 300 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M447.7,335.3c-2.8.8-5.7,1.5-8.5,2.3-6.1,1.6-12.3,3.3-18.4,4.9-.3,0-.7.2-.9.2-1.1-3.4-2.2-6.9-3.3-10.3-2-5.8-4.4-11.4-7.2-16.7-3.8-7.3-8.3-14.1-13.7-20.3-4.8-5.5-10.3-10.5-16.2-14.7-6.9-4.9-14.3-8.8-22.2-11.8-6.2-2.4-12.6-4.2-19.1-5.4-2.3-.4-4.7-.9-7-1.2-1.9-.3-3.9-.4-5.8-.7-2.1-.2-4.2-.4-6.3-.7-.9,0-1.7-.1-2.6-.1-1,0-2.1-.1-3.2-.2h-.5c-3.2,0-6.3,0-9.5,0-2.5,0-5,.2-7.5.5-2.7.2-5.4.4-8,.9-4.1.6-8.2,1.3-12.2,2.2-9.4,2.1-18.4,5.3-26.9,9.9-6.2,3.3-11.9,7.3-17.2,12-6.8,6.1-12.6,13.1-17.4,20.8-3.6,5.8-6.6,11.9-9.1,18.1-2.8,6.7-4.8,13.7-6.5,20.7-1.5,6-2.6,12.1-3.4,18.3-.5,4.4-1,8.7-1.4,13.1-.2,2.5-.4,5-.5,7.5-.2,5.7-.3,11.4-.3,17.2,0,2.6.1,5.1.3,7.7.4,4.6.7,9.3,1.3,13.9.6,5.1,1.4,10.2,2.3,15.2,1.1,6.4,2.8,12.7,4.7,18.8,2.3,7.4,5.3,14.6,9,21.5,3.3,6.3,7.2,12.2,11.8,17.6,4.1,4.9,8.6,9.2,13.6,13.1,5.1,4,10.6,7.3,16.4,10.2,5.9,2.9,12,5.2,18.4,6.8,2.7.7,5.4,1.5,8.1,2,2.6.6,5.3.9,8,1.3,3,.4,6,.8,9,1.1,1.5.2,3,.1,4.6.2,2.2,0,4.3.2,6.5.2,2.5,0,5.1,0,7.6,0,3.4-.2,6.9-.3,10.3-.7,7.2-.8,14.3-1.9,21.3-3.8,8-2.2,15.7-5.4,22.8-9.7,7.3-4.4,13.8-9.8,19.6-16,6.7-7.3,11.7-15.6,14.4-25.1.6-2,1-4.1,1.4-6.2.4-2.4.6-4.8.8-7.2.1-1.6.3-3.2.2-4.7-.2-2.9-.5-5.9-.9-8.8-.8-5-2.3-9.8-4.7-14.3-3.1-5.9-7.2-11-12.4-15.2-2.4-1.9-4.9-3.6-7.4-5.4-.2-.2-.5-.3-.8-.4-.3,1.9-.5,3.8-.9,5.6-.4,2.1-.8,4.1-1.3,6.2-.5,2-.9,4-1.5,6-1.7,5.9-3.9,11.5-6.9,16.8-3.3,6-7.2,11.4-12.1,16.2-3.8,3.7-8,6.8-12.7,9.4-5.1,2.8-10.4,4.8-16,6.2-2.5.6-5.1,1.1-7.7,1.5-2.2.3-4.4.6-6.5.7-3.3.1-6.6.3-9.9.1-2.8-.1-5.6-.6-8.4-.9-1.5-.2-3.1-.4-4.6-.8-3.4-1-6.8-2-10.1-3.2-5.5-2.1-10.6-4.9-15.3-8.6-8.6-6.7-14.8-15.1-17.9-25.6-.9-3-1.4-6.1-1.9-9.2-.6-3.4-.4-6.9-.3-10.3,0-2.1.5-4.3.9-6.4,2.2-11.3,7.7-20.7,16.2-28.3,7.1-6.4,15.4-10.6,24.5-13.5,5-1.6,10.1-2.7,15.2-3.4,2.9-.4,5.8-.6,8.7-.8,6.2-.5,12.3-.5,18.5-.3,2.7,0,5.5.3,8.2.5,2.5.2,5.1.5,7.6.8,2,.2,4,.6,6.1.9-.1-.7-.2-1.4-.4-2.1-.9-3.3-1.6-6.7-2.8-9.9-1.9-5.3-4.7-10.1-8.8-14.1-3.8-3.7-8.3-6.2-13.3-7.7-2.1-.6-4.2-1.1-6.3-1.6-1.6-.3-3.2-.4-4.7-.5-2.6-.2-5.3-.4-7.9-.3-3,0-6,.4-9,1.1-3.6.8-7.1,1.9-10.4,3.5-6.1,3-11,7.3-14.8,12.9-.1.2-.2.3-.4.6-7.9-5.4-15.7-10.8-23.7-16.3,1.3-1.8,2.6-3.6,3.9-5.3,4.5-5.7,9.9-10.6,16.1-14.5,3.7-2.4,7.6-4.4,11.7-6,4.7-1.9,9.6-3.2,14.7-4,2.1-.3,4.3-.6,6.4-.7,3.4-.2,6.8-.4,10.3-.3,3.6.1,7.2.6,10.8.9,1.4.1,2.9.4,4.3.7,7,1.5,13.7,3.8,19.9,7.3,6.3,3.6,11.8,8.2,16.5,13.8,4,4.8,7.3,10.2,9.7,16,1.3,3,2.4,6.1,3.4,9.2.9,3,1.6,6,2.2,9.1.6,3,1,6.1,1.4,9.1.3,2,.3,4,.5,6,0,.6.2,1.1.2,1.7,6.2,2.6,12.2,5.9,17.8,9.7,8.8,6.1,16.4,13.4,22.4,22.4,3.3,5,6.1,10.3,8.1,16,1.5,4,2.6,8.2,3.4,12.4.4,2.4.8,4.7,1,7.1.3,2.6.4,5.2.5,7.9,0,2.3.1,4.5,0,6.8-.2,2.6-.5,5.2-.8,7.9-.7,6-2.2,11.9-4.3,17.6-1.5,4.1-3.3,8-5.3,11.8-3.8,7.1-8.5,13.6-14,19.6-5.9,6.4-12.5,12.1-19.6,17.1-5.3,3.7-10.8,6.9-16.6,9.6-5.1,2.4-10.4,4.4-15.8,6-5.2,1.6-10.4,2.9-15.7,3.8-2.4.4-4.8.8-7.1,1.1-2.5.3-4.9.6-7.4.8-2,.2-3.9.4-5.9.5-2,.1-4,.2-5.9.3,0,0-.2.1-.3.2h-12.8c-.1,0-.3-.1-.4-.2-1.6,0-3.2,0-4.8-.2-2.4-.2-4.8-.4-7.1-.7-1.7-.1-3.3-.2-5-.5-2.2-.3-4.4-.7-6.6-1.1-6.3-1-12.5-2.5-18.7-4.3-2.4-.7-4.7-1.5-7.1-2.3-2.3-.8-4.5-1.8-6.7-2.8-3.2-1.5-6.4-2.9-9.5-4.5-7-3.6-13.5-8-19.6-13-5.7-4.6-10.8-9.8-15.6-15.4-6-7-11-14.7-15.5-22.8-1.3-2.2-2.3-4.6-3.4-7-4.5-9.6-8-19.5-10.6-29.8-1-3.9-1.8-7.8-2.7-11.7-.3-1.4-.5-2.9-.8-4.4-.3-1.5-.6-2.9-.8-4.4-.4-2.8-.7-5.7-1.1-8.5-.2-1.3-.4-2.5-.5-3.8-.1-1.3-.2-2.7-.3-4-.2-1.9-.3-3.7-.5-5.5,0-1.1-.1-2.3-.2-3.4-.1-2.1-.2-4.2-.3-6.3,0-1.8,0-3.6,0-5.3v-3.9c0-.8,0-1.5,0-2.2,0,0,0-.2,0-.2,0-2.9.1-5.8.2-8.7,0-1.9.2-3.8.3-5.7.1-2,.3-4.1.5-6.1.1-1.6.3-3.3.5-4.9.3-2.4.6-4.7.9-7.1.4-2.8.8-5.5,1.3-8.3.3-2,.7-4,1.1-6,1.3-6.5,2.9-13,4.9-19.3,3.3-10.6,7.5-20.9,13.1-30.6,1.9-3.3,3.9-6.5,6-9.6,5-7.5,10.9-14.3,17.5-20.5,7.5-7.1,15.9-13,25-17.9,10.4-5.6,21.4-9.5,32.8-12.2,5.4-1.3,10.9-2.3,16.4-2.9,3.5-.4,6.9-.8,10.4-1.1,2.4-.2,4.9-.3,7.3-.4.2,0,.3,0,.5-.1h10.7c.5.1,1,.3,1.6.3,2.1.1,4.1.2,6.2.3,2.1.1,4.2.3,6.2.5,2.5.3,5,.5,7.5.9,3.9.6,7.8,1.3,11.6,2.1,4,.9,8,2,12,3.2,3.1.9,6.2,2.1,9.3,3.3,5,1.9,9.9,4.1,14.6,6.7,10.2,5.5,19.5,12.4,27.8,20.6,6.9,6.9,13.2,14.4,18.2,22.8,2.2,3.7,4.5,7.3,6.4,11.1,2.5,5,4.8,10.1,6.8,15.3,1.9,4.7,3.2,9.6,4.8,14.4.3.8.6,1.5.9,2.3v.2ZM351.5,403.4c-.4,0-.8-.2-1.2-.3-2.3-.4-4.6-.9-6.9-1.3-1.5-.3-3-.4-4.6-.6-1.5-.2-3.1-.3-4.6-.4-2.6-.2-5.3-.4-7.9-.4-5.8-.1-11.7-.2-17.5.5-2.8.3-5.6.8-8.4,1.3-4.6.8-9,2.4-13.1,4.6-3,1.6-5.7,3.6-8,6.1-3.9,4.3-6,9.4-6,15.2,0,1.2.2,2.3.3,3.5.3,2.7,1.2,5.2,2.6,7.5,2.1,3.5,4.9,6.3,8.4,8.4,4.4,2.8,9.3,4.4,14.4,5.3,1.8.3,3.6.7,5.4.7,3.1,0,6.2,0,9.3-.3,2.4-.2,4.8-.6,7.1-1.1,8.9-2,15.9-6.8,21-14.5,4.8-7.3,7.1-15.5,8.5-24.1.4-2.6.6-5.2,1-7.8,0-.7.2-1.5.3-2.3"
            ></path>
          </svg>
        </a>
      </div>
      <div className="bg-black text-white text-center py-3 px-4">
        <p>
          &copy; {new Date().getFullYear()} PepsiCo, Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
