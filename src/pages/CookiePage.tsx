import { Circle } from "lucide-react";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";

export default function CookiePage() {
  const Bullet = <Circle className="h-2 w-2 fill-current mt-2" />;

  const content = (
    <div className="space-y-10">
      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">1. What Are Cookies?</Heading>
        <Text>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">2. How We Use Cookies</Heading>
        <Text className="mb-4">
          We use cookies for several reasons, including:
        </Text>
        <List className="space-y-3">
          <ListItem icon={Bullet}><span className="font-semibold text-primary">Essential Cookies:</span> Necessary for the website to function (e.g., security and accessibility).</ListItem>
          <ListItem icon={Bullet}><span className="font-semibold text-primary">Performance Cookies:</span> Help us understand how visitors interact with our site by collecting and reporting information anonymously.</ListItem>
          <ListItem icon={Bullet}><span className="font-semibold text-primary">Functional Cookies:</span> Allow the site to remember choices you make (like your language) to provide enhanced features.</ListItem>
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">3. Managing Your Preferences</Heading>
        <Text>
          Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-primary hover:underline" target="_blank">aboutcookies.org</a>.
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage 
      title="Cookie Policy" 
      lastUpdated="April 10, 2026" 
      content={content} 
    />
  );
}