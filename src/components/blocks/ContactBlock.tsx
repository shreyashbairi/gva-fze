import { useState, useRef } from "react";
import { Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Textarea } from "../ui/Textarea";
import { Text } from "../ui/Text";
import { Heading } from "../ui/Heading";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/Card";
import { Callout } from "../ui/Callout";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export function ContactBlock() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setIsSubmitted(true);
    } catch (err) {
      console.log(err);
      setError(
        "We couldn't send your message. Please check your connection or try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-stretch">
          <Card className="h-full flex flex-col bg-gray-50 border-transparent shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary uppercase">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-base">
                Reach out using the form, or contact us directly using the
                information below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-4 flex-1">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Text className="font-semibold text-primary">Email Us</Text>
                  <Text className="text-gray-600 mt-1">
                    commercial@gva-fze.com
                  </Text>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Text className="font-semibold text-primary">Call Us</Text>
                  <Text className="text-gray-600 mt-1">+971 (58) 899-5410</Text>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Text className="font-semibold text-primary">Visit Us</Text>
                  <Text className="text-gray-600 mt-1">
                    Jumeirah Tower
                    <br />
                    Dubai, UAE
                  </Text>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col border-gray-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl uppercase text-primary">
                Send a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the fields below and we will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              {!isSubmitted ? (
                <form
                  ref={formRef}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="h-full flex flex-col gap-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="space-y-2">
                    <Label htmlFor="user_name">Full Name</Label>
                    <Input
                      id="user_name"
                      name="user_name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user_email">Email Address</Label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      required
                      className="min-h-37.5 h-full resize-none"
                    />
                  </div>

                  {error && (
                    <Callout
                      title="Submission Failed"
                      message={error}
                      onClose={() => setError(null)}
                    />
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                  </div>
                  <Heading level={3} className="mb-2">
                    Message Sent!
                  </Heading>
                  <Text className="text-gray-600 max-w-xs mx-auto">
                    Thank you for reaching out. We will get back to you within
                    24 hours.
                  </Text>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
