import { PresetTemplate, CampaignData, ChannelMetric, FaqItem } from './types';

export const PRESET_TEMPLATES: PresetTemplate[] = [
  {
    id: 'google-search',
    name: 'Google Ads Search',
    platform: 'Google Ads',
    iconName: 'Search',
    source: 'google',
    medium: 'cpc',
    campaignDefault: 'brand_search_q1',
    description: 'High-intent search keyword campaigns'
  },
  {
    id: 'meta-instagram',
    name: 'Meta / Instagram',
    platform: 'Meta Ads',
    iconName: 'Share2',
    source: 'instagram',
    medium: 'paid_social',
    campaignDefault: 'retargeting_stories_v2',
    description: 'Dynamic carousel and story ads'
  },
  {
    id: 'linkedin-b2b',
    name: 'LinkedIn Sponsored',
    platform: 'LinkedIn',
    iconName: 'Briefcase',
    source: 'linkedin',
    medium: 'social_ad',
    campaignDefault: 'executive_whitepaper_2026',
    description: 'B2B enterprise account targeting'
  },
  {
    id: 'newsletter-digest',
    name: 'Weekly Newsletter',
    platform: 'Email',
    iconName: 'Mail',
    source: 'newsletter',
    medium: 'email',
    campaignDefault: 'product_digest_issue_48',
    description: 'Subscribed subscriber broadcast'
  },
  {
    id: 'x-twitter',
    name: 'X (Twitter) Feed',
    platform: 'X / Twitter',
    iconName: 'Twitter',
    source: 'twitter',
    medium: 'social',
    campaignDefault: 'announcement_launch_thread',
    description: 'Organic and boosted tweet threads'
  }
];

export const DEMO_CAMPAIGNS: CampaignData[] = [
  {
    id: 'cmp-1',
    name: 'google_search_competitor_intent',
    source: 'google',
    medium: 'cpc',
    clicks: 14820,
    conversions: 842,
    conversionRate: '5.68%',
    spend: '$4,210',
    revenue: '$28,400',
    roas: '6.7x',
    status: 'active'
  },
  {
    id: 'cmp-2',
    name: 'meta_founder_case_study_video',
    source: 'instagram',
    medium: 'paid_social',
    clicks: 22150,
    conversions: 712,
    conversionRate: '3.21%',
    spend: '$3,800',
    revenue: '$19,250',
    roas: '5.1x',
    status: 'active'
  },
  {
    id: 'cmp-3',
    name: 'linkedin_enterprise_security_q1',
    source: 'linkedin',
    medium: 'social_ad',
    clicks: 6940,
    conversions: 421,
    conversionRate: '6.07%',
    spend: '$5,150',
    revenue: '$44,800',
    roas: '8.7x',
    status: 'active'
  },
  {
    id: 'cmp-4',
    name: 'email_march_feature_roundup',
    source: 'newsletter',
    medium: 'email',
    clicks: 9840,
    conversions: 620,
    conversionRate: '6.30%',
    spend: '$420',
    revenue: '$14,600',
    roas: '34.7x',
    status: 'active'
  },
  {
    id: 'cmp-5',
    name: 'youtube_tech_influencer_review',
    source: 'youtube',
    medium: 'influencer',
    clicks: 8120,
    conversions: 310,
    conversionRate: '3.82%',
    spend: '$2,500',
    revenue: '$9,300',
    roas: '3.7x',
    status: 'paused'
  }
];

export const CHANNEL_BREAKDOWN: ChannelMetric[] = [
  { channel: 'Search (Google/Bing CPC)', sessions: 38400, percentage: 38, conversions: 2180, revenue: '$74,200', color: 'bg-emerald-500' },
  { channel: 'Paid Social (Meta/LinkedIn)', sessions: 29500, percentage: 29, conversions: 1240, revenue: '$48,600', color: 'bg-indigo-500' },
  { channel: 'Direct & Brand Referrals', sessions: 18200, percentage: 18, conversions: 890, revenue: '$32,100', color: 'bg-cyan-500' },
  { channel: 'Email Marketing', sessions: 15100, percentage: 15, conversions: 940, revenue: '$26,400', color: 'bg-amber-500' }
];

export const INTEGRATIONS_LIST = [
  {
    name: 'Google Analytics 4',
    category: 'Analytics Suite',
    status: 'Native Direct Sync',
    badge: 'Native',
    description: 'Auto-map campaign names, source and medium dimensions directly into standard GA4 exploration reports without manual tagging discrepancies.'
  },
  {
    name: 'Meta Conversions API (CAPI)',
    category: 'Ad Platform',
    status: 'Server-Side Event Sync',
    badge: 'Server-Side',
    description: 'Send post-click conversion events and UTM session IDs back to Meta ad manager to power ROAS optimization despite iOS ad blockers.'
  },
  {
    name: 'Shopify / Stripe Checkout',
    category: 'E-commerce & Billing',
    status: 'Webhook Attribution',
    badge: 'Real-time',
    description: 'Attach the exact first-touch and last-touch UTM parameter payload directly to customer invoices and transaction records.'
  },
  {
    name: 'HubSpot & Salesforce CRM',
    category: 'Sales CRM',
    status: 'Contact Field Mapping',
    badge: 'Native',
    description: 'Stamp inbound lead forms with campaign source, medium, ad creative, and campaign ID on initial form submission.'
  },
  {
    name: 'Segment & Reverse ETL',
    category: 'Customer Data Platform',
    status: 'Webhook Pipeline',
    badge: 'API-based',
    description: 'Stream enriched UTM touchpoint telemetry to warehouse destinations like Snowflake, BigQuery, or Redshift.'
  },
  {
    name: 'Zapier & Make',
    category: 'Automation',
    status: 'Automation Triggers',
    badge: 'Universal',
    description: 'Trigger slack alerts, update Google Sheets, or fire custom webhooks whenever a campaign link reaches conversion thresholds.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'UTM Basics',
    question: 'What is a UTM tracking link and why is parameter hygiene critical?',
    answer: 'UTM (Urchin Tracking Module) parameters are standardized tags appended to a URL (e.g. ?utm_source=google&utm_medium=cpc). When visitors click your link, analytics platforms capture these parameters. Without consistent naming conventions (e.g., mixing "facebook", "Facebook", and "fb"), your campaign reports fragment, obscuring true marketing ROI.'
  },
  {
    category: 'Attribution',
    question: 'How does PitchWeb differentiate First-Touch vs Last-Touch attribution?',
    answer: 'First-touch attribution credits the campaign link that originally introduced the customer to your product. Last-touch attribution credits the final campaign link clicked immediately prior to conversion. PitchWeb ingests session tokens so you can toggle between both models to understand both top-of-funnel discovery and bottom-of-funnel closing.'
  },
  {
    category: 'Privacy & Analytics',
    question: 'What is the difference between PitchWeb and standard Google Analytics?',
    answer: 'Google Analytics measures generic on-site behavior and traffic aggregates. PitchWeb provides link-level governance (team naming presets, automatic sanitization, link shorteners), server-side conversion mapping to Stripe/Shopify, and privacy-first parameter preservation that avoids third-party cookie restrictions.'
  },
  {
    category: 'Privacy & Analytics',
    question: 'Does tracking depend on third-party cookies or intrusive scripts?',
    answer: 'No. PitchWeb operates primarily through URL query parameters and first-party session storage. It respects privacy regulations (GDPR, CCPA, ePrivacy) by avoiding cross-site third-party tracking scripts and browser finger-printing.'
  },
  {
    category: 'UTM Basics',
    question: 'Can I export campaign data or connect my existing custom domain?',
    answer: 'Yes. All campaign data can be exported in CSV/JSON formats or queried via REST API. Custom short domains (e.g., link.yourbrand.com) are natively supported on Pro and Scale tiers with automated SSL certificate provisioning.'
  }
];
