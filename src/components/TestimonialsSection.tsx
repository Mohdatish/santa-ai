import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Found the perfect gift for my mom in 2 minutes. She cried happy tears on Christmas!",
    author: "Sarah M.",
    role: "Happy Daughter",
    avatar: "👩",
  },
  {
    quote: "As someone who's terrible at gift-giving, this is a game changer.",
    author: "James K.",
    role: "Relieved Husband",
    avatar: "👨",
  },
  {
    quote: "Used it for my entire family. Everyone loved their presents. 10/10.",
    author: "Emily R.",
    role: "Organized Gifter",
    avatar: "👩‍🦰",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real stories from real people who found their perfect gifts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
