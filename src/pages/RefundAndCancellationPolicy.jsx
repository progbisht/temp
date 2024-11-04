// import BlogsComp from "../components/Blogs/BlogsComp";
// import Location from "../components/Location/Location";

const RefundAndCancellationPolicy = () => {
  return (
    <>
      <div className="container py-8 min-h-screen bg-gray-50 text-gray-800">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 border-l-8 border-primary/50 pl-4 text-3xl font-bold text-black">
            Refund and Cancellation Policy
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Effective Date: {new Date().toLocaleDateString()}{" "}
          </p>
          <p className="text-justify px-4 mb-6">
            At Esteem Travels, we strive to provide a smooth and satisfying
            experience. However, we understand that sometimes cancellations are
            necessary. Please review our refund and cancellation policies below.
          </p>
          <ul className="list-decimal pl-8 space-y-4 text-justify px-4">
            <li>
              Cancellation by the Customer More than 30 days before departure:
              Full refund minus administrative fees. 15-30 days before
              departure: 50% of the booking amount will be refunded. Less than
              15 days before departure: No refund will be issued.
            </li>
            <li>
              Cancellation by Esteem Travels If Esteem Travels must cancel a
              booking due to unforeseen circumstances, we will offer a full
              refund or reschedule options at no additional cost.{" "}
            </li>
            <li>
              Non-Refundable Items Certain elements of our packages, like
              airfare, hotel reservations, and entry fees, may be non-refundable
              depending on the policies of our third-party providers. This will
              be communicated during the booking process.{" "}
            </li>
            <li>
              Refund Process Refund requests will be processed within [10-15
              business days] after a cancellation has been confirmed. Please
              contact [contact@esteemtravels.com] with your booking details to
              initiate a refund.
            </li>
            <li>
              Changes to Policy Esteem Travels reserves the right to modify this
              policy at any time. Changes will be effective upon posting.
            </li>
          </ul>
          <p className="text-justify px-4 mt-6">
            For questions about our Privacy Policy, please contact us at
            <a
              href="mailto:contact@esteemtravels.com"
              className="text-primary underline ml-1"
            >
              contact@esteemtravels.com
            </a>
            .
          </p>
        </div>
      </div>
      {/* <Location />
          <BlogsComp /> */}
    </>
  );
};

export default RefundAndCancellationPolicy;
