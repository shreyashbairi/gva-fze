import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import { List, ListItem } from "../ui/List";
import ProcurementImg from "../../assets/services/procurement.png";
import AutomationImg from "../../assets/services/automation.png";
import FieldServiceImg from "../../assets/services/field_service.png";
import ChemicalImg from "../../assets/services/chemical.png";
import RotatingImg from "../../assets/services/rotating.png";

const services = [
  {
    title: "PROCUREMENT",
    description: "We provide comprehensive procurement services, ensuring timely and cost-effective sourcing of products and equipment for your projects. Our expertise in global supply chain management allows us to navigate complex logistics and deliver high-quality solutions tailored to your needs.",
    deliverables: ["Global Supply and Spares", "Logistics and Expediting", "System Integration", "Turnkey Infrastructure", "Rotating and Static Assets", "Power and Infrastructure", "Process Facilities"],
    image: ProcurementImg,
  },
  {
    title: "ROTATING EQUIPMENT MAINTENANCE",
    description: "Our rotating equipment maintenance services are designed to keep your critical machinery running smoothly and efficiently. We offer a comprehensive range of services, including predictive maintenance, performance optimization, and emergency repairs, ensuring minimal downtime and maximum productivity for your operations.",
    deliverables: ["Turbine and Compressor Services", "Large-Scale Motor and Generator Care", "High-Pressure Pump Maintenance", "Vibration and Modal Analysis", "Dynamic Balancing and Alignment", "Non-Destructive Testing (NDT)", "Lube Oil and Seal Gas Systems", "Gearbox and Transmission Overhauls", "Governor and Control Calibration"],
    image: RotatingImg,
  },
  {
    title: "CHEMICAL EQUIPMENT MAINTENANCE",
    description: "Our chemical equipment maintenance services ensure the optimal performance and longevity of your critical systems. We provide comprehensive support across all stages of the equipment lifecycle, from initial installation to ongoing maintenance and repair.",
    deliverables: ["Ammonia and Urea Reactor Services", "Reformer and Primary Oven Maintenance", "Column and Tower Internals", "Heat Exchanger Management", "Boiler and Fired Heater Services", "Cryogenic and Storage Tank Care", "Catalyst Handling and Change-Out", "Chemical Cleaning and Decontamination", "Valve and Pressure Safety Management"],
    image: ChemicalImg,
  },
  {
    title: "AUTOMATION & ENGINEERING",
    description: "Our automation and engineering services are designed to enhance the efficiency and reliability of your operations. We offer a comprehensive range of solutions, including systems integration, process optimization, and digital transformation, to help you achieve your operational goals and stay competitive in today's rapidly evolving industrial landscape.",
    deliverables: ["Systems Integration", "Process Optimisation", "Digital Transformation", "Project Lifecycle Support", "Automation Solutions", "Engineering Consulting"],
    image: AutomationImg,
  },
  {
    title: "FIELD SERVICE SUPPORT",
    description: "Our field service support ensures that your equipment is always running at peak performance. We provide comprehensive on-site assistance, including installation, maintenance, and troubleshooting services to minimize downtime and maximize productivity.",
    deliverables: ["Installation and Field Services", "Advanced Electrical Testing", "Analytical and Safety Compliance", "System Protection"],
    image: FieldServiceImg,
  }
];

export function DetailedServicesBlock() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24">

          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`lg:grid lg:grid-cols-12 lg:gap-16 items-start ${!isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                <div className={`lg:col-span-6 ${!isEven ? "lg:col-start-7" : ""}`}>
                  <Heading level={2} className="mb-4 text-primary font-semibold">
                    {service.title}
                  </Heading>
                  <Text variant="lead" className="mb-8 text-justify">
                    {service.description}
                  </Text>

                  <List className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 space-y-0">
                    {service.deliverables.map((item, i) => (
                      <ListItem key={i}>
                        {item}
                      </ListItem>
                    ))}
                  </List>

                </div>

                <div className={`mt-10 lg:mt-0 lg:col-span-6 ${!isEven ? "lg:col-start-1" : ""}`}>
                  <div className="overflow-hidden shadow-xl border border-gray-100 transition-all hover:shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      aspectRatio="video"
                    />
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}