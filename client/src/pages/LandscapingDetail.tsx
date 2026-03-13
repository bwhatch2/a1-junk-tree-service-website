/*
  LANDSCAPING SERVICE DETAIL PAGE
  Uses the same ServicePage template with landscaping-specific routing
*/

import { useParams } from "wouter";
import { useEffect } from "react";
import { useLocation } from "wouter";
import ServicePage from "@/components/ServicePage";
import { getServiceBySlug } from "@/lib/services-data";

export default function LandscapingDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const service = getServiceBySlug(params.slug || "");

  useEffect(() => {
    if (!service || service.categorySlug !== "landscaping") {
      navigate("/landscaping", { replace: true });
    }
  }, [service, navigate]);

  if (!service || service.categorySlug !== "landscaping") return null;

  return <ServicePage service={service} serviceType="landscaping" />;
}
