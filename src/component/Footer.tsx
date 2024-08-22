import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" flex bg-white text-gray-600 text-sm">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h2 className="font-bold text-black mb-2">what happened</h2>
            <ul className="space-y-2">
              <li>[Notice] Announcement of personal data processing policy changes</li>
              <li>[Notice] 29CM Gangnam store closing</li>
              <li>[Notice] Announcement of personal data processing policy changes</li>
              <li>[Notice] Support for iOS 10 and below ends</li>
              <li>[Notice] Announcement of personal data processing policy changes</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-black mb-2">about us</h2>
            <ul className="space-y-2">
              <li>Company Introduction</li>
              <li>Recruitment</li>
              <li>Temporary Discount Benefits</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-black mb-2">my order</h2>
            <ul className="space-y-2">
              <li>My Orders</li>
              <li>Order Delivery</li>
              <li>Cancellation/Exchange/Return History</li>
              <li>Product Review History</li>
              <li>Issuance of Proof Documents</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-black mb-2">my account</h2>
            <ul className="space-y-2">
              <li>Edit Member Information</li>
              <li>Membership Grade</li>
              <li>Mileage Status</li>
              <li>Coupons</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-black mb-2">help</h2>
            <ul className="space-y-2">
              <li>1:1 Inquiry History</li>
              <li>Product Q&A History</li>
              <li>Notice</li>
              <li>Frequently Asked Questions</li>
              <li>Customer Feedback</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-gray-500 text-xs">
          <p>© 2020-2021 what happened corp | CEO: Gil-dong Hong | Business Registration Number: 356-00-00000</p>
          <p>Seoul, Gangnam-gu, Dosan-daero 8-gil 17 | FAX: 070-0000-0000 | Email: test0101@what.happened.co.kr</p>
          <p className="mt-4">
            <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-green-500"><i className="fab fa-naver"></i></a>
            <a href="#" className="text-blue-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
