import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface EmailCaptureProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
  resourceName?: string;
  onSubmit?: (email: string) => void;
}

export const EmailCapture = ({
  buttonText = "Get Started",
  placeholder = "Work email address",
  className = "",
  resourceName = "Newsletter Signup",
  onSubmit,
}: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      timestamp: new Date().toISOString(),
      email: email,
      name: '',
      subject: '',
      message: '',
      type: resourceName
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/65pamivcklhb7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      });

      if (response.ok) {
        if (onSubmit) {
          onSubmit(email);
        }
        toast.success("Success!", {
          description: `The ${resourceName} will be sent to ${email}`
        });
        setEmail("");
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast.error("Submission failed", {
        description: "Please try again or contact us at contact@vaigence.com"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 ${className}`}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 h-12 bg-background"
      />
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-12 px-8 bg-primary hover:bg-emerald-600 text-white shadow-sm hover:shadow-md hover:shadow-emerald-500/20 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : buttonText}
        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
      </Button>
    </form>
  );
};
