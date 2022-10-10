import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-primary md:flex justify-center border-t-8 border-footer">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between w-4/5 py-6 md:py-3 ">
          {/* links */}
          <div>
            <span
              onClick={() => window.open("https://directed.dev/")}
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-footerInner rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mb-2 md:mb-0"
            >
              Need Help?
            </span>
          </div>
          <div>
            <span
              onClick={() => window.open("https://directed.dev/")}
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-footerInner rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
            >
              HAVE A SUGGESTION?
            </span>
          </div>
          {/* Copyrights note */}
          <div className="flex flex-col text-sm text-white mr-4">
            <span>Terms and Conditions | Privacy Policy </span>
            <span>© 2022 DirectEd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
