import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl">
        <Card className="border-0 shadow-lg backdrop-blur-sm bg-card/95 animate-fade-in">
          <CardContent className="p-8 sm:p-12 lg:p-16 space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent leading-tight pb-2">
              خوش آمدید
            </h1>

            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-foreground/90 text-center leading-relaxed">
                به دنیای هوش مصنوعی خوش آمدید
              </p>

              {/* More Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-all duration-300 font-medium"
                >
                  <span>بیشتر</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showMore ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Expandable Content */}
              {showMore && (
                <div className="animate-fade-in">
                  <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed p-6 rounded-lg bg-gradient-to-l from-primary/5 to-accent/5 border border-border/50">
                    هوش مصنوعی دنیای ما را متحول کرده است. از دستیارهای هوشمند گرفته تا
                    سیستم‌های پیشرفته تحلیل داده، این فناوری در حال تغییر نحوه زندگی و کار
                    ماست. با استفاده از ابزارهای قدرتمند هوش مصنوعی، می‌توانید خلاقیت خود
                    را به سطح جدیدی برسانید.
                  </p>
                </div>
              )}
            </div>

            {/* Gemini Link */}
            <div className="flex justify-center pt-4">
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-accent text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  جمینی پرقدرت
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
