import { useParams } from "wouter";
import { Link } from "wouter";
import { serviceCategories } from "@/lib/services-data";
import ServicePage from "@/components/ServicePage";

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const allServices = serviceCategories.flatMap((c) =>
    c.services.map((s) => ({ ...s, categorySlug: c.slug }))
  );
  const service = allServices.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-4xl text-[#0A1628] font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
        <Link href="/services" className="text-[#E8611A] font-semibold hover:underline">
          View All Services
        </Link>
      </div>
    );
  }

  const isTree = service.categorySlug === "tree-service";
  return <ServicePage service={service} isTreeService={isTree} />;
}
