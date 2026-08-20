import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/projects",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: now,
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${site.url}/industries/${industry.slug}`,
    lastModified: now,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: now,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...projectRoutes, ...caseStudyRoutes];
}
