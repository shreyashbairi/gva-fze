import { Circle } from "lucide-react";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";

export default function TermsPage() {
  const Bullet = <Circle className="h-2 w-2 fill-current mt-2" />;

  const content = (
    <div className="space-y-10">
      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">1. Acceptance of Terms</Heading>
        <Text>
          By accessing or using the Global Visionary Associates website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">2. Use License</Heading>
        <Text className="mb-4">
          Under this license, you may not:
        </Text>
        
        <List className="space-y-3">
          <ListItem icon={Bullet}>Modify or copy the materials for commercial use;</ListItem>
          <ListItem icon={Bullet}>Attempt to decompile or reverse engineer any software on the site;</ListItem>
          <ListItem icon={Bullet}>Remove any copyright or other proprietary notations;</ListItem>
          <ListItem icon={Bullet}>Transfer the materials to another person or 'mirror' the materials.</ListItem>
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary uppercase font-semibold">3. Governing Law</Heading>
        <Text>
          These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates.
        </Text>
      </section>
    </div>
  );

  return <LegalPage title="Terms of Service" lastUpdated="April 10, 2026" content={content} />;
}