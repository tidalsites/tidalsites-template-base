import { IconType } from "react-icons";
import { SectionHeader } from "./SectionHeader";
import { RiEye2Line } from "react-icons/ri";

const services = [
  {
    service: "Company Services",
    description:
      "We offer a wide range of services to help you achieve your goals.",
    Icon: RiEye2Line,
  },
  {
    service: "People Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehenderit repellat itaque quos nemo nisi expedita, deleniti unde modi aperiam voluptatibus quam facilis saepe voluptates.",
    Icon: RiEye2Line,
  },
  {
    service: "Generic Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Periam voluptatibus quam facilis saepe voluptates.",
    Icon: RiEye2Line,
  },
  {
    service: "Generic Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Periam voluptatibus quam facilis saepe voluptates.",
    Icon: RiEye2Line,
  },
  {
    service: "Generic Services",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    Icon: RiEye2Line,
  },
  {
    service: "Generic Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Periam voluptatibus quam facilis saepe voluptates.",
    Icon: RiEye2Line,
  },
];

export const Services = () => {
  return (
    <section className="px-4">
      <SectionHeader
        heading="Services"
        subheading="We offer a wide range of services to help you achieve your goals."
      />
      <div className="grid grid-cols-1 gap-4 justify-items-center w-fit mx-auto | sm:grid-cols-2 | md:grid-cols-3">
        {services.map(({ service, description, Icon }, index) => (
          <SectionCard
            key={index}
            Icon={Icon}
            service={service}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

type ServiceCardProps = {
  Icon: IconType;
  service: string;
  description: string;
};

const SectionCard = ({ Icon, service, description }: ServiceCardProps) => {
  return (
    <div className="flex gap-4 p-4 bg-bg-alt w-fit">
      <Icon className="text-4xl text-accent" />
      <div>
        <p className="text-lg font-bold">{service}</p>
        <p className="max-w-[30ch]">{description}</p>
      </div>
    </div>
  );
};
