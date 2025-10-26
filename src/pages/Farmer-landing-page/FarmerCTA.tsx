


const FarmerCTA: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto rounded-2xl bg-white/50 p-4 md:p-6 shadow-md">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* LEFT: Image */}
            <div className="w-full md:w-1/2">
              {/* Using public folder path so importing isn't necessary: /farmercta.jpg */}
              <img
                src="/images/farmercta.jpeg"
                alt="farmers with harvested corn"
                className="w-full h-64 md:h-64 object-cover rounded-lg shadow-sm"
              />
            </div>

            {/* RIGHT: Text Card */}
            <div className="w-full md:w-1/2">
              <div className="h-full bg-white rounded-lg p-6 md:p-8 flex flex-col justify-center shadow-lg border">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-gray-900 mb-3">
                  Ready to waste less
                  <br />
                  <span className="text-green-700">and earn more?</span>
                </h2>

                <p className="text-gray-600 mb-6">
                  Our aim is to reduce postharvest waste, and get buyers to get produce
                  directly from you.
                </p>

                <div>
                  <a
                    href="#signup"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition"
                  >
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerCTA;
