import { Car, Wind, Building, Cog, Users, Factory, Wrench, Scaling, ShieldCheck, HardHat, Package, Award, Target, Milestone, Zap, Bot } from 'lucide-react';

export const navLinks = [
  { href: '/', labelKey: 'nav_home' },
  { href: '/products', labelKey: 'nav_products' },
  { href: '/capabilities', labelKey: 'nav_capabilities' },
  { href: '/industries', labelKey: 'nav_industries' },
  { href: '/quality', labelKey: 'nav_quality' },
  { href: '/about', labelKey: 'nav_about' },
  { href: '/contact', labelKey: 'nav_contact' },
];

export const capabilities = [
  {
    titleKey: 'home_capability_custom_title',
    descriptionKey: 'home_capability_custom_desc',
    icon: Wrench,
    imageId: 'capability-custom',
  },
  {
    titleKey: 'home_capability_scalable_title',
    descriptionKey: 'home_capability_scalable_desc',
    icon: Scaling,
    imageId: 'capability-scalable',
  },
  {
    titleKey: 'home_capability_quality_title',
    descriptionKey: 'home_capability_quality_desc',
    icon: ShieldCheck,
    imageId: 'capability-quality',
  },
  {
    titleKey: 'home_capability_engineering_title',
    descriptionKey: 'home_capability_engineering_desc',
    icon: Users,
    imageId: 'capability-engineering',
  },
];

export const products = [
  {
    slug: 'custom-components',
    titleKey: 'product_custom_components_title',
    descriptionKey: 'product_custom_components_desc',
    imageId: 'product-custom-components',
  },
  {
    slug: 'industrial-assemblies',
    titleKey: 'product_industrial_assemblies_title',
    descriptionKey: 'product_industrial_assemblies_desc',
    imageId: 'product-industrial-assemblies',
  },
  {
    slug: 'oem-manufacturing',
    titleKey: 'product_oem_manufacturing_title',
    descriptionKey: 'product_oem_manufacturing_desc',
    imageId: 'product-oem-manufacturing',
  },
  {
    slug: 'contract-manufacturing',
    titleKey: 'product_contract_manufacturing_title',
    descriptionKey: 'product_contract_manufacturing_desc',
    imageId: 'product-contract-manufacturing',
  },
];

export const industries = [
  { nameKey: 'industry_automotive_title', icon: Car, descriptionKey: 'industry_automotive_desc', imageId: 'industry-automotive' },
  { nameKey: 'industry_energy_title', icon: Wind, descriptionKey: 'industry_energy_desc', imageId: 'industry-energy' },
  { nameKey: 'industry_construction_title', icon: Building, descriptionKey: 'industry_construction_desc', imageId: 'industry-construction' },
  { nameKey: 'industry_equipment_title', icon: HardHat, descriptionKey: 'industry_equipment_desc', imageId: 'industry-equipment' },
  { nameKey: 'industry_oem_title', icon: Package, descriptionKey: 'industry_oem_desc', imageId: 'industry-oem' },
];

export const whyChooseUs = [
  { titleKey: 'home_value_point_1_title', descriptionKey: 'home_value_point_1_desc', icon: Cog },
  { titleKey: 'home_value_point_2_title', descriptionKey: 'home_value_point_2_desc', icon: Bot },
  { titleKey: 'home_value_point_3_title', descriptionKey: 'home_value_point_3_desc', icon: Users },
  { titleKey: 'home_value_point_4_title', descriptionKey: 'home_value_point_4_desc', icon: Award },
];

export const milestones = [
    { year: '2005', eventKey: 'Founded as a small machine shop' },
    { year: '2010', eventKey: 'Expanded into CNC machining' },
    { year: '2015', eventKey: 'Achieved ISO 9001 certification' },
    { year: '2020', eventKey: 'Moved to new 50,000 sq-ft facility' },
];

export const capabilitiesPageData = [
    {
        titleKey: 'capabilities_processes_title',
        descriptionKey: 'capabilities_processes_desc',
        imageId: 'capabilities-process',
        icon: Factory
    },
    {
        titleKey: 'capabilities_machinery_title',
        descriptionKey: 'capabilities_machinery_desc',
        imageId: 'capabilities-machinery',
        icon: Zap
    },
    {
        titleKey: 'capabilities_engineering_title',
        descriptionKey: 'capabilities_engineering_desc',
        imageId: 'capabilities-customization',
        icon: Users
    },
    {
        titleKey: 'capabilities_capacity_title',
        descriptionKey: 'capabilities_capacity_desc',
        imageId: 'capabilities-scalability',
        icon: Scaling
    },
];

export const qualityPageData = [
    {
        titleKey: 'quality_philosophy_title',
        descriptionKey: 'quality_philosophy_desc',
        imageId: 'quality-philosophy',
        icon: Target
    },
    {
        titleKey: 'quality_inspection_title',
        descriptionKey: 'quality_inspection_desc',
        imageId: 'quality-inspection',
        icon: ShieldCheck
    },
    {
        titleKey: 'quality_certifications_title',
        descriptionKey: 'quality_certifications_desc',
        imageId: 'quality-certs',
        icon: Award
    },
    {
        titleKey: 'quality_improvement_title',
        descriptionKey: 'quality_improvement_desc',
        imageId: 'quality-improvement',
        icon: Milestone
    },
]
