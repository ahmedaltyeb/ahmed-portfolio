import { useInView } from "@/hooks/useInView";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sara Lee",
    role: "IT Director",
    company: "A2C College",
    quote: "Ahmedeltyeb's web development work was outstanding. The project exceeded our expectations and greatly improved user engagement.",
    initials: "SL",
  },
  {
    name: "Tayeb Technology",
    role: "Project Manager",
    company: "",
    quote: "Ahmedeltyeb delivered a top-notch e-commerce site with great performance. His ongoing support has been invaluable.",
    initials: "TT",
  },
  {
    name: "Zool Man",
    role: "Store Owner",
    company: "",
    quote: "Professional and skilled, Ahmedeltyeb made our custom web application a success. His problem-solving was impressive.",
    initials: "ZM",
  },
  {
    name: "Gold Signature",
    role: "Entrepreneur",
    company: "Men's Tailoring",
    quote: "Ahmedeltyeb's UI/UX design improved user satisfaction significantly. His creativity and technical skills are exceptional.",
    initials: "GS",
  },
];

export const Testimonials = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what clients and collaborators say about my work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`group bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/40 mb-4 group-hover:text-primary/60 transition-colors" />
                  
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
