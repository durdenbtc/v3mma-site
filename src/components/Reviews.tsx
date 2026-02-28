const reviews = [
  {
    name: "Steve O.",
    text: "This is by far the best Dojo I have ever trained in. The atmosphere is very conducive to learning and growing.",
    rating: 5,
  },
  {
    name: "Jeremiah D.",
    text: "This gym is amazing and very beginner friendly, the trainers go over everything with great detail and work with you very well.",
    rating: 5,
  },
  {
    name: "Dwight D.",
    text: "As a beginner I definitely enjoy the sessions. I've been going for the past 4 months and Shane does a great job.",
    rating: 5,
  },
  {
    name: "Steve M.",
    text: "My guy Shane is the real deal! I'm learning things I never thought I'd be doing. Very informative and definitely the place to go!",
    rating: 5,
  },
  {
    name: "Nelson M.",
    text: "V3 MMA is hands down one of the best gyms around! The facility is spotless, beautifully maintained, and has everything you need.",
    rating: 5,
  },
  {
    name: "Emeric M.",
    text: "I've been searching around for an affordable gym where they can teach you the basics and I must say V3 is where it's at.",
    rating: 5,
  },
  {
    name: "Zachary C.",
    text: "I went in for a trial class and it was great. Everyone was welcoming. I train in New York and V3 held its own.",
    rating: 5,
  },
  {
    name: "Robert C.",
    text: "Fantastic new MMA workout center! Convenient location, right off route 95 in Port St. Lucie, with plenty of parking.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0f1729]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Stars count={5} />
            <span className="text-yellow-400 font-bold text-lg">5.0</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            What Our Members Say
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            37 five-star reviews on Google — don&apos;t take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-5 sm:p-6"
            >
              <Stars count={review.rating} />
              <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-white font-semibold text-sm">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/V3+MMA+Gym+%26+Fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            See all 37 reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
