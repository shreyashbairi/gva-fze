import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";

export default function PrivacyPage() {
  const content = (
    <div className="space-y-10">
      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">1. Introduction</Heading>
        <Text>
          At Global Visionary Associates, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">2. The Data We Collect</Heading>
        <Text className="mb-4">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </Text>
        
        <List className="space-y-3">
          <ListItem icon={null}><span className="font-semibold text-primary">Identity Data:</span> Includes first name, last name, and title.</ListItem>
          <ListItem icon={null}><span className="font-semibold text-primary">Contact Data:</span> Includes email address and telephone numbers.</ListItem>
          <ListItem icon={null}><span className="font-semibold text-primary">Technical Data:</span> Includes IP address, browser type, and time zone setting.</ListItem>
          <ListItem icon={null}><span className="font-semibold text-primary">Usage Data:</span> Includes information about how you use our website.</ListItem>
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">3. Data Security</Heading>
        <Text>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.
        </Text>
      </section>
    </div>
  );

  return <LegalPage title="Privacy Policy" lastUpdated="April 10, 2026" content={content} />;
}